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
}

export enum AttachmentType {
	PAYMENT_AUDIT = 'PAYMENT_AUDIT',
	METRICS_CSV = 'METRICS_CSV',
}
