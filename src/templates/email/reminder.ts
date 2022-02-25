import baseTemplate from './base';
import { toTitleCase } from '../../utils';

type Reminder = {
	referenceNumber: string;
	businessOwnerName: string;
	dateDifferenceInDays: number;
	loanAmount: string;
	repaymentAmount: string;
	repaymentDate: string;
	repaymentBankAccountName: string;
	repaymentBankAccountNumber: string;
	repaymentBank: string;
};

const reminder = (props: Reminder): string => {
	const {
		referenceNumber,
		businessOwnerName,
		dateDifferenceInDays,
		loanAmount,
		repaymentAmount,
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
                            Hello ${businessOwnerName && toTitleCase(businessOwnerName)},

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
						
                        This is a gentle reminder that your business loan with Payhippo is due ${
							dateDifferenceInDays === 1
								? ' tomorrow'
								: ' on ' +
								  repaymentDate +
								  `, which is ${dateDifferenceInDays} days from today.`
						}

                        <br />
                        <br />
                        Below is your outstanding loan details.
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
                                <td>Amount</td>

                                <td>${loanAmount}</td>
                            </tr>
                          
                            <tr class="item">
                                <td>Repayment Amount</td>

                                <td>${repaymentAmount}</td>
                            </tr>

                            <tr class="item last">
                                <td>Repayment Due Date</td>

                                <td>${repaymentDate}</td>
                            </tr>
                            <tr class="item">
                                <td>Reference Number</td>

                                <td>${referenceNumber}</td>
                            </tr>
                            </table>
                    </div>
                    
                <!------------- End of Body Section ------------->
                 <!------------- Bottom Section ------------->

                    <table
                    >

                   <tr >

                   <td
                   class="email-content-block"
                       
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
                       margin-bottom:1.5rem;
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
               Sign In today and repay to get a discount and bonus points added to your credit score allowing you access more money from Payhippo this month.
               </p>
			   <div class="invoice-box"
               style="margin-top: 0.5rem;
                    padding-left: 0;
                      padding-right: 0;
                      "
               >
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
                     
                   </td>
                        <!------------- End of Bottom Section ------------->
                     
                </tr>
            </table>
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
`;
	return baseTemplate(emailBody);
};

export default reminder;
