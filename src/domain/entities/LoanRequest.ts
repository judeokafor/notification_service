import { Collection } from 'fireorm';
import * as admin from 'firebase-admin';

enum LoanRequestStatus {
	PENDING = 'PENDING',
	DISQUALIFIED = 'DISQUALIFIED',
	LOAN_DISBURSED = 'LOAN_DISBURSED',
	ACCEPTED = 'ACCEPTED',
	REJECTED = 'REJECTED',
}

@Collection('loanRequests')
export class LoanRequest {
	additionalServiceInterest: number;
	amountRequested: string;
	bankCode: string;
	customerId: string;
	id: string;
	loanRequestId: string;
	loanOfferSentDate: number;
	status: LoanRequestStatus = LoanRequestStatus.PENDING;
	transactionsUrl?: string;

	createdAt: admin.firestore.Timestamp;
	updatedAt: admin.firestore.Timestamp = admin.firestore.Timestamp.now();
}
