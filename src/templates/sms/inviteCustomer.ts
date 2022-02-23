type InviteCustomer = { accountManagerName: string; businessOwnerName: string; url: string };

const inviteCustomer = (props: InviteCustomer): string => {
	const { accountManagerName, businessOwnerName, url } = props;
	return `Hi ${businessOwnerName}, ${accountManagerName} is inviting you onboard Payhippo for a seamless SME loan today. Click here ${url} to signup.`;
};

export default inviteCustomer;
