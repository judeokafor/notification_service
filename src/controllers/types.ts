export type CreditScoreData = {
	daysEarly: number;
	daysLate: number;
	isOneOffScript: boolean;
	loansRepaid: number;
	previousCreditScore: number;
};

export enum Currency {
	NAIRA = 'NGN',
	DOLLAR = 'USD',
}

export enum ConvertedStatus {
	NOT_CONVERTED = 'NOT_CONVERTED',
	CONVERTED = 'CONVERTED',
}

export enum LoanStatus {
	DISBURSED = 'DISBURSED',
	OVERDUE = 'OVERDUE',
	OVERPAID = 'OVERPAID',
	EXTENSION = 'EXTENSION',
	EXTENDED_OVERDUE = 'EXTENDED_OVERDUE',
	REPAID = 'REPAID',
}

enum IdType {
	NIN = 'NIN',
	FRSC = 'FRSC',
	VIN = 'VIN',
	PASSPORT = 'PASSPORT',
}

export type Customer = {
	accountManager: string;
	accountManagerId: string;
	allowStatementUpload?: boolean;
	businessOwnerName: string;
	creditScore: number;
	customerCode: string;
	eligibleProducts?: string[];
	interestRate?: string;
	is45DaysEligible?: boolean;
	isActive: boolean;
	isDelinquent: boolean;
	isFlagged: boolean;
	isSuspended: boolean;
	isSpecialty: boolean;
	isReferralBlocked?: boolean;
	repaymentAccountId: string;
	updatedBy?: string;
	verificationId: string;
	landmarkDescription?: string;
	highestQualification?: string;
	martialStatus?: string;
	previousAccountManager?: string;
	previousAccountManagerId?: string;
	loans: any;
	referralId?: string;
	referredBy?: string;
	convertedStatus?: ConvertedStatus;
	convertedDate?: any;
	idNumber?: string;
	idType?: IdType;
	guarantorIdType?: IdType;
	cacNumber?: string;
	otherLenders?: string[];
};

export type Loans = {
	id: string;
	accountManager: string;
	accountManagerId: string;
	createdAt: any;
	currency: Currency;
	customerId: string;
	creditScore?: number;
	disbursementDate: number;
	highEndOffer?: string;
	isDisbursalConfirmed: boolean;
	is45Days: boolean;
	isInterestRepaid?: boolean;
	isRefinanced?: boolean;
	inRecollection?: boolean;
	inRecollectionDate?: number;
	interestSavings?: string;
	initialInterestRepaymentDate?: number;
	initialInterestRepaymentAmount?: string;
	leadId?: string;
	loanConfirmedDate?: number;
	loanAmount: string;
	loanId: string;
	loanRepaidDate: number;
	lowEndOffer?: string;
	interestRepaidDate?: number;
	opportunityId: string;
	originalFeeAmount: string;
	partnerId?: string;
	pauseOverdueCalculations?: boolean;
	recollectionAgency?: string;
	referenceNumber: string;
	remainingPrincipal: string;
	repaymentDate: number;
	repaymentAmount: string;
	status: LoanStatus;
	totalPaymentAmount: string;
	lateFees: number;
	updatedAt: any;
	updatedBy: string;
};

export type CreditScorePayload = {
	customer: Customer;
	loan: Loans;
	repaidDate: number;
};
