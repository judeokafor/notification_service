/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable camelcase */

import Analytics from 'analytics-node';
import * as admin from 'firebase-admin';

type PublishMessagePayload = {
	data: any;
	topic: string;
};

type Logger = Console | any;

/**
 * Example Secrets Pattern
 * {
	credit_registry?: {
		email: string;
		password: string;
		subscriber_id: string;
		test_bvn: string;
	};
	gmail_auth?: {
		email: string;
		password: string;
	};
	verified_ng?: {
		bank_verify_api_key: string;
		bvn_simple_api_key: string;
		cac_api_key: string;
		frsc_api_key: string;
		nin_api_key: string;
		passport_api_key: string;
		tin_api_key: string;
		vin_api_key: string;
		user_id: string;
	};
}
 */
type SecretsCopy = any;

declare global {
	namespace Express {
		interface Request {
			analytics: Analytics;
			appServices: {
				firebase: {
					firestore: admin.firestore.Firestore;
					getTimestamp: () => admin.firestore.Timestamp;
				};
				logger: Logger;
				pubSub: {
					publishMessage: (payload: PublishMessagePayload) => Promise<string>;
				};
			};
			appSecrets: SecretsCopy;
		}
	}
}
