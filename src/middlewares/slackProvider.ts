import { Request, Response, NextFunction } from 'express';
import SlackProvider from '../providers/slack';

export default (req: Request, _: Response, next: NextFunction): void => {
	const { appSecrets } = req;

	if (appSecrets?.slack) {
		const { teamId, channelId, token } = appSecrets.slack;

		req.appServices.slackProvider = new SlackProvider({
			teamId,
			channelId,
			token,
		});
	}

	next();
};
