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
	private payhippoWhatsappNumber: string;

	constructor({ urlShortnerProvider, env }: TwilioProviderConstructor) {
		super({ urlShortnerProvider });

		this.accountSid = env._TWILLO_ACCOUNT_SID;
		this.authToken = env._TWILLO_ACCOUNT_AUTH_TOKEN;
		this.payhippoWhatsappNumber = env._PAYHIPPO_WHATSAPP_NUMBER;

		this.twiloClient = twilio(this.accountSid, this.authToken, {
			lazyLoading: true,
		});
	}

	private getWhatsappNumber(number: string) {
		if (number) {
			return `whatsapp:${number}`;
		}
		return '';
	}

	public async sendWhatsapp(props: IWhatsappNotificationPayload): Promise<void> {
		const { to, data, from, template } = props;
		try {
			const message = this.getTemplate({
				template,
				data,
				format: Format.SMS,
			});

			logger.log('getting template message', message);

			const twilloResponse = await this.twiloClient.messages.create({
				body: message,
				from: from
					? this.getWhatsappNumber(this.formatPhoneNumber(from))
					: this.getWhatsappNumber(this.payhippoWhatsappNumber),
				to: this.getWhatsappNumber(this.formatPhoneNumber(to)),
			});

			logger.log(`sending whatsapp to ${to}`, twilloResponse.status);
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
