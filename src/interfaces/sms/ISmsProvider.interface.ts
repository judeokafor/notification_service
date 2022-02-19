import { IBaseNotificationPayload, NotificationMeta } from '../common.interface';

export interface ISmsNotificationPayload extends IBaseNotificationPayload {
	to: string;
	meta: NotificationMeta;
}

export default interface ISmsProvider {
	sendSms(payload: ISmsNotificationPayload): Promise<void>;
}
