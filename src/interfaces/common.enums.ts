export enum NOTIFICATION_CHANNEL {
	WHATSAPP = 'WHATSAPP',
	SLACK = 'SLACK',
	EMAIL = 'EMAIL',
	SMS = 'SMS',
	PUSH_NOTIFICATION = 'PUSH_NOTIFICATION',
	TELEGRAM = 'TELEGRAM',
}

export enum TEMPLATE_TYPE {
	USER_CREATED = 'user_created',
}

export enum Format {
	HTML = 'HTML',
	SMS = 'SMS', // sms same as whatsapp
	SLACK = 'SLACK',
	PUSH_NOTIFICATION = 'PUSH_NOTIFICATION',
}

export enum MessageType {
	PAYMENT_AUDIT = 'PAYMENT_AUDIT',
	METRICS_CSV = 'METRICS_CSV',
}
