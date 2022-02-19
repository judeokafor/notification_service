import { NotificationMeta } from '../common.interface';
import { ISlackNotificationPayload } from '../slack/ISlackProvider.interface';
import { ISmsNotificationPayload } from '../sms/ISmsProvider.interface';

export interface IEmailNotificationPayload
	extends ISlackNotificationPayload,
		ISmsNotificationPayload {
	title: string;
	meta: NotificationMeta;
}

interface IEmailProvider {
	sendMail(payload: IEmailNotificationPayload): Promise<void>;
}

export default IEmailProvider;
