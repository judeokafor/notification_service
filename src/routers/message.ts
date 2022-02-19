import express, { Request, Response } from 'express';

import container from '../container.awilix';

import { INotificationController } from '../modules/notification/controller';

const router = express.Router();

export enum PubSubRouterType {
	SEND_NOTIFICATION = 'SEND_NOTIFICATION',
}

const notificationController: INotificationController = container.resolve('notificationController');
const pubSubRouter = async (req: Request, res: Response) => {
	const { type } = req.body;
	const { logger } = req.appServices;

	logger.log('Calling pubSubRouter body ==>', type);

	switch (type) {
		case PubSubRouterType.SEND_NOTIFICATION:
			logger.log('sending notification');
			await notificationController.notify(req, res);
			break;
		default:
	}
};

router.post('/', pubSubRouter);

export default router;
