export enum NOTIFICATION_CHANNEL {
	WHATSAPP = 'WHATSAPP',
	SLACK = 'SLACK',
	EMAIL = 'EMAIL',
	SMS = 'SMS',
	PUSH_NOTIFICATION = 'PUSH_NOTIFICATION',
	TELEGRAM = 'TELEGRAM',
}

export enum TEMPLATE_TYPE {
	CONSISTENT_LOAN = 'consistentLoan',
	EARLY_REPAYMENT_REMINDER = 'earlyRepaymentReminder',
	DISBURSAL_FAILURE = 'disbursalFailure',
	GUARANTOR = 'guarantor',
	INVITE_CUSTOMER = 'inviteCustomer',
	REMINDER = 'reminder',
	OFFER = 'offer',
	OTP = 'otp',
	REPAYMENT_INVOICE = 'repaymentInvoice',
}

export enum Format {
	SMS = 'SMS', // sms same as whatsapp
	HTML = 'HTML',
	SLACK = 'SLACK',
}

export enum AttachmentType {
	PAYMENT_AUDIT = 'PAYMENT_AUDIT',
	METRICS_CSV = 'METRICS_CSV',
}

export enum OpportunityType {
	RETURNING = 'RETURNING',
	NEW = 'NEW',
}
