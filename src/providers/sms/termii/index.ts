import { logger } from '@payhippo/node-service-base';
import axios from 'axios';
import { Format } from '../../../interfaces/common.enums';

import ISmsProvider, {
	ISmsNotificationPayload,
} from '../../../interfaces/sms/ISmsProvider.interface';

import PhoneNumberMessage from '../../phoneNumberMessage.base';
import { GetSendOptions, TermiiProviderConstructor } from './types';

export default class TermiiProvider extends PhoneNumberMessage implements ISmsProvider {
	private apiKey: string;

	constructor({ env, urlShortnerProvider }: TermiiProviderConstructor) {
		super({ urlShortnerProvider });

		this.apiKey = env._TERMI_API_KEY;
	}

	private getSendOptions(props: GetSendOptions) {
		const { to, message, useDnd } = props;

		return {
			to: this.formatPhoneNumber(to),
			from: useDnd ? 'N-Alert' : 'Payhippo',
			sms: message,
			type: 'plain',
			channel: useDnd ? 'dnd' : 'generic',
			api_key: this.apiKey,
		};
	}

	async sendSms(props: ISmsNotificationPayload): Promise<void> {
		const { template, data, to, meta } = props;

		const { useDnd = false } = meta;

		const modifiedData = await this.modifyData(data);

		const message = this.getTemplate({ template, data: modifiedData, format: Format.SMS });

		const receipient = this.formatPhoneNumber(to);

		const canSendSms = this.canSendSms(receipient) && this.isProductionEnvironment();

		try {
			if (canSendSms) {
				const sendData = this.getSendOptions({
					to: receipient,
					message,
					useDnd,
				});

				await axios.post(`${process.env._TERMII_BASE_URL}/sms/send`, sendData);
				return;
			}

			logger.log(`Dev call sending sms to ${receipient}`);
		} catch (error) {
			logger.error(error);
		}
	}
}
