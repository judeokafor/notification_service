import { logger } from '@payhippo/node-service-base';
import { Request, Response } from 'express';
import { TwilloResponseCode } from '../../providers/whatsapp/twillo/types';
import NotificationService from './service';

import { NotificationPayload } from './types';

export interface INotificationController {
	notify: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
	twilloWebhooks: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}

export default class NotificationController implements INotificationController {
	private notificationService: NotificationService;

	constructor({ notificationService }: { notificationService: NotificationService }) {
		this.notificationService = notificationService;
	}

	notify: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>> = async (
		req: Request,
		res: Response
	) => {
		const { body } = req;

		const { channels = [] } = body as NotificationPayload;

		const promises = [] as Array<Promise<void> | undefined>;

		channels.forEach(channel => {
			promises.push(
				this.notificationService.getNotificationChannel({
					channel,
					payload: body,
				})
			);
		});

		try {
			await Promise.all(promises);
			return res.sendStatus(200);
		} catch (error) {
			logger.error(error);
			return res.sendStatus(500);
		}
	};

	twilloWebhooks: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>> =
		async (req: Request, res: Response) => {
			console.log('response from twillo body', req.body);

			const { message, to, error_code: errorCode } = req.body;
			try {
				if (errorCode === TwilloResponseCode.UNAVAIALBLE) {
					await this.notificationService.retryNotificationWithSms({
						message,
						to,
					});
				}

				return res.sendStatus(200);
			} catch (error) {
				logger.error(error);
				return res.sendStatus(204);
			}
		};
}
