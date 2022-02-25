import baseTemplate from './base';

import { toTitleCase } from '../../utils';

type DisbursalSuccess = {
	addStatementFee: boolean;
	bankAccountNumber: string;
	businessOwnerName: string;
	businessBankName: string;
	loanAmount: string;
	repaymentAmount: string;
	repaymentDate: string;
	repaymentBankAccountName: string;
	repaymentBankAccountNumber: string;
	repaymentBank: string;
	statementProcessingFee: string;
	disbursedOverpaidAmount: string;
	originalFeeAmount: string;
};
const disbursalTemplate = (props: DisbursalSuccess): string => {
	const {
		addStatementFee = false,
		bankAccountNumber,
		businessOwnerName,
		businessBankName,
		loanAmount,
		repaymentAmount,
		repaymentDate,
		repaymentBankAccountName,
		repaymentBankAccountNumber,
		repaymentBank,
		statementProcessingFee,
		disbursedOverpaidAmount,
		originalFeeAmount,
	} = props;

	const emailBody = `
	<tr>
    <td>
    <div class="text-center">
        <img
            class="hero-image"
            src="https://firebasestorage.googleapis.com/v0/b/payhippo.appspot.com/o/email%2Fwelcome.png?alt=media&token=9ca60252-57ab-4970-a9c4-787ff726b0aa"
        />
    </div>
    </td>
</tr>
<!-- Hero Image -->
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
                            Hello 	${businessOwnerName && toTitleCase(businessOwnerName)},
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
                        We just disbursed  <b>${loanAmount}</b> into your business bank account.
                    </p>
                </td>
                </tr>
                </tbody>
                </table>
                    <!------------- Body Section ------------->
                    <div class="invoice-box">
                        <table>
                            <tr class="heading">
                                <td>Loan/Account Details</td>

                                <td>Unit/Value</td>
                            </tr>
                            <tr class="item">
                                <td>Amount</td>
                                <td>${loanAmount}</td>
                            </tr>
                            <tr class="item">
                                <td>Bank Name</td>
                                <td>${businessBankName}</td>
                            </tr>
                           
                            <tr class="item">
                                <td>Account Number</td>
                                <td>${bankAccountNumber}</td>
                            </tr>

						    <tr class="item">
								<td>Reimbursement Amount</td>
								<td>${disbursedOverpaidAmount}</td>
							</tr>

                            <tr class="item">
                                <td>Fees and Interest</td>
                                <td>${originalFeeAmount}</td>
                            </tr>

                            ${
								addStatementFee
									? ` <tr class="item">
                            <td>Statement Processing Fee</td>
                            <td>${statementProcessingFee}</td>
                        </tr>`
									: ''
							}

                           

                            <tr class="item">
								<td>Repayment Amount</td>
								<td>${repaymentAmount}</td>
							</tr>

							<tr class="item last">
                                <td>Repayment Due Date</td>
                                <td>${repaymentDate}</td>
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
						style="
							margin: 10px 30px;
                            text-align: left;
							font-family: 'Inter', 'Avenir Next',
								'Avenir',
								'Helvetica',
								sans-serif !important;
							font-weight: 400;
							font-size: 16px;
							line-height: 1.5;
							color: #333e48;
						"
					>
					Don't forget to repay using the dedicated account number below.
					</p>
					   <br/>


				<div class="invoice-box">
					<table>
						<tr class="heading">
							<td>Repayment Account Details</td>

							<td>Unit/Value</td>
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
                   </p>

                     
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
        </table>
    </td>
</tr>
		`;
	return baseTemplate(emailBody);
};

export default disbursalTemplate;
