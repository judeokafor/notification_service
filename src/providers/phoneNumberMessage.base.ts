import { logger } from '@payhippo/node-service-base';
import { IPhoneNumberMessage, IUrlShortnerProvider } from '../interfaces/common.interface';
import { abbreviateName } from '../utils';
import Message from './Message.base';
import BitlyProvider from './urlShortner/bitly';

abstract class PhoneNumberBasedMessage extends Message implements IPhoneNumberMessage {
	private urlShortnerProvider: IUrlShortnerProvider;
	constructor() {
		super();

		this.urlShortnerProvider = new BitlyProvider({
			token: process.env._BITLY_TOKEN || '',
		});
	}

	canSendSms(to: string): boolean {
		let isValid = true;

		if (!to || to.trim().length < 11) {
			logger.error(
				`phone number "${to}" cannot be empty and must be at least 11 characters!`
			);
			isValid = false;
		}

		return isValid;
	}

	formatPhoneNumber(phoneNumber: string): string {
		if (phoneNumber) {
			if (phoneNumber.startsWith('0')) {
				return `+234${phoneNumber.slice(1)}`;
			}

			if (phoneNumber.startsWith('234')) {
				return `+${phoneNumber}`;
			}
		}

		logger.error('Invalid phone number passed', phoneNumber);

		return '';
	}

	async modifyData(data: Record<string, any>): Promise<Record<string, unknown>> {
		if (data.url) {
			data.url = await this.urlShortnerProvider.shortenUrl(data.url);
		}

		if (data.businessOwnerName) {
			data.businessOwnerName = abbreviateName(data.businessOwnerName);
		}

		return data;
	}
}

export default PhoneNumberBasedMessage;
