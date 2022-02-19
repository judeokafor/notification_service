import { Request, Response, NextFunction } from 'express';

import TwilioProvider from '../providers/whatsapp/twillo';

export default (req: Request, _: Response, next: NextFunction): void => {
	const { appSecrets } = req;

	if (appSecrets?.twillo) {
		const { accountSid, authToken } = appSecrets.twillo;

		req.appServices.whatsappProvider = new TwilioProvider({
			accountSid,
			authToken,
		});
	}

	next();
};
