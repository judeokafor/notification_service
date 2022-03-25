import { logger } from '@payhippo/node-service-base';

import { IPhoneNumberMessage, IUrlShortnerProvider } from '../interfaces/common.interface';

import Message from './Message.base';

abstract class PhoneNumberBasedMessage extends Message implements IPhoneNumberMessage {
	private urlShortnerProvider: IUrlShortnerProvider;
	constructor({ urlShortnerProvider }: { urlShortnerProvider: IUrlShortnerProvider }) {
		super();

		this.urlShortnerProvider = urlShortnerProvider;
	}

	canSendSms(to: string): boolean {
		let isValid = true;

		// check phone number valid length
		if (!to || to.trim().length < 11) {
			logger.error(
				`phone number "${to}" cannot be empty and must be at least 11 characters!`
			);
			isValid = false;
		}

		// @TODO: put support for country code validation check

		return isValid;
	}

	formatPhoneNumber(phoneNumber: string): string {
		// return default number on dev
		if (!this.isProductionEnvironment()) {
			return process.env._DEV_TEST_PHONE_NUMBER || '';
		}

		if (phoneNumber) {
			// strips leading zero and replaces with apprioriate country code.
			if (phoneNumber.startsWith('0')) {
				return `+234${phoneNumber.slice(1)}`;
			}

			// add + to 234
			if (phoneNumber.startsWith('234')) {
				return `+${phoneNumber}`;
			}

			// add +234 to 10 digit phone number
			if (phoneNumber.length === 10) {
				return `+234${phoneNumber}`;
			}

			return phoneNumber;
		}

		logger.error('Invalid phone number passed', phoneNumber);

		return '';
	}

	abbreviateName = (businessOwnerName: string): string => {
		let abbreviatedName = '';

		if (businessOwnerName) {
			// convert name to array at every space between names
			const arrayOfNames = businessOwnerName.split(' ');

			arrayOfNames.forEach((name, i) => {
				// if the name is not the last name add the first letter to the abbrevated name initails
				if (i < arrayOfNames.length - 1) {
					abbreviatedName = abbreviatedName + `${name.charAt(0)}.`;
				}
			});

			// make abbreviatedName the initials and the last name/item in the name array
			// ie. if name is 'Jude Okafor' abbreviatedName would be J. Okafor
			abbreviatedName = abbreviatedName + ` ${arrayOfNames[arrayOfNames.length - 1]}`;
		}

		return abbreviatedName;
	};

	async modifyData(data: Record<string, any>): Promise<Record<string, unknown>> {
		// shorten url if one exists
		if (data.url) {
			data.url = await this.urlShortnerProvider.shortenUrl(data.url);
		}

		// abbrievates businessOwnerName is one exist
		if (data.businessOwnerName) {
			data.businessOwnerName = this.abbreviateName(data.businessOwnerName);
		}

		return data;
	}
}

export default PhoneNumberBasedMessage;
