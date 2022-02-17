import { IBaseNotificationPayload } from '../common.interface';

export interface ISmsNotificationPayload extends IBaseNotificationPayload {
	to: string;
	useDnd?: boolean;
}

export default interface ISmsProvider {
	sendSms(payload: ISmsNotificationPayload): Promise<void>;
}
