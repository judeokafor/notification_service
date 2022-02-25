import MailgunProvider from '.';

describe('Test Mailgun Provider', () => {
	const mailgunProvider = new MailgunProvider({
		env: {
			_MAILGUN_API_KEY: process.env._MAILGUN_API_KEY || '',
			_MAILGUN_DOMAIN: process.env._MAILGUN_DOMAIN || '',
		},
	});

	const mailgunProviderProto = Object.getPrototypeOf(mailgunProvider);

	describe('Define Interface for MailgunGun Provider', () => {
		it('defines sendMail', () => {
			expect(typeof mailgunProviderProto.sendMail).toBe('function');
		});
	});

	describe('isProductionEnvironment', () => {
		it('should return production boolean', () => {
			const isProductionEnvironment = jest.fn(() => true);

			const spy = jest
				.spyOn(mailgunProviderProto, 'isProductionEnvironment')
				.mockImplementation(isProductionEnvironment);

			const isProduction = mailgunProviderProto.isProductionEnvironment();

			expect(isProduction).toBe(true);

			expect(spy).toHaveBeenCalled();

			spy.mockReset();
			spy.mockRestore();
		});
	});

	describe('showEnvironment', () => {
		it('should show postive environment value', () => {
			const showEnvironment = jest.fn(() => `-TESTING`);

			const spy = jest
				.spyOn(mailgunProviderProto, 'showEnvironment')
				.mockImplementation(showEnvironment);

			const environmentString = mailgunProviderProto.showEnvironment();

			expect(environmentString).toMatch('-TESTING');

			expect(spy).toHaveBeenCalled();

			spy.mockReset();
			spy.mockRestore();
		});
	});

	describe('generateAccountMangerEmail', () => {
		it('should get default manager email without accountManagerId passed', async () => {
			const defaultEmail = 'hello@payhippo.ng';

			const generateAccountMangerEmail = jest.fn(() => Promise.resolve(defaultEmail));

			const spy = jest
				.spyOn(mailgunProviderProto, 'generateAccountMangerEmail')
				.mockImplementation(generateAccountMangerEmail);

			const accountManagerEmail = await mailgunProviderProto.generateAccountMangerEmail();

			expect(accountManagerEmail).toEqual(defaultEmail);

			spy.mockReset();
			spy.mockRestore();
		});
	});

	describe('getRecipients', () => {
		it('get list of receipts to send with account manager', () => {
			const getRecipientsProps = { accountManagerMail: 'jude.okafor@payhippo.ng' };

			const recipients = mailgunProviderProto.getRecipients(getRecipientsProps);

			expect(recipients).toHaveLength(1);
		});

		it('get list of receipts to send with cc and no reply fields', () => {
			const isProductionEnvironment = jest.fn(() => true);

			const spy = jest
				.spyOn(mailgunProviderProto, 'isProductionEnvironment')
				.mockImplementation(isProductionEnvironment);

			const getRecipientsProps = {
				accountManagerMail: 'jude.okafor@payhippo.ng',
				includeCC: true,
				noReply: false,
			};

			const recipients = mailgunProviderProto.getRecipients(getRecipientsProps);

			expect(recipients.length).toBeGreaterThanOrEqual(2);

			spy.mockReset();
			spy.mockRestore();
		});

		it('get list of receipts to send with cc and no reply fields and partner emails', () => {
			const isProductionEnvironment = jest.fn(() => true);

			const spy = jest
				.spyOn(mailgunProviderProto, 'isProductionEnvironment')
				.mockImplementation(isProductionEnvironment);

			const getRecipientsProps = {
				accountManagerMail: 'jude.okafor@payhippo.ng',
				includeCC: true,
				noReply: false,
				partnerEmail: 'faith.omojola@payhippo.ng',
			};

			const recipients = mailgunProviderProto.getRecipients(getRecipientsProps);

			expect(recipients.length).toBeGreaterThanOrEqual(3);

			spy.mockReset();
			spy.mockRestore();
		});
	});

	describe('getSendOptions', () => {
		it('should get send options required for mailgun properties', async () => {
			const getAttachment = jest.fn(() => undefined);

			const generateEmailRecipient = jest.fn(() => ({
				recipient: '+2347065383765',
				cc: ['jude.okafor@payhippo.ng'],
			}));

			const isProductionEnvironment = jest.fn(() => true);

			jest.spyOn(mailgunProviderProto, 'isProductionEnvironment').mockImplementation(
				isProductionEnvironment
			);

			jest.spyOn(mailgunProviderProto, 'getAttachment').mockImplementation(getAttachment);

			jest.spyOn(mailgunProviderProto, 'generateEmailRecipient').mockImplementation(
				generateEmailRecipient
			);

			const sendOptonsProps = {
				to: '07065383765',
				accountManagerId: '',
				html: 'Hello Jude, welcome to Payhippo',
				subject: 'Welcome on board',
				data: {
					firstName: 'jude',
				},
				includeCC: true,
			};

			const sendOptions = await mailgunProviderProto.getSendOptions(sendOptonsProps);

			expect(sendOptions).toHaveProperty('cc');
			expect(sendOptions.cc.length).toBeGreaterThanOrEqual(1);
			expect(sendOptions).toHaveProperty('from');
			expect(sendOptions).toHaveProperty('html');
			expect(sendOptions).toHaveProperty('subject');
			expect(sendOptions).toHaveProperty('to');
			expect(sendOptions.to).toBe('+2347065383765');
			expect(sendOptions.attachment).toBeFalsy();
		});
	});
});
