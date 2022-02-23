import { AttachmentType, NOTIFICATION_CHANNEL, TEMPLATE_TYPE } from './common.enums';
import { GetTemplateProps } from './common.types';

export interface IBaseNotificationPayload {
	channels: NOTIFICATION_CHANNEL[];
	template: TEMPLATE_TYPE;
	data: Record<string, unknown>;
}

export type NotificationMeta = {
	// emails
	accountManagerId?: string;
	partnerEmail?: string;
	includeCC?: boolean;
	noReply?: boolean;
	attachmentType?: AttachmentType;
	// sms
	useDnd?: boolean;
};
export interface IBaseMessage {
	getTemplate(props: GetTemplateProps): string;
	isProductionEnvironment(): boolean;
}

export interface IUrlShortnerProvider {
	shortenUrl(url: string): Promise<string>;
}

export interface IPhoneNumberMessage extends IBaseMessage {
	canSendSms(to: string): boolean;
	formatPhoneNumber(phoneNumber: string): string;
}
export interface IHtmlMessage extends IBaseMessage {
	verifyEmail(email: string): boolean;
}
