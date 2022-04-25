import express from 'express';

import container from '../container.awilix';

import { INotificationController } from '../modules/notification/controller';

const router = express.Router();

const notificationController: INotificationController = container.resolve('notificationController');

router.post('/twillo', notificationController.twilloWebhooks);

export default router;
