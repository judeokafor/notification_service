import { NOTIFICATION_CHANNEL } from '../../interfaces/common.enums';

import IEmailProvider, {
	IEmailNotificationPayload,
} from '../../interfaces/email/IEmailProvder.interface';
import ISlackProvider, {
	ISlackNotificationPayload,
} from '../../interfaces/slack/ISlackProvider.interface';
import ISmsProvider, { ISmsNotificationPayload } from '../../interfaces/sms/ISmsProvider.interface';
import IWhatsappProvider, {
	IWhatsappNotificationPayload,
	RetryMessageWithSmsPayload,
} from '../../interfaces/whatsapp/IWhatsappProvider.interface';

import {
	GetNotificationChannel,
	NotificationServiceConstructor,
	RetryMessageWithSms,
} from './types';

export default class NotificationService {
	private emailProvider: IEmailProvider;
	private smsProvider: ISmsProvider;
	private whatsappProvider: IWhatsappProvider;
	private slackProvider: ISlackProvider;

	constructor(props: NotificationServiceConstructor) {
		const { emailProvider, smsProvider, whatsappProvider, slackProvider } = props;
		this.emailProvider = emailProvider;
		this.smsProvider = smsProvider;
		this.whatsappProvider = whatsappProvider;
		this.slackProvider = slackProvider;
	}

	getNotificationChannel: GetNotificationChannel = props => {
		const { channel, payload } = props;

		switch (channel) {
			case NOTIFICATION_CHANNEL.EMAIL:
				return this.emailProvider.sendMail(payload as IEmailNotificationPayload);

			case NOTIFICATION_CHANNEL.SMS:
				return this.smsProvider.sendSms(payload as ISmsNotificationPayload);

			case NOTIFICATION_CHANNEL.WHATSAPP:
				return this.whatsappProvider.sendWhatsapp(payload as IWhatsappNotificationPayload);

			case NOTIFICATION_CHANNEL.SLACK:
				return this.slackProvider.sendSlackMessage(payload as ISlackNotificationPayload);

			default:
				break;
		}
	};

	retryNotificationWithSms: RetryMessageWithSms = async (props: RetryMessageWithSmsPayload) => {
		const { to, message } = props;

		await this.whatsappProvider.retryMessageWithSms({ to, message });
	};
}
