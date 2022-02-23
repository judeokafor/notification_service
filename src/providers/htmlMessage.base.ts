import { IHtmlMessage } from '../interfaces/common.interface';
import { logger } from '@payhippo/node-service-base';
import Message from './Message.base';

export default class HtmlMessage extends Message implements IHtmlMessage {
	verifyEmail(email: string): boolean {
		/**
		 * @TODO: add email validation/verfication here
		 * Possible suggestions, using send grid validation or mailgun,
		 * or just a simple email validation to assert that the email is correct
		 */
		logger.log('email is valid', email);
		return true;
	}
}
