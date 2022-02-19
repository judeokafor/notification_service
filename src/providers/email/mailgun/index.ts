import { logger } from '@payhippo/node-service-base';
import Mailgun, { Attachment } from 'mailgun-js';
import { Parser } from 'json2csv';

import { Format, MessageType } from '../../../interfaces/common.enums';

import IEmailProvider, {
	IEmailNotificationPayload,
} from '../../../interfaces/email/IEmailProvder.interface';

import HtmlBasedMessage from '../../htmlMessage.base';

import {
	MailgunProviderConstructor,
	GetAttachmentPayload,
	GenerateRecipientProp,
	GenerateEmailRecipientProp,
	GenerateEmailRecipients,
	GetSendOptionsProps,
	MailgunOptions,
} from './types';

import { paymentAuditFields } from '../../../constants';

export default class MailgunProvider extends HtmlBasedMessage implements IEmailProvider {
	private apiKey: string;
	private domain: string;
	private mailgun: Mailgun.Mailgun;

	constructor({ apiKey, domain }: MailgunProviderConstructor) {
		super();

		this.apiKey = apiKey;
		this.domain = domain;

		this.mailgun = new Mailgun({
			apiKey: this.apiKey,
			domain: this.domain,
			...(this.isProductionEnvironment() && {
				host: 'api.eu.mailgun.net',
			}),
		});
	}

	private showEnvironment() {
		const currentEnvironmrnt = process.env._APP_ENV || '';
		return this.isProductionEnvironment() ? '' : `-${currentEnvironmrnt.toUpperCase()}`;
	}

	private getAttachment(payload: GetAttachmentPayload): Attachment | undefined {
		const { type, data } = payload;

		let attachment: Attachment | undefined;

		if (type === MessageType.PAYMENT_AUDIT) {
			const { csvData, date } = data;
			const fileName = `payment-audit-${date}.csv`;

			const json2csvParser = new Parser({
				fields: paymentAuditFields,
			});

			const csv = json2csvParser.parse(csvData);

			const csvBuffer = Buffer.from(csv, 'utf8');

			attachment = new this.mailgun.Attachment({
				filename: fileName,
				data: csvBuffer,
			});
		}

		if (type === MessageType.METRICS_CSV) {
			const { buffer } = data;

			attachment = new this.mailgun.Attachment({
				filename: 'metrics.csv',
				data: buffer,
			});
		}

		return attachment;
	}

	private async generateAccountMangerEmail(accountManagerId: string) {
		let email = 'hello@payhippo.ng';

		try {
			if (accountManagerId) {
				// @TODO: make request to admin service to retrieve admin details;
				// probably make it unauthenticated;

				email = 'jude.okafor@payhippo.ng';
			}
		} catch (error) {
			logger.log(error);
		}

		logger.log('accountManager Email', email);

		return email;
	}

	private getRecipients(props: GenerateRecipientProp): string[] {
		const { accountManagerMail, includeCC, noReply, partnerEmail } = props;
		const recipients = [] as string[];

		const isProduction = this.isProductionEnvironment();

		if (isProduction && !noReply) {
			recipients.push(accountManagerMail);

			if (includeCC) {
				recipients.push(process.env._PAY_HIPPO_TEAM_EMAILS || '');
			}

			if (partnerEmail) {
				recipients.push(partnerEmail);
			}
		} else if (!isProduction) {
			recipients.push(process.env._DEV_TEST_EMAIL || '');
		}

		return recipients;
	}

	private async generateEmails(
		props: GenerateEmailRecipientProp
	): Promise<GenerateEmailRecipients> {
		const {
			to,
			accountManagerId,
			includeCC = false,
			noReply = false,
			partnerEmail = '',
		} = props;

		let envBasedTo = process.env._DEV_TEST_EMAIL || '';
		let emailsToSend = [] as string[];

		try {
			const isProduction = this.isProductionEnvironment();

			if (isProduction) {
				const accountManagerMail = await this.generateAccountMangerEmail(accountManagerId);

				emailsToSend = this.getRecipients({
					accountManagerMail,
					includeCC,
					noReply,
					partnerEmail,
				});

				envBasedTo = to;
			}
		} catch (error) {
			if (error instanceof Error) {
				logger.error('generateEmails', error.message);
			}
		}

		return { emailsToSend, envBasedTo };
	}

	private async getSendOptions(options: GetSendOptionsProps): Promise<MailgunOptions> {
		const {
			to,
			accountManagerId,
			includeCC = false,
			noReply = false,
			partnerEmail = '',
			html,
			subject,
			data,
			type,
		} = options;

		const generateEmailOptions: GenerateEmailRecipientProp = {
			to,
			accountManagerId,
			includeCC,
			noReply,
			partnerEmail,
		};

		const { envBasedTo, emailsToSend } = await this.generateEmails(generateEmailOptions);

		const attachment = this.getAttachment({
			data,
			type,
		});

		return {
			cc: emailsToSend,
			from: `Payhippo ${process.env._GMAIL_ADMIN_EMAIL}`,
			html,
			subject,
			to: envBasedTo,
			attachment,
		};
	}

	public async sendMail(props: IEmailNotificationPayload): Promise<void> {
		const {
			to,
			accountManagerId,
			partnerEmail,
			title,
			template,
			includeCC = false,
			noReply = false,
			data,
			type,
		} = props;

		const subject = `[Payhippo${this.showEnvironment()}] ${title}`;

		const html = this.getTemplate({ template, data, format: Format.HTML });

		const mailgunSendOptions = await this.getSendOptions({
			subject,
			to,
			accountManagerId,
			html,
			includeCC,
			noReply,
			partnerEmail,
			data,
			type,
		});

		try {
			const isProduction = this.isProductionEnvironment();
			const isEmailValid = this.verifyEmail(to);

			if (isProduction && isEmailValid) {
				await this.mailgun.messages().send(mailgunSendOptions);
				return;
			}

			logger.log(`Dev call sending email to ${to}`);
		} catch (error) {
			logger.error(error);
		}
	}
}
