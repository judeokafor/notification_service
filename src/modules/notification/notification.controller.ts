import MailgunProvider from '../../providers/email/mailgun';
import TermiiProvider from '../../providers/sms/termii';
import TwilioProvider from '../../providers/whatsapp/twillo';

import { Request, Response } from 'express';
import { MessageType, NOTIFICATION_CHANNEL, TEMPLATE_TYPE } from '../../interfaces/common.enums';
export default class NotificationController {
	// private smsProvider: TermiiProvider;
	private emailProvider: MailgunProvider;
	// private whatsappProvider: TwilioProvider;

	constructor({
		// smsProvider,
		emailProvider,
	}: // whatsappProvider,
	{
		smsProvider: TermiiProvider;
		emailProvider: MailgunProvider;
		whatsappProvider: TwilioProvider;
	}) {
		// this.smsProvider = smsProvider;
		this.emailProvider = emailProvider;
		// this.whatsappProvider = whatsappProvider;
	}

	notify = async (req: Request, res: Response) => {
		try {
			console.log('entering this block');
			await this.emailProvider.sendMail({
				channel: NOTIFICATION_CHANNEL.EMAIL,
				data: {
					firstName: 'jude okafor',
				},
				type: MessageType.METRICS_CSV,
				to: 'jude.okafor@payhippo.ng',
				title: 'Testing with Jude',
				accountManagerId: 'managerId',
				template: TEMPLATE_TYPE.USER_CREATED,
				partnerEmail: 'okaforjudechukwuebuka@gmail.com',
			});

			return res.sendStatus(200);
		} catch (error) {
			console.log(error);
			return res.sendStatus(500);
		}
	};
}
