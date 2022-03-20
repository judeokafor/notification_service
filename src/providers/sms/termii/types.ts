import { IUrlShortnerProvider } from '../../../interfaces/common.interface';

export type GetSendOptions = {
	to: string;
	message: string;
	useDnd: boolean;
};

export type TermiiProviderConstructor = {
	env: {
		_TERMI_API_KEY: string;
	};
	urlShortnerProvider: IUrlShortnerProvider;
};

export type TermiiSendOptions = {
	to: string;
	from: string;
	sms: string;
	type: string;
	channel: string;
	apiKey: string;
};
