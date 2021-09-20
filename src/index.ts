import NodeService from '@payhippo/node-service-base';
import * as dotenv from 'dotenv';

import { exampleMiddleware } from './middlewares';
import { message } from './routers';

import * as pack from '../package.json';

dotenv.config();

try {
	const apps = new NodeService({
		description: pack.description,
		config: {
			env: process.env._APP_ENV,
			secretVersion: process.env._SECRET_VERSION_ID || '',
		},
		middlewares: [exampleMiddleware],
		name: pack.name,
		routers: { message },
		version: pack.version,
	});

	apps.start();
} catch (error) {
	console.error(`Error occured: ${error.message}`);
}
