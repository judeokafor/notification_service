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

export type NotificationServiceConstructor = {
	emailProvider: IEmailProvider;
	smsProvider: ISmsProvider;
	whatsappProvider: IWhatsappProvider;
	slackProvider: ISlackProvider;
};

export type NotificationPayload =
	| IEmailNotificationPayload
	| ISmsNotificationPayload
	| IWhatsappNotificationPayload
	| ISlackNotificationPayload;

export type GetNotificationChannelProps = {
	channel: NOTIFICATION_CHANNEL;
	payload: NotificationPayload;
};

export type GetNotificationChannel = (
	props: GetNotificationChannelProps
) => Promise<void> | undefined;
