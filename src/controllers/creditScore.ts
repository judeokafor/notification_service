import { CreditScorePayload, LoanStatus } from './types';
import dayjs from 'dayjs';

const generateCreditScoreV2 = async (payload: any) => {
	try {
		const { customer, loan, repaidDate }: CreditScorePayload = payload;
		const { creditScore } = customer;
		const { isRefinanced, repaymentDate, status } = loan;

		const loans = await customer.loans.find();
		let loanCount = 0;
		let defaultMultipler = 1;
		let earlyRepaymentMultipler = 1;
		const lateStatus: string[] = ['REPAID', 'OVERPAID'];

		if (loans.length > 0) {
			loans.forEach((loanItem: any) => {
				const {
					loanId,
					loanRepaidDate,
					repaymentDate: loanItemRepaymentDate,
					status: loanItemStatus,
				} = loanItem;

				if (loan.loanId === loanId) {
					return;
				}

				if (lateStatus.includes(loanItemStatus)) {
					// This loan was repaid late
					const daysFromLoanRepaid = dayjs
						.unix(loanRepaidDate)
						.startOf('d')
						.diff(dayjs.unix(loanItemRepaymentDate).startOf('d'), 'd');

					if (loanRepaidDate > loanItemRepaymentDate) {
						if (Math.abs(daysFromLoanRepaid) > 3) {
							defaultMultipler += 1;
						}
					} else if (daysFromLoanRepaid < 0) {
						earlyRepaymentMultipler += 1;
					}

					loanCount += 1;
				} else if (['OVERDUE', 'EXTENSION', 'EXTENDED_OVERDUE'].includes(loanItemStatus)) {
					const daysOverRepayment = dayjs()
						.startOf('d')
						.diff(dayjs.unix(loanItemRepaymentDate).startOf('d'), 'd');

					if (Math.abs(daysOverRepayment) > 3) {
						defaultMultipler += 1;
					}
				}
			});
		}

		let newCreditScore = creditScore;
		const daysFromRepayment = (repaidDate ? dayjs.unix(repaidDate) : dayjs())
			.startOf('d')
			.diff(dayjs.unix(repaymentDate).startOf('d'), 'd');
		const isPaymentOntime = daysFromRepayment <= 0 && !isRefinanced;

		if (isPaymentOntime) {
			// Only increase their score if they pay back on time
			if (loanCount === 0) {
				newCreditScore += 20;
			} else if (loanCount === 1) {
				newCreditScore += 15;
			} else if (loanCount <= 9) {
				newCreditScore += 10;
			} else if (loanCount > 9) {
				newCreditScore += 5;
			}

			if (daysFromRepayment < 0) {
				earlyRepaymentMultipler += 1;
				const absoluteDateDiff = Math.abs(daysFromRepayment);

				const repaidEarlyBonus = Math.max(
					15,
					Math.min(5, absoluteDateDiff) * earlyRepaymentMultipler
				);
				newCreditScore += repaidEarlyBonus;
			}
		} else if (
			[LoanStatus.OVERDUE, LoanStatus.EXTENSION, LoanStatus.EXTENDED_OVERDUE].includes(status)
		) {
			const daysOverRepayment = dayjs().diff(dayjs.unix(repaymentDate), 'd');
			const scorePenalty = daysOverRepayment * 5 * defaultMultipler;

			if (scorePenalty >= newCreditScore) {
				newCreditScore = 0;
			} else {
				newCreditScore -= scorePenalty;
			}
		}

		return newCreditScore;
	} catch (error) {
		console.log(error);
	}

	return null;
};

export default generateCreditScoreV2;
