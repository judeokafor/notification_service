import { IUrlShortnerProvider } from '../../../interfaces/common.interface';

export type TwilioProviderConstructor = {
	urlShortnerProvider: IUrlShortnerProvider;
	env: {
		_TWILLO_ACCOUNT_SID: string;
		_TWILLO_ACCOUNT_AUTH_TOKEN: string;
		_PAYHIPPO_WHATSAPP_NUMBER: string;
	};
};

export enum TwilloResponseCode {
	'UNAVAIALBLE' = 63003,
}
