import { MessageType, TEMPLATE_TYPE } from '../common.enums';
import { MailOptions } from '../common.types';
import { ISlackNotificationPayload } from '../slack/ISlackProvider.interface';
import { ISmsNotificationPayload } from '../sms/ISmsProvider.interface';

export interface IEmailNotificationPayload
	extends ISlackNotificationPayload,
		ISmsNotificationPayload {
	title: string;
	options?: MailOptions;
	accountManagerId: string;
	partnerEmail: string;
	template: TEMPLATE_TYPE;
	includeCC?: boolean;
	noReply?: boolean;
	type: MessageType;
}

interface IEmailProvider {
	sendMail(payload: IEmailNotificationPayload): Promise<void>;
}

export default IEmailProvider;
