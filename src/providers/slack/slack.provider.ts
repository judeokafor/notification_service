import { logger } from '@payhippo/node-service-base';
import axios from 'axios';
import { Format } from '../../interfaces/common.enums';

import ISlackProvider, {
	ISlackNotificationPayload,
} from '../../interfaces/slack/ISlackProvider.interface';

import Message from '../Message.base';

type SlackProviderConstructor = {
	teamId: string;
	channelId: string;
	token: string;
};

export default class SlackProvider extends Message implements ISlackProvider {
	private teamId: string;
	private channelId: string;
	private token: string;

	constructor({ teamId, channelId, token }: SlackProviderConstructor) {
		super();

		this.teamId = teamId;
		this.channelId = channelId;
		this.token = token;
	}

	public async sendSlackMessage(props: ISlackNotificationPayload): Promise<void> {
		const { template, data } = props;
		const message = this.getTemplate({ template, data, format: Format.SLACK });

		try {
			const isProduction = this.isProductionEnvironment();
			if (isProduction) {
				await axios.post(`/${this.teamId}/${this.channelId}/${this.token}`, {
					text: message,
				});

				return;
			}

			logger.log(`Dev call sending slack template${template}, message => ${message}`);
		} catch (error) {
			if (error instanceof Error) {
				logger.error(error.message);
			}
		}
	}
}
