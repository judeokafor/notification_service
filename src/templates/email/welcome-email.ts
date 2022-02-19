type WelcomeEmail = {
	firstName: string;
};

export default function (data: WelcomeEmail): string {
	const { firstName } = data;
	return 'Welcome Legend' + firstName;
}
