import capitalize from 'capitalize';
import currencyFormatter from 'currency-formatter';

export const toTitleCase = (str: string): string => str && capitalize.words(str?.trim());

export const formatCurrency = (amount: any): string =>
	amount && currencyFormatter.format(amount, { code: 'NGN' });
