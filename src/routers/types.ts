/* eslint-disable @typescript-eslint/no-explicit-any */
export enum MessageType {
	GENERATE_CREDIT_SCORE = 'GENERATE_CREDIT_SCORE',
}

export type MessageBody = {
	type: MessageType;
	data: any;
};
