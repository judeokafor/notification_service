import { Collection, SubCollection, ISubCollection } from 'fireorm';
import * as admin from 'firebase-admin';
import { Payment } from './Payment';

enum LoanStatus {
	DISBURSED = 'DISBURSED',
	OVERDUE = 'OVERDUE',
	REPAID = 'REPAID',
	PENDING = 'PENDING',
}

@Collection('loans')
export class Loan {
	amount: string;
	additionalServiceCost: string;
	customerId: string;
	id: string;
	loanId: string;
	originalCost: string;
	partnerId: string;
	repaymentAmount: string;
	repaymentDate: number;
	status: LoanStatus;
	totalCost: string;

	@SubCollection(Payment, 'payments')
	payments: ISubCollection<Payment>;

	createdAt: admin.firestore.Timestamp;
	updatedAt: admin.firestore.Timestamp = admin.firestore.Timestamp.now();
}
