import { mock } from 'jest-mock-extended';

import TwilloProvider from '.';
import { TEMPLATE_TYPE } from '../../../interfaces/common.enums';
import { IUrlShortnerProvider } from '../../../interfaces/common.interface';

describe('Test Twillo Provider', () => {
	const urlShortnerProvider: IUrlShortnerProvider = mock<IUrlShortnerProvider>();

	const twilloProvider = new TwilloProvider({
		env: {
			_TWILLO_ACCOUNT_SID: process.env._TWILLO_ACCOUNT_SID || '',
			_TWILLO_ACCOUNT_AUTH_TOKEN: process.env._TWILLO_ACCOUNT_AUTH_TOKEN || '',
			_PAYHIPPO_WHATSAPP_NUMBER: process.env._PAYHIPPO_WHATSAPP_NUMBER || '',
		},
		urlShortnerProvider: urlShortnerProvider,
	});

	const twilloProviderProto = Object.getPrototypeOf(twilloProvider);

	describe('Define Interface for Twillo Provider', () => {
		it('defines shortenUrl', () => {
			expect(typeof twilloProviderProto.sendWhatsapp).toBe('function');
			expect(typeof twilloProviderProto.sendSms).toBe('function');
		});
	});

	describe('getWhatsappNumber', () => {
		it('should return a whatsapp formattted number', () => {
			const number = '07065383765';
			const whatsappNumber = twilloProviderProto.getWhatsappNumber(number);

			expect(whatsappNumber).toBeDefined();
			expect(whatsappNumber).toMatch(number);
			expect(whatsappNumber).toMatch('whatsapp');
		});

		it('should return empty string if no number defined', () => {
			const number = '';
			const whatsappNumber = twilloProviderProto.getWhatsappNumber(number);

			expect(whatsappNumber).toBeFalsy();
		});
	});
	describe('sendWhatsapp', () => {
		let isProductionSpy: jest.SpyInstance<any, unknown[]>;
		let getTemplateSpy: jest.SpyInstance<any, unknown[]>;
		beforeAll(() => {
			isProductionSpy = jest
				.spyOn(twilloProviderProto, 'isProductionEnvironment')
				.mockImplementation(jest.fn(() => true));

			getTemplateSpy = jest
				.spyOn(twilloProviderProto, 'getTemplate')
				.mockImplementation(jest.fn(() => 'Hi there, welcome to payhippo'));
		});

		afterAll(() => {
			[isProductionSpy, getTemplateSpy].forEach(spyMethod => {
				spyMethod.mockReset();
				spyMethod.mockRestore();
			});
		});

		it('should send a whatsapp message to a particular number', async () => {
			const props = {
				to: '07065383765',
				data: {
					firstName: 'Jude',
				},
				from: 'Payhippo',
				template: TEMPLATE_TYPE.DISBURSAL_FAILURE,
			};
			await twilloProviderProto.sendWhatsapp(props);

			expect(isProductionSpy).toBeCalledTimes(1);
			expect(getTemplateSpy).toBeCalledTimes(1);
		});
	});
});
