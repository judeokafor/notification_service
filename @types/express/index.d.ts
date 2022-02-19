/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable camelcase */

import Analytics from 'analytics-node';
import * as admin from 'firebase-admin';
import IEmailProvider from '../../src/interfaces/email/IEmailProvder.interface';
import ISlackProvider from '../../src/interfaces/slack/ISlackProvider.interface';
import ISmsProvider from '../../src/interfaces/sms/ISmsProvider.interface';
import IWhatsappProvider from '../../src/interfaces/whatsapp/IWhatsappProvider.interface';

type PublishMessagePayload = {
	data: any;
	topic: string;
};

type Logger = Console | any;

type NotificationServiceSecret = {
	mailgun?: {
		apiKey: string;
		domain: string;
	};

	termii?: {
		apiKey: string;
	};

	slack?: {
		teamId: string;
		channelId: string;
		token: string;
	};

	twillo?: {
		accountSid: string;
		authToken: string;
	};

	gmail?: {
		email: string;
		password: string;
	};
};

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

				emailProvider: IEmailProvider;
				smsProvider: ISmsProvider;
				whatsappProvider: IWhatsappProvider;
				slackProvider: ISlackProvider;
			};
			appSecrets: NotificationServiceSecret;
		}
	}
}
