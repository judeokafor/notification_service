import { formatCurrency } from '../../utils';

const clientAppUrl = process.env._CLIENT_APP_URL || '';

type RepaymentInvoice = {
	businessOwnerName: string;
	totalPaymentAmount: string;
};
const repaymentInvoice = (props: RepaymentInvoice): string => {
	const { businessOwnerName, totalPaymentAmount } = props;
	return `Hi ${businessOwnerName},thanks for your repayment of ${formatCurrency(
		parseFloat(totalPaymentAmount)
	)} to Payhippo. Request a new loan at ${clientAppUrl}.`;
};

export default repaymentInvoice;
