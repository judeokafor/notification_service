import NodeService, { logger } from '@payhippo/node-service-base';
import * as dotenv from 'dotenv';

import { api, message, webhooks } from './routers';

import * as pack from '../package.json';

dotenv.config();

try {
	const apps = new NodeService({
		description: pack.description,
		config: {
			env: process.env._APP_ENV,
			secretVersion: process.env._SECRET_VERSION_ID || '',
		},
		middlewares: [],
		name: pack.name,
		routers: { api, message, webhooks },
		version: pack.version,
	});

	apps.start();
} catch (error) {
	if (error instanceof Error) {
		logger.error(`Error occured: ${error.message}`);
	}
}
