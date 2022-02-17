import { Format, TEMPLATE_TYPE } from './common.enums';

export type MailOptions = {
	cc?: string[];
	fromEmail?: string;
	fromName?: string;
};

export type GetTemplateProps = {
	template: TEMPLATE_TYPE;
	data: Record<string, unknown>;
	format: Format;
};
