import { Collection, SubCollection, ISubCollection } from 'fireorm';
import * as admin from 'firebase-admin';
import { Customer, BusinessType } from './Customer';

@Collection('partners')
export class Partner {
	businessType: BusinessType;
	businessName: string;
	bvn: string;
	customerId: string;
	email: string;
	firstName: string;
	id: string;
	lastName: string;
	partnerId: string;
	contactNumber: string;

	@SubCollection(Customer, 'customers')
	customers: ISubCollection<Customer>;

	createdAt: admin.firestore.Timestamp;
	updatedAt: admin.firestore.Timestamp = admin.firestore.Timestamp.now();
}
