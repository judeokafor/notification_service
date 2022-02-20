import { Request, Response, NextFunction } from 'express';

import BitlyProvider from '../providers/urlShortner/bitly';

export default (req: Request, _: Response, next: NextFunction): void => {
	const { appSecrets } = req;

	if (appSecrets?.bitly) {
		const { token } = appSecrets.bitly;

		req.appServices.urlShortnerProvider = new BitlyProvider({
			token,
		});
	}

	next();
};
