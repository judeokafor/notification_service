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
