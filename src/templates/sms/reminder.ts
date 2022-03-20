const clientAppUrl = process.env._CLIENT_APP_URL || '';

type Reminder = { businessOwnerName: string; dateDifferenceInDays: number };
const reminder = (props: Reminder): string => {
	const { businessOwnerName, dateDifferenceInDays } = props;

	return `Hi ${businessOwnerName}, your business loan with Payhippo is due ${
		dateDifferenceInDays === 1 ? 'tomorrow' : 'in 7 days'
	}. Sign in ${clientAppUrl} to see adjusted repayment amount as of today.`;
};

export default reminder;
