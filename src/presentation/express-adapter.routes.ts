import { Request, Response } from 'express';

export interface HttpResponse {
	statusCode: number;
	data: any;
	message: string;
	status: boolean;
}

type FunctionCallback = (httpRequest: Request) => Promise<HttpResponse>;
type AdaptRoute = (
	callBack: FunctionCallback
) => (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;

export const adaptRoute: AdaptRoute = (callBack: FunctionCallback) => {
	return async (req: Request, res: Response) => {
		const httpResponse = await callBack(req);
		const { status, statusCode, message, data } = httpResponse;

		return res.status(statusCode).json({
			status,
			message,
			data,
		});
	};
};
