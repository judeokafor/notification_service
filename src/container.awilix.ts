import { asClass, asValue, createContainer, InjectionMode } from 'awilix';

import { NotificationController, NotificationService } from './modules/notification';

import MailgunProvider from './providers/email/mailgun';
import TermiiProvider from './providers/sms/termii';
import SlackProvider from './providers/slack';
import TwilioProvider from './providers/whatsapp/twillo';
import BitlyProvider from './providers/urlShortner/bitly';

const container = createContainer({
	injectionMode: InjectionMode.PROXY,
});

container.register({
	env: asValue(process.env),

	notificationController: asClass(NotificationController),
	notificationService: asClass(NotificationService),

	emailProvider: asClass(MailgunProvider),
	smsProvider: asClass(TermiiProvider),
	whatsappProvider: asClass(TwilioProvider),
	slackProvider: asClass(SlackProvider),
	urlShortnerProvider: asClass(BitlyProvider),
});

export default container;
