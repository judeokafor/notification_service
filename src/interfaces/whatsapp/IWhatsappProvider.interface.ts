import { ISlackNotificationPayload } from '../slack/ISlackProvider.interface';
import { ISmsNotificationPayload } from '../sms/ISmsProvider.interface';

export interface IWhatsappNotificationPayload
	extends ISlackNotificationPayload,
		ISmsNotificationPayload {
	from?: string;
}

export type RetryMessageWithSmsPayload = {
	message: string;
	to: string;
};

export default interface IWhatsappProvider {
	sendWhatsapp(props: IWhatsappNotificationPayload): Promise<void>;
	retryMessageWithSms(props: RetryMessageWithSmsPayload): Promise<void>;
}
