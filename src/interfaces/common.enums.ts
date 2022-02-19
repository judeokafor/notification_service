export enum NOTIFICATION_CHANNEL {
	WHATSAPP = 'WHATSAPP',
	SLACK = 'SLACK',
	EMAIL = 'EMAIL',
	SMS = 'SMS',
	PUSH_NOTIFICATION = 'PUSH_NOTIFICATION',
	TELEGRAM = 'TELEGRAM',
}

export enum TEMPLATE_TYPE {
	WELCOME_EMAIL = 'user_created',
}

export enum Format {
	HTML = 'HTML',
	SMS = 'SMS', // sms same as whatsapp
	SLACK = 'SLACK',
}

export enum AttachmentType {
	PAYMENT_AUDIT = 'PAYMENT_AUDIT',
	METRICS_CSV = 'METRICS_CSV',
}
