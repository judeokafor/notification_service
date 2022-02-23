type ReferenceAssocaition = {
	associationName: string;
	businessOwnerName: string;
	url: string;
};

const referenceAssociation = (props: ReferenceAssocaition): string => {
	const { associationName, businessOwnerName, url } = props;
	return `Hi ${businessOwnerName} from ${associationName} signed up with Payhippo has requested you give us details about their credit worthiness.Sign in ${url} to accept.`;
};

export default referenceAssociation;
