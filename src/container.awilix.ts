import { NotificationController, NotificationService } from './modules/notification';

import { container } from '@payhippo/node-service-base';

import { asClass } from 'awilix';

container.register({
	notificationController: asClass(NotificationController),
	notificationService: asClass(NotificationService),
});

export default container;
