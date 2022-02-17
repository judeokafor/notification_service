import * as awilix from 'awilix';
import { NotificationController } from './modules/notification';
import MailgunProvider from './providers/email/mailgun';
// import TermiiProvider from './providers/sms/termii';
// import TwilioProvider from './providers/whatsapp/twillo';

const container = awilix.createContainer({
	injectionMode: awilix.InjectionMode.PROXY,
});

container.register({
	// smsProvider: awilix.asClass(TermiiProvider),
	emailProvider: awilix.asClass(MailgunProvider),
	// whatsapp: awilix.asClass(TwilioProvider),

	notifyController: awilix.asClass(NotificationController),
});

export default container;
