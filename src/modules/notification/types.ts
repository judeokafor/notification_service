import { NOTIFICATION_CHANNEL } from '../../interfaces/common.enums';
import IWhatsappProvider, {
	IWhatsappNotificationPayload,
} from '../../interfaces/whatsapp/IWhatsappProvider.interface';

export type NotificationServiceConstructor = {
	whatsappProvider: IWhatsappProvider;
};

export type NotificationPayload = IWhatsappNotificationPayload;

export type GetNotificationChannelProps = {
	channel: NOTIFICATION_CHANNEL;
	payload: NotificationPayload;
};

export type GetNotificationChannel = (
	props: GetNotificationChannelProps
) => Promise<void> | undefined;
