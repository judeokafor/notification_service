import { Attachment } from 'mailgun-js';
import { AttachmentType } from '../../../interfaces/common.enums';

export type GetAttachmentPayload = {
	attachmentType: AttachmentType | undefined;
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
	attachment?: Attachment | undefined;
};

export type MailgunProviderConstructor = {
	env: {
		_MAILGUN_API_KEY: string;
		_MAILGUN_DOMAIN: string;
	};
};

export type EmailRecipients = { cc: string[]; recipient: string };

export type GenerateEmailRecipientProp = MetaOptions & {
	to: string;
	accountManagerId: string;
};

export type GetSendOptionsProps = GenerateEmailRecipientProp & {
	subject: string;
	html: string;
	data: Record<string, unknown>;
	attachmentType?: AttachmentType | undefined;
};
