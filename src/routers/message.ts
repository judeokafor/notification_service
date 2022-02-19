import express, { Request, Response } from 'express';
import container from '../container.awilix';
import { NotificationController } from '../modules/notification';

const router = express.Router();

export enum PubSubRouterType {
	SEND_NOTIFICATION = 'SEND_NOTIFICATION',
}

const notifyController: NotificationController = container.resolve('notificationService');
const pubSubRouter = async (req: Request, res: Response) => {
	const { type } = req.body;
	const { logger } = req.appServices;

	logger.log('Calling pubSubRouter ==>', type);

	switch (type) {
		case PubSubRouterType.SEND_NOTIFICATION:
			logger.log('sending notification');
			await notifyController.notify(req, res);
			break;
		default:
	}
};

router.post('/', pubSubRouter);

export default router;
