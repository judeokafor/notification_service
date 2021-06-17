import express, { Request, Response } from 'express';

import { example } from '../controllers';

const router = express.Router();

router.use('/', (req: Request, res: Response) => {
	const words = example.sayHello();

	res.send({
		data: { words },
		message: 'Succesfully said hello',
		status: 'SUCCESS',
	});
});

export default router;
