import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

import TermiiProvider from '.';

import { mock } from 'jest-mock-extended';
import { IUrlShortnerProvider } from '../../../interfaces/common.interface';

import { NOTIFICATION_CHANNEL, TEMPLATE_TYPE } from '../../../interfaces/common.enums';

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
		let mockAdapter: MockAdapter;

		beforeAll(() => {
			mockAdapter = new MockAdapter(axios);
		});

		afterEach(() => {
			mockAdapter.reset();
		});

		it('should send a request to termii api', async () => {
			const sendSmsUrl = `${process.env._TERMII_BASE_URL}/sms/send`;

			mockAdapter
				.onPost(sendSmsUrl, {
					to: '07065383765',
					sms: 'Hi there, testing send sms',
					type: 'plain',
					channel: 'generic',
					api_key: 'api_key',
				})
				.replyOnce(200);

			await termiiProvider.sendToTermi({
				to: '07065383765',
				from: 'Payhippo',
				sms: 'Hi there, testing send sms',
				type: 'plain',
				channel: 'generic',
				apiKey: 'api_key',
			});

			expect(mockAdapter.history.post).toHaveLength(1);
			expect(mockAdapter.history.post[0].url).toEqual(sendSmsUrl);
		});

		it('should get send options required for termii properties', async () => {
			const isProductionSpy = jest
				.spyOn(termiiProviderProto, 'isProductionEnvironment')
				.mockImplementation(jest.fn(() => true));

			const dataToSend = {
				firstName: 'Jude',
				lastName: 'Okafor',
			};

			const modifyDataSpy = jest.spyOn(termiiProviderProto, 'modifyData').mockImplementation(
				jest.fn(() => ({
					...dataToSend,
					url: 'shortendUrl',
					businessOwnerName: 'Jude Okafor',
				}))
			);

			const getTemplateSpy = jest
				.spyOn(termiiProviderProto, 'getTemplate')
				.mockImplementation(jest.fn(() => `Hi, Testing Implementatio for get template`));

			const canSendSmsSpy = jest
				.spyOn(termiiProviderProto, 'canSendSms')
				.mockImplementation(jest.fn(() => true));

			const getOptionsSpy = jest
				.spyOn(termiiProviderProto, 'getSendOptions')
				.mockImplementation(
					jest.fn(() => ({
						to: '07065383765',
						sms: 'Hi there, testing send sms',
						type: 'plain',
						channel: 'generic',
						api_key: 'api_key',
					}))
				);

			const sendToTermiSpy = jest
				.spyOn(termiiProviderProto, 'sendToTermi')
				.mockImplementation(
					jest.fn(() => ({
						to: '07065383765',
						sms: 'Hi there, testing send sms',
						type: 'plain',
						channel: 'generic',
						api_key: 'api_key',
					}))
				);

			await termiiProvider.sendSms({
				template: TEMPLATE_TYPE.WELCOME_EMAIL,
				channels: [NOTIFICATION_CHANNEL.SMS],
				data: {
					firstName: 'Okafor',
				},
				to: '07065383765',
				meta: {
					useDnd: false,
				},
			});

			[
				modifyDataSpy,
				isProductionSpy,
				getTemplateSpy,
				canSendSmsSpy,
				getOptionsSpy,
				sendToTermiSpy,
			].forEach(spyMethod => {
				expect(spyMethod).toHaveBeenCalled();
			});
		});
	});
});
