import baseTemplate from './base';

import { toTitleCase } from '../../utils';

type RepaymentInvoice = {
	addStatementFee?: boolean;
	actualLoanDuration: number;
	businessName: string;
	businessAddress: string;
	disbursementDate: string;
	duration: number;
	repaymentDate: string;
	loanAmount: string;
	repaymentAmount: string;
	totalPaymentAmount: string;
	originalFeeAmount: string;
	referenceNumber: string;
	disbursedOverpaidAmount: string;
	statementProcessingFee: string;
	lateFees: string;
};
const repaymentInvoice = (props: RepaymentInvoice): string => {
	const {
		addStatementFee = false,
		actualLoanDuration,
		businessName,
		businessAddress,
		disbursementDate,
		duration,
		repaymentDate,
		loanAmount,
		repaymentAmount,
		totalPaymentAmount,
		originalFeeAmount,
		referenceNumber,
		disbursedOverpaidAmount,
		statementProcessingFee,
		lateFees,
	} = props;
	const emailBody = `
	<tr>
    <td>
    <div class="text-center">
        <img
            class="hero-image"
            src="https://firebasestorage.googleapis.com/v0/b/payhippo.appspot.com/o/email%2Frepayment.png?alt=media&token=9b5ddca0-4e7f-47ba-a7be-1e65862d0360"
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
                            Hello 	${businessName && toTitleCase(businessName)},
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
                        Your loan repayment has been received. Below is the loan repayment detail
                    </p>
                </td>
                </tr>
                </tbody>
                </table>
                    <!------------- Body Section ------------->
                    <div class="invoice-box"
                    >
                        <table
                        >
                            <tr class="heading">
                                <td>Loan Details</td>

                                <td>Unit/Value</td>
                            </tr>
                           
                            <tr class="item">
                                <td>Reference Number</td>

                                <td>${referenceNumber}</td>
                            </tr>
                            <tr class="item">
                                <td>Disbursed Date</td>

                                <td>${disbursementDate}</td>
                            </tr>
                            <tr class="item">
                                <td>Address</td>

                                <td>${businessAddress}</td>
                            </tr>

                            <tr class="item">
                                <td>Duration</td>

                                <td>
                                    ${Math.abs(duration)}
                                    days
                                </td>
                            </tr>
                            <tr class="item">
                                <td>
                                    Actual Loan Duration
                                </td>

                                <td>
                                    ${Math.abs(actualLoanDuration)}
                                    days
                                </td>
                            </tr>

                            <tr class="item">
                                <td>Amount</td>

                                <td>${loanAmount}</td>
                            </tr>

                            <tr class="item">
                                <td>Fees and Interest</td>
                                <td>${originalFeeAmount}</td>
                            </tr>

                            <tr class="item">
								<td>Reimbursement Amount</td>
						        <td>${disbursedOverpaidAmount}</td>
							</tr>

                            <tr class="item">
								<td>Late Fees</td>
						        <td>${lateFees}</td>
							</tr>

                            

                            ${
								addStatementFee
									? ` <tr class="item">
                            <td>Statement Processing Fee</td>
                            <td>${statementProcessingFee}</td>
                        </tr> `
									: ''
							}


						    <tr class="item">
								<td>Revised Repayment Amount</td>
								<td>${repaymentAmount}</td>
							</tr>

							<tr class="item last">
								<td>Repayment Date</td>
								<td>${repaymentDate}</td>
							</tr>
		
							<tr class="total">
								<td></td>
								<td>
									Total Amount Repaid:
									${totalPaymentAmount}
								</td>
							</tr>
                    </div>
                    
                <!------------- End of Body Section ------------->
                 <!------------- Bottom Section ------------->

                    <table
                    >

                   <tr >
                        <td
                        class="email-content-block copy"
                        >
                        <div
                   style="
                   text-align: left;
                   "
                   >

                   

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
                       We are excited to
                       continue fulfilling your
                       business's financing
                       needs. Click the request button below to apply for a new loan.
                       </p>
                       <p
                       align="center"
                       class="btn btn-primary"
                   >
                       <a
					   href=${process.env._APP_URL}
                           target="_blank"
                           >Request</a
                       >
                   </p>
                    
                   </div>
                        </td>
                   
                        <!------------- End of Bottom Section ------------->
                        </tr>
                        <tr>
                        <td>
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
                        </td>
                        </tr>
            </table>
        </table>
    </td>
</tr>
	`;
	return baseTemplate(emailBody);
};
export default repaymentInvoice;
