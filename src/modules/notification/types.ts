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
} from '../../interfaces/whatsapp/IWhatsappProvider.interface';

export type NotificationPayload =
	| IEmailNotificationPayload
	| ISmsNotificationPayload
	| IWhatsappNotificationPayload
	| ISlackNotificationPayload;

export type GetNotificationChannelProps = {
	channel: NOTIFICATION_CHANNEL;
	payload: NotificationPayload;

	appServices: {
		emailProvider: IEmailProvider;
		slackProvider: ISlackProvider;
		smsProvider: ISmsProvider;
		whatsappProvider: IWhatsappProvider;
	};
};

export type GetNotificationChannel = (
	props: GetNotificationChannelProps
) => Promise<void> | undefined;
