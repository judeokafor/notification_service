import NodeService, { logger } from '@payhippo/node-service-base';
import * as dotenv from 'dotenv';

import {
	emailProviderMiddleware,
	whatsappProviderMiddleware,
	smsProviderMiddleware,
	slackProviderMiddleware,
} from './middlewares';
import { api, message } from './routers';

import * as pack from '../package.json';

dotenv.config();

try {
	const apps = new NodeService({
		description: pack.description,
		config: {
			env: process.env._APP_ENV,
			secretVersion: process.env._SECRET_VERSION_ID || '',
		},
		middlewares: [
			emailProviderMiddleware,
			whatsappProviderMiddleware,
			smsProviderMiddleware,
			slackProviderMiddleware,
		],
		name: pack.name,
		routers: { api, message },
		version: pack.version,
	});

	apps.start();
} catch (error) {
	if (error instanceof Error) {
		logger.error(`Error occured: ${error.message}`);
	}
}
