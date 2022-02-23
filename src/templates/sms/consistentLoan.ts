const clientAppUrl = process.env._CLIENT_APP_URL || '';

type ConsistentLoan = { businessOwnerName: string; dateDifferenceInDays: number };
const consistentLoan = (props: ConsistentLoan): string => {
	const { businessOwnerName, dateDifferenceInDays } = props;
	return `Hi ${businessOwnerName},your business loan with Payhippo is now ${dateDifferenceInDays} day${
		dateDifferenceInDays === 1 ? '' : 's'
	} overdue and accumulating more interest costs for you.Login ${clientAppUrl} to see new repayment amount.`;
};

export default consistentLoan;
