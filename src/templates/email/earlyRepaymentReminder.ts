import baseTemplate from './base';

import { toTitleCase } from '../../utils';

type EarlyRepaymentReminder = {
	businessName: string;
	repaymentBankAccountName: string;
	repaymentBankAccountNumber: string;
	repaymentBank: string;
};
const earlyRepaymentReminder = (props: EarlyRepaymentReminder): string => {
	const { businessName, repaymentBankAccountName, repaymentBankAccountNumber, repaymentBank } =
		props;

	const emailBody = `
	<tr>
	
	<td>
    <div class="text-center">
		<img
			class="hero-image"
			src="https://firebasestorage.googleapis.com/v0/b/payhippo.appspot.com/o/email%2Freminder.png?alt=media&token=30a86ed6-25bd-4824-8205-3832406fb93c"
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
			style="text-align: left;"
			>
				<tr>
					<td
						class="email-content-block copy"
						style="
							font-family: 'Inter', 'Avenir Next',
								'Avenir',
								'Helvetica',
								sans-serif !important;
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
								font-family: 'Inter', 'Avenir Next',
									'Avenir',
									'Helvetica',
									sans-serif !important;
								color: #011431;
								font-size: 1.5rem;
								font-weight: 500;
								font-style: normal;
							"
						>
							Dear ${businessName && toTitleCase(businessName)},
							<!---->
						</h2>
						<p
							style="
								margin-bottom: 1.5rem;
								margin-top: 0.4rem;
								font-family: 'Inter', 'Avenir Next',
											'Avenir',
											'Helvetica',
											sans-serif !important;
								font-weight: 400;
								font-size: 16px;
								line-height: 1.5;
								color: #011431;
							"
						>
						Here is a quick
					reminder, Repay
					early to unlock
					additional points to
					your credit score
					and increase your
					chances of getting
					an increase in your
					next offer. <br />

					Cheers.
					</p>
					<p
					style="
						margin-bottom: 0.3rem;
						margin-top: 1.5rem;
						font-family: 'Inter', 'Avenir Next',
									'Avenir',
									'Helvetica',
									sans-serif !important;
						font-weight: 400;
						font-size: 16px;
						line-height: 1.5;
						color: #011431;
					"
				>
				Click the button below to sign in and repay now, or repay using the dedicated account number above.
				</p>
				<p
				align="center"
				class="btn btn-primary"
			>
				<a
				style="margin-bottom: 1.5rem;
				margin-top: 0.5rem
				"
				href=${process.env._APP_URL}
					target="_blank"
					>Sign In</a
				>
			</p>
				</td>
				</tr>
				</tbody>
				</table>
					<!------------- Body Section ------------->
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
						</table>
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
					 
				   </div>
						<!------------- End of Bottom Section ------------->
						<div
							class="padding-break"
							style="
								font-family: 'Inter', 'Avenir Next',
									'Avenir',
									'Helvetica',
									sans-serif !important;
								margin-top: 30px;
							"
						></div>
				</tr>
			</table>
	</td>
</tr>
		`;
	return baseTemplate(emailBody);
};
export default earlyRepaymentReminder;
