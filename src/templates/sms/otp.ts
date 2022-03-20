type Otp = {
	otp: string;
};

const otpMessage = (props: Otp): string => {
	const { otp } = props;

	return `Your Payhippo authentication code is ${otp}.`;
};

export default otpMessage;
