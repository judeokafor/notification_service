import { ISlackNotificationPayload } from '../slack/ISlackProvider.interface';
import { ISmsNotificationPayload } from '../sms/ISmsProvider.interface';

export interface IWhatsappNotificationPayload
	extends ISlackNotificationPayload,
		ISmsNotificationPayload {
	from?: string;
}

export default interface IWhatsappProvider {
	sendWhatsapp(props: IWhatsappNotificationPayload): Promise<void>;
}
