import express, { Request, Response } from 'express';
import generateCreditScoreV2 from '../controllers/creditScore';
import { MessageBody } from './types';

const router = express.Router();

router.post('/message', async (req: Request, res: Response) => {
	const { type, data: payload }: MessageBody = req.body;
	switch (type) {
		case 'GENERATE_CREDIT_SCORE':
			await generateCreditScoreV2(payload);
			break;
		default:
			res.sendStatus(204);
	}
});

export default router;
