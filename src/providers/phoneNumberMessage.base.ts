import { logger } from '@payhippo/node-service-base';
import { IPhoneNumberMessage } from '../interfaces/common.interface';
import Message from './Message.base';

abstract class PhoneNumberBasedMessage extends Message implements IPhoneNumberMessage {
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
}

export default PhoneNumberBasedMessage;
