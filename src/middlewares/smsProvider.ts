import { Request, Response, NextFunction } from 'express';

import TermiiProvider from '../providers/sms/termii';

export default (req: Request, _: Response, next: NextFunction): void => {
	const { appSecrets } = req;

	if (appSecrets?.termii) {
		const { apiKey } = appSecrets.termii;

		req.appServices.smsProvider = new TermiiProvider({
			apiKey: apiKey,
		});
	}

	next();
};
