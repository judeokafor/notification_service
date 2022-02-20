import capitalize from 'capitalize';
import currencyFormatter from 'currency-formatter';

export const toTitleCase = (str: string): string => str && capitalize.words(str?.trim());

export const formatCurrency = (amount: any): string =>
	amount && currencyFormatter.format(amount, { code: 'NGN' });

export const abbreviateName = (businessOwnerName: string): string => {
	let abbreviatedName = '';

	if (businessOwnerName) {
		// convert name to array at every space between names
		const arrayOfNames = businessOwnerName.split(' ');

		arrayOfNames.forEach((name, i) => {
			// if the name is not the last name add the first letter to the abbrevated name initails
			if (i < arrayOfNames.length - 1) {
				abbreviatedName = abbreviatedName + `${name.charAt(0)}.`;
			}
		});

		// make abbreviatedName the initials and the last name/item in the name array
		// ie. if name is 'Jude Okafor' abbreviatedName would be J. Okafor
		abbreviatedName = abbreviatedName + ` ${arrayOfNames[arrayOfNames.length - 1]}`;
	}

	return abbreviatedName;
};
