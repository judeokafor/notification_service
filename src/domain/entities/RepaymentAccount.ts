import { Collection } from 'fireorm';
import * as admin from 'firebase-admin';

@Collection('repaymentAccounts')
export class RepaymentAccount {
	accountName: string;
	accountNumber: string;
	bankCode: string;
	bankName: string;
	customerId: string;
	id: string;
	repaymentAccountId: string;

	createdAt: admin.firestore.Timestamp;
	updatedAt: admin.firestore.Timestamp = admin.firestore.Timestamp.now();
}
