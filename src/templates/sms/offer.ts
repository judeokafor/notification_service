import { formatCurrency } from '../../utils';
import { OpportunityType } from '../email/sendOffer';

const clientAppUrl = process.env._CLIENT_APP_URL || '';

type Offer = {
	businessOwnerName: string;
	loanAmount: string;
	opportunityType: OpportunityType;
};
const message = (messageProps: Offer): string => {
	const { businessOwnerName, loanAmount, opportunityType } = messageProps;
	return `Hi ${businessOwnerName},your next Payhippo loan offer is ${formatCurrency(
		parseFloat(loanAmount)
	)}.Sign in at ${clientAppUrl} to accept offer. ${
		opportunityType === OpportunityType.NEW
			? 'Please note, no processing fee(₦0) is required to access a loan from us.'
			: ''
	}`;
};

export default message;
