import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

import BitlyProvider from '.';

describe('Test Bitly Provider', () => {
	const bitlyProvider = new BitlyProvider({
		env: {
			_BITLY_TOKEN: process.env._BITLY_TOKEN || '',
		},
	});

	const bitlyProviderProto = Object.getPrototypeOf(bitlyProvider);

	describe('Define Interface for Bitly Provider', () => {
		it('defines shortenUrl', () => {
			expect(typeof bitlyProviderProto.shortenUrl).toBe('function');
		});
	});

	describe('shortenUrl', () => {
		let mockAdapter: MockAdapter;

		beforeAll(() => {
			mockAdapter = new MockAdapter(axios);
		});

		afterEach(() => {
			mockAdapter.reset();
		});

		it('should send a request to bitly api', async () => {
			const url = `${process.env._BITLY_API_URL}/shorten`;
			const isProductionSpy = jest
				.spyOn(bitlyProviderProto, 'isProduction')
				.mockImplementation(jest.fn(() => true));

			const urlToShorten = 'www.payhippo.ng/opportunity/shorten/this/url';
			mockAdapter
				.onPost(
					url,
					JSON.stringify({
						long_url: urlToShorten,
					})
				)
				.replyOnce(200);

			await bitlyProvider.shortenUrl(urlToShorten);

			expect(isProductionSpy).toBeCalled();
			expect(mockAdapter.history.post).toHaveLength(1);
			expect(mockAdapter.history.post[0].url).toEqual(url);
		});

		it('should send return default url passed in staging or dev', async () => {
			const isProductionSpy = jest
				.spyOn(bitlyProviderProto, 'isProduction')
				.mockImplementation(jest.fn(() => false));

			const urlToShorten = 'www.payhippo.ng/opportunity/shorten/this/url';

			const shortendUrl = await bitlyProvider.shortenUrl(urlToShorten);

			expect(isProductionSpy).toBeCalled();
			expect(shortendUrl).toStrictEqual(urlToShorten);
		});
	});
});
