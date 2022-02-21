import TermiiProvider from '.';

import { mock } from 'jest-mock-extended';
import { IUrlShortnerProvider } from '../../../interfaces/common.interface';

describe('Test Termii Provider', () => {
	const urlShortnerProvider: IUrlShortnerProvider = mock<IUrlShortnerProvider>();

	const termiiProvider = new TermiiProvider({
		env: {
			_TERMI_API_KEY: process.env._TERMI_API_KEY || '',
		},
		urlShortnerProvider: urlShortnerProvider,
	});

	const termiiProviderProto = Object.getPrototypeOf(termiiProvider);

	describe('Define Interface for Termii Provider', () => {
		it('defines sendMail', () => {
			expect(typeof termiiProviderProto.sendSms).toBe('function');
		});
	});

	describe('getSendOptions', () => {
		it('should get send options required for mailgun properties', async () => {
			const isProductionEnvironment = jest.fn(() => true);
			jest.spyOn(termiiProviderProto, 'isProductionEnvironment').mockImplementation(
				isProductionEnvironment
			);
			const sendOptionsProps = {
				to: '07065383765',
				message: 'Hello Jude, welcome to Payhippo',
				useDnd: true,
			};

			const sendOptions = termiiProviderProto.getSendOptions(sendOptionsProps);

			expect(sendOptions).toHaveProperty('type');
			expect(sendOptions).toHaveProperty('type');
			expect(sendOptions).toHaveProperty('sms');
			expect(sendOptions).toHaveProperty('channel');
			expect(sendOptions).toHaveProperty('to');
			expect(sendOptions.to).toBe('+2347065383765');
		});
	});
	describe('sendSms', () => {
		it('should get send options required for mailgun properties', async () => {
			// mock modify data
			// mock get template;
			// mock cansendsms
			// mock get send options
			// mock isproduction function call
			// mock axios post call

			const isProductionEnvironment = jest.fn(() => true);
			jest.spyOn(termiiProviderProto, 'isProductionEnvironment').mockImplementation(
				isProductionEnvironment
			);
			const sendOptionsProps = {
				to: '07065383765',
				message: 'Hello Jude, welcome to Payhippo',
				useDnd: true,
			};

			const sendOptions = termiiProviderProto.getSendOptions(sendOptionsProps);

			expect(sendOptions).toHaveProperty('type');
			expect(sendOptions).toHaveProperty('type');
			expect(sendOptions).toHaveProperty('sms');
			expect(sendOptions).toHaveProperty('channel');
			expect(sendOptions).toHaveProperty('to');
			expect(sendOptions.to).toBe('+2347065383765');
		});
	});
});
