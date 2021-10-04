import { Customer } from '@entities';
import { getRepository } from 'fireorm';

const { Customer: CustomerModel } = Customer;

export const customerRepository = getRepository(CustomerModel);
