import { Collection, SubCollection, ISubCollection } from 'fireorm';
import * as admin from 'firebase-admin';
import { RepaymentAccount } from './RepaymentAccount';
import { LoanRequest } from './LoanRequest';
import { Loan } from './Loan';

export enum BusinessType {
	BAKERY = 'BAKERY',
	COMPUTER_SALES = 'COMPUTER_SALES',
	PETROL_DIESEL_SUPPLY = 'PETROL_DIESEL_SUPPLY',
	E_COMMERCE = 'E_COMMERCE',
	ELECTRIC_APPLICANCE_SALES = 'ELECTRIC_APPLICANCE_SALES',
	FARM_AGRICULTURE = 'FARM_AGRICULTURE',
	FAST_MOVING_CONSUMER_GOODS = 'FAST_MOVING_CONSUMER_GOODS',
	GROCERY_SUPPLY = 'GROCERY_SUPPLY',
	LUXURY_GOODS = 'LUXURY_GOODS',
	MOBILE_MONEY = 'MOBILE_MONEY',
	OIL_GAS = 'OIL_GAS',
	ONLINE_BILLING_PLATFORM = 'ONLINE_BILLING_PLATFORM',
	PHARMACY = 'PHARMACY',
	PHONE_SALES_SMS = 'PHONE_SALES_SMS',
	SUPER_MARKET = 'SUPER_MARKET',
	TELECOMMUNICATIONS = 'TELECOMMUNICATIONS',
	TEXTILE_DESIGNS = 'TEXTILE_DESIGNS',
	TRAVEL_AGENCY = 'TRAVEL_AGENCY',
	OTHER = 'OTHER',
}

enum Gender {
	FEMALE = 'FEMALE',
	MALE = 'MALE',
	OTHER = 'OTHER',
}

type BusinessLocation = {
	address: string;
	coordinates: { lat: string; lng: string };
	city: string;
	country: string;
	state: string;
	street: string;
};

enum BusinessDocumentType {
	CAC = 'CAC',
	BUSINESS_NAME = 'BUSINESS_NAME',
}

@Collection('customers')
export class Customer {
	businessType: BusinessType;
	businessLocation: BusinessLocation;
	businessDocumentType: BusinessDocumentType;
	businessDocumentNumber: string;
	businessName: string;
	businessOwnerName: string;
	bvn: string;
	customerId: string;
	email: string;
	firstName: string;
	id: string;
	gender: Gender;
	lastName: string;
	partnerId: string;
	phoneNumber: string;

	@SubCollection(RepaymentAccount, 'repaymentAccounts')
	repaymentAccounts: ISubCollection<RepaymentAccount>;

	@SubCollection(LoanRequest, 'loanRequests')
	loanRequests: ISubCollection<LoanRequest>;

	@SubCollection(Loan, 'loans')
	loans: ISubCollection<Loan>;

	createdAt: admin.firestore.Timestamp;
	updatedAt: admin.firestore.Timestamp = admin.firestore.Timestamp.now();
}
