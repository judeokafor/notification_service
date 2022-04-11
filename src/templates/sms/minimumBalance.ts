import { formatCurrency } from '../../utils';

type minimumBalanceType = { balance: number; minimumBalance: number };

const minimumBalance = (messageProps: minimumBalanceType): string => {
	const { balance } = messageProps;

	return `Hi admin, we are low on funds, current balance is ${formatCurrency(
		balance
	)} . (Powered by Payhippo)`;
};

export default minimumBalance;
