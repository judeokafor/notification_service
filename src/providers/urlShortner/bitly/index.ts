import axios from 'axios';
import { logger } from '@payhippo/node-service-base';

import { IUrlShortnerProvider } from '../../../interfaces/common.interface';

import { BitlyProviderConstructor } from './types';

export default class BitlyProvider implements IUrlShortnerProvider {
	private token: string;

	constructor({ env }: BitlyProviderConstructor) {
		this.token = env._BITLY_TOKEN;
	}

	private isProduction(): boolean {
		return process.env._APP_ENV === 'production';
	}

	public async shortenUrl(url: string): Promise<string> {
		let shortenUrl = url;

		const isProduction = this.isProduction();

		if (!isProduction) {
			return shortenUrl;
		}

		const bearer = `Bearer ${this.token}`;

		const dataToSend = JSON.stringify({
			long_url: url,
		});

		try {
			const response = await axios.post(`${process.env._BITLY_API_URL}/shorten`, dataToSend, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: bearer,
				},
			});

			shortenUrl = response.data.link;
		} catch (error) {
			if (error instanceof Error) {
				logger.error('shortenUrl', error.message);
			}
		}

		return shortenUrl;
	}
}
