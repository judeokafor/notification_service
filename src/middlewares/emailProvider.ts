import { Request, Response, NextFunction } from 'express';

import MailgunProvider from '../providers/email/mailgun';

export default (req: Request, _: Response, next: NextFunction): void => {
	const { appSecrets } = req;

	if (appSecrets?.mailgun) {
		const { apiKey, domain } = appSecrets.mailgun;

		req.appServices.emailProvider = new MailgunProvider({
			apiKey: apiKey,
			domain: domain,
		});
	}

	next();
};
