import { IBaseNotificationPayload } from '../common.interface';

export type ISlackNotificationPayload = IBaseNotificationPayload;
export default interface ISlackProvider {
	sendSlackMessage(payload: ISlackNotificationPayload): Promise<void>;
}
