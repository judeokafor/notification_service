import { logger } from '@payhippo/node-service-base';
import { NOTIFICATION_CHANNEL } from '../../interfaces/common.enums';

import IWhatsappProvider, {
	IWhatsappNotificationPayload,
} from '../../interfaces/whatsapp/IWhatsappProvider.interface';

import { GetNotificationChannel, NotificationServiceConstructor } from './types';

export default class NotificationService {
	private whatsappProvider: IWhatsappProvider;

	constructor(props: NotificationServiceConstructor) {
		const { whatsappProvider } = props;
		this.whatsappProvider = whatsappProvider;
	}

	getNotificationChannel: GetNotificationChannel = props => {
		const { channel, payload } = props;

		switch (channel) {
			case NOTIFICATION_CHANNEL.WHATSAPP:
				logger.log('calling whatsapp provider...');
				return this.whatsappProvider.sendWhatsapp(payload as IWhatsappNotificationPayload);

			default:
				break;
		}
	};
}
