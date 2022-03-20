type GuarantorProps = {
	businessOwnerName: string;
	firstName: string;
	lastName: string;
	url: string;
};

const guarantor = (props: GuarantorProps): string => {
	const { businessOwnerName, firstName, lastName, url } = props;
	return `Hi ${businessOwnerName}, ${firstName} ${lastName} has requested you be a guarantor at PayHippo financing company.Sign in at ${url} to accept.`;
};

export default guarantor;
