import { Request, Response, NextFunction } from 'express';
import * as fireorm from 'fireorm';

export default (req: Request, _: Response, next: NextFunction): void => {
	const { appServices } = req;
	const { firebase } = appServices;

	if (appServices?.firebase) {
		const { firestore } = firebase;
		fireorm.initialize(firestore);
	}

	next();
};
