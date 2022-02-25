import baseTemplate from './base';
import { toTitleCase } from '../../utils';

type ConsistentOverdueLoans = {
	businessOwnerName: string;
	dateDifferenceInDays: number;
	loanAmount: string;
	newRepaymentAmount: string;
	referenceNumber: string;
	repaymentDate: string;
	repaymentBankAccountName: string;
	repaymentBankAccountNumber: string;
	repaymentBank: string;
};
const consistentOverdueLoans = (props: ConsistentOverdueLoans): string => {
	const {
		businessOwnerName,
		dateDifferenceInDays,
		loanAmount,
		newRepaymentAmount,
		referenceNumber,
		repaymentDate,
		repaymentBankAccountName,
		repaymentBankAccountNumber,
		repaymentBank,
	} = props;

	const emailBody = `
	<tr>
	<td>
		
		<div class="text-center">
		<img
			class="hero-image"
			src="https://firebasestorage.googleapis.com/v0/b/payhippo.appspot.com/o/email%2Fgrowth.png?alt=media&token=c11d029a-7f44-4b03-bf9e-e025808aadbd"
		/>

	   </div>
	</td>
</tr>
<tr>
	<td
		class="email-content"
		style="background-color: #ffffff"
	>
		<table
			align="center"
			border="0"
			cellpadding="0"
			cellspacing="0"
			style="width: 100%"
		>
			<tbody
			style="text-align: center;"
			>
				<tr>
					<td
						class="email-content-block copy"
						style="
							padding-left: 25px;
							padding-right: 25px;
							padding-top: 30px;
						"
					>
						<h2
							style="
								margin: 0 0
									0.3rem 0;
								line-height: 1.25;
								color: #011431;
								font-size: 1.5rem;
								font-weight: 500;
								font-style: normal;
							"
						>
						Hi ${businessOwnerName && toTitleCase(businessOwnerName)},
						</h2>
						<p
							style="
								margin-bottom: 1.5rem;
								margin-top: 0.4rem;
								font-weight: 400;
								font-size: 16px;
								line-height: 1.5;
								color: #011431;
							"
						>
						Your Loan is now ${dateDifferenceInDays} ${
		dateDifferenceInDays > 1 ? 'days' : 'day'
	} overdue and your loan is accumulating more interest costs for you.

					</p>
				</td>
				</tr>
				</tbody>
				</table>
					<!------------- Body Section ------------->
					<div class="invoice-box">
						<table>
							<tr class="heading">
								<td>Loan Details</td>

								<td>Unit/Value</td>
							</tr>
							<tr class="item">
								<td>Loan Amount</td>

								<td>${loanAmount}</td>
							</tr>
							<tr class="item">
								<td>New Repayment Amount</td>
								<td>${newRepaymentAmount}</td>
							</tr>

							<tr class="item last">
								<td>Repayment Due Date</td>
								<td>${repaymentDate}</td>
							</tr>
							<tr class="item">
								<td>Reference Number</td>
								<td>${referenceNumber}</td>
							</tr>
					</div>
					
				<!------------- End of Body Section ------------->
				 <!------------- Bottom Section ------------->

					<table
					>

				   <tr >
					<div
					style="
					text-align: center;
					"
					>

						<p
						align="center"
						class="btn btn-primary"
					>
						<a
						href=${process.env._APP_URL}
							target="_blank"
							>Sign In</a
						>
					</p>

					<p
						style="
							margin: 10px 30px;
							text-align: left;
							font-weight: 400;
							font-size: 16px;
							line-height: 1.5;
							color: #333e48;
						"
					>
						Sign In now or use the dedicated account number below to repay and avoid more interest costs
					</p>
					<div class="invoice-box">
							<table>
								<tr class="heading">
									<td>Repayment Account Details</td>
		
									<td>Value</td>
								</tr>
								<tr class="item">
									<td>Account Name</td>
		
									<td>${repaymentBankAccountName}</td>
								</tr>
								<tr class="item">
									<td>Account Number</td>
		
									<td>${repaymentBankAccountNumber}</td>
								</tr>
								<tr class="item">
									<td>Bank Name</td>
		
									<td>${repaymentBank}</td>
								</tr>
							<table/>
						</div>
					
					</div>

				  
					<div
					class="padding-break"
					style="
								margin-top: 30px;
								"
						></div>
					</tr>
				</table>
			</table>
		</td>
		<!------------- End of Bottom Section ------------->
</tr>
`;
	return baseTemplate(emailBody);
};

export default consistentOverdueLoans;
