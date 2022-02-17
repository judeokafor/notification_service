import { NOTIFICATION_CHANNEL, TEMPLATE_TYPE } from './common.enums';
import { GetTemplateProps } from './common.types';

export interface IBaseNotificationPayload {
	channel: NOTIFICATION_CHANNEL;
	template: TEMPLATE_TYPE;
	data: Record<string, unknown>;
}
export interface IBaseMessage {
	getTemplate(props: GetTemplateProps): string;
	isProductionEnvironment(): boolean;
}

export interface IPhoneNumberMessage extends IBaseMessage {
	canSendSms(to: string): boolean;
	formatPhoneNumber(phoneNumber: string): string;
}
export interface IHtmlMessage extends IBaseMessage {
	verifyEmail(email: string): boolean;
}
