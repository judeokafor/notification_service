import { Format } from '../interfaces/common.enums';
import { IBaseMessage } from '../interfaces/common.interface';
import { GetTemplateProps } from '../interfaces/common.types';
import { SMS } from '../templates';

import dotenv from 'dotenv';
import { Environment } from '@payhippo/node-service-base/dist/types';
dotenv.config();

/**
 * @TODO: we can have a different template for whatsapp,
 *  but for now the assumption here is that whatsapp and sms are same string sent across board;
 */

const templates: Record<Format, Record<string, (data: any) => string>> = {
	[Format.SMS]: {
		consistentLoan: SMS.consistentLoan,
		earlyRepaymentReminder: SMS.earlyRepaymentReminder,
		disbursalFailure: SMS.disbursalFailure,
		guarantor: SMS.guarantor,
		inviteCustomer: SMS.inviteCustomer,
		reminder: SMS.reminder,
		offer: SMS.offer,
		otp: SMS.otp,
		repaymentInvoice: SMS.repaymentInvoice,
	},
};

export default abstract class Message implements IBaseMessage {
	isProductionEnvironment(): boolean {
		const environment = (
			process.env._APP_ENV || Environment.DEVELOPMENT
		).toUpperCase() as Environment;

		return [Environment.PRODUCTION].includes(environment);
	}

	getTemplate(props: GetTemplateProps): string {
		const { format, template, data } = props;

		return templates[format][template](data);
	}
}