import express, { Request, Response } from 'express';

// import { example } from '../controllers';

import twilio from 'twilio';

const router = express.Router();

router.post('/', async (req: Request, res: Response) => {
	// const words = example.sayHello();

	const twilloClient = twilio(
		'AC4f855eddbc1cfd036695acae31606352',
		'784f42abcb95bb896b9efbe2e486cd3f',
		{
			lazyLoading: true,
		}
	);

	const response = await twilloClient.messages.create({
		body: 'Your Payhippo authentication code is 354917.',
		from: 'whatsapp:+2349088434828',
		to: 'whatsapp:+2349039851977',
		statusCallback: 'https://212f-35-241-179-63.eu.ngrok.io/webhooks/twillo',
	});

	return res.send({
		data: response,
		message: 'Succesfully said hello',
		status: 'SUCCESS',
	});
});

export default router;
