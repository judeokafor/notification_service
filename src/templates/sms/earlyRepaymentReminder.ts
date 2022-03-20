type EarlyRepaymentReminder = { businessOwnerName: string };

const earlyRepaymentReminder = (props: EarlyRepaymentReminder): string => {
	const { businessOwnerName } = props;

	return `Hi ${businessOwnerName}, here is a quick reminder,Repay early to unlock additional points to your credit score and increase your chances of getting an increase in your next offer. (Powered by Payhippo)`;
};

export default earlyRepaymentReminder;
