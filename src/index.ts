import NodeService from '@payhippo/node-service-base';
import * as dotenv from 'dotenv';

import { fireorm } from '@middleware';
import { api } from '@routers';

import * as pack from '../package.json';

dotenv.config();

try {
	const apps = new NodeService({
		description: pack.description,
		config: {
			env: process.env._APP_ENV,
			secretVersion: process.env._SECRET_VERSION_ID || '',
		},
		middlewares: [fireorm.default],
		name: pack.name,
		routers: { api },
		version: pack.version,
	});

	apps.start();
} catch (error) {
	if (error instanceof SyntaxError) {
		console.error(`Error occurred: ${error.message}`);
	}
}
