import { Collection } from 'fireorm';
import * as admin from 'firebase-admin';

@Collection('payments')
export class Payment {
	amount: string;
	customerId: string;
	loanId: string;
	id: string;
	partnerId: string;
	paymentDate: number;
	paymentId: string;
	paymentInitiatedBy: string;

	createdAt: admin.firestore.Timestamp;
	updatedAt: admin.firestore.Timestamp = admin.firestore.Timestamp.now();
}
