import { Format, TEMPLATE_TYPE } from './common.enums';

export type GetTemplateProps = {
	template: TEMPLATE_TYPE;
	data: Record<string, unknown>;
	format: Format;
};
