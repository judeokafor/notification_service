/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable camelcase */

import Analytics from 'analytics-node';
import * as admin from 'firebase-admin';

type PublishMessagePayload = {
	data: any;
	topic: string;
};

type Logger = Console | any;
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
