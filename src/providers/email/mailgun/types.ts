import { Attachment } from 'mailgun-js';
import { MessageType } from '../../../interfaces/common.enums';

export type GetAttachmentPayload = {
	type: MessageType;
	data: any;
};

type MetaOptions = {
	includeCC?: boolean;
	noReply?: boolean;
	partnerEmail?: string;
};

export type GenerateRecipientProp = MetaOptions & {
	accountManagerMail: string;
};

export type MailgunOptions = {
	to: string;
	subject: string;
	html: string;
	from: string;
	bcc?: string[];
	cc: string[];
	attachment?: Attachment;
};

export type MailgunProviderConstructor = { apiKey: string; domain: string };

export type GenerateEmailRecipients = { emailsToSend: string[]; envBasedTo: string };

export type GenerateEmailRecipientProp = MetaOptions & {
	to: string;
	accountManagerId: string;
};

export type GetSendOptionsProps = GenerateEmailRecipientProp & {
	subject: string;
	attachment?: Attachment;
	html: string;
	data: Record<string, unknown>;
	type: MessageType;
};
