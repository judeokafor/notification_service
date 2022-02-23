import { formatCurrency } from '../../utils';

type DisbursalFailure = { businessName: string; loanAmount: string };
const disbursalFailure = (messageProps: DisbursalFailure): string => {
	const { businessName, loanAmount } = messageProps;
	return `${formatCurrency(
		parseFloat(loanAmount)
	)} disbursed to ${businessName} has been reversed. (Powered by Payhippo)`;
};

export default disbursalFailure;
