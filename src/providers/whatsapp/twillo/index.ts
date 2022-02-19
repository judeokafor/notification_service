import twilio from 'twilio';
import { logger } from '@payhippo/node-service-base';

import { Format } from '../../../interfaces/common.enums';

import ISmsProvider, {
	ISmsNotificationPayload,
} from '../../../interfaces/sms/ISmsProvider.interface';
import IWhatsappProvider, {
	IWhatsappNotificationPayload,
} from '../../../interfaces/whatsapp/IWhatsappProvider.interface';

import PhoneNumberBasedMessage from '../../phoneNumberMessage.base';

import { TwilioProviderConstructor } from './types';

export default class TwilioProvider
	extends PhoneNumberBasedMessage
	implements ISmsProvider, IWhatsappProvider
{
	private twiloClient: twilio.Twilio;
	private accountSid: string;
	private authToken: string;

	constructor({ accountSid, authToken }: TwilioProviderConstructor) {
		super();

		this.accountSid = accountSid;
		this.authToken = authToken;

		this.twiloClient = twilio(this.accountSid, this.authToken, {
			lazyLoading: true,
		});
	}

	private getWhatsappNumber(number: string) {
		return `whatsapp:${number}`;
	}

	public async sendWhatsapp(props: IWhatsappNotificationPayload): Promise<void> {
		const { to, data, from, template } = props;
		try {
			const isProduction = this.isProductionEnvironment();

			if (isProduction) {
				const message = this.getTemplate({
					template,
					data,
					format: Format.SMS,
				});

				await this.twiloClient.messages.create({
					body: message,
					from: from
						? this.getWhatsappNumber(this.formatPhoneNumber(from))
						: this.getWhatsappNumber(process.env._PAYHIPPO_WHATSAPP_NUMBER || ''),
					to: this.getWhatsappNumber(this.formatPhoneNumber(to)),
				});

				return;
			}

			logger.log(`Dev call sending whatsapp to ${to}`);
		} catch (error) {
			logger.error(error);
		}
	}

	public async sendSms(props: ISmsNotificationPayload): Promise<void> {
		const { to, template, data } = props;
		try {
			const isProduction = this.isProductionEnvironment();

			if (isProduction) {
				const message = this.getTemplate({
					template,
					data,
					format: Format.SMS,
				});

				await this.twiloClient.messages.create({
					to: this.formatPhoneNumber(to),
					body: message,
					from: 'Payhippo',
				});

				return;
			}

			logger.log(`Dev call sending to ${to}`);
		} catch (error) {
			logger.error(error);
		}
	}
}
