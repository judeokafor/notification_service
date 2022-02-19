import { NOTIFICATION_CHANNEL } from '../../interfaces/common.enums';

import { IEmailNotificationPayload } from '../../interfaces/email/IEmailProvder.interface';
import { ISlackNotificationPayload } from '../../interfaces/slack/ISlackProvider.interface';
import { ISmsNotificationPayload } from '../../interfaces/sms/ISmsProvider.interface';
import { IWhatsappNotificationPayload } from '../../interfaces/whatsapp/IWhatsappProvider.interface';

import { GetNotificationChannel } from './types';

export default class NotificationService {
	getNotificationChannel: GetNotificationChannel = props => {
		const { channel, payload, appServices } = props;
		const { emailProvider, smsProvider, whatsappProvider, slackProvider } = appServices;

		switch (channel) {
			case NOTIFICATION_CHANNEL.EMAIL:
				return emailProvider.sendMail(payload as IEmailNotificationPayload);

			case NOTIFICATION_CHANNEL.SMS:
				return smsProvider.sendSms(payload as ISmsNotificationPayload);

			case NOTIFICATION_CHANNEL.WHATSAPP:
				return whatsappProvider.sendWhatsapp(payload as IWhatsappNotificationPayload);

			case NOTIFICATION_CHANNEL.SLACK:
				return slackProvider.sendSlackMessage(payload as ISlackNotificationPayload);

			default:
				break;
		}
	};
}
