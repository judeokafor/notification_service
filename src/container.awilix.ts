import { asClass, asValue, createContainer, InjectionMode } from 'awilix';

import { NotificationController, NotificationService } from './modules/notification';

import TwilioProvider from './providers/whatsapp/twillo';
import BitlyProvider from './providers/urlShortner/bitly';

const container = createContainer({
	injectionMode: InjectionMode.PROXY,
});

container.register({
	env: asValue(process.env),
	notificationController: asClass(NotificationController),
	notificationService: asClass(NotificationService),
	whatsappProvider: asClass(TwilioProvider),
	urlShortnerProvider: asClass(BitlyProvider),
});

export default container;
