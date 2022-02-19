import baseTemplate from './base';

import { formatCurrency } from '../../utils';

type RecollectionPayment = {
	businessName: string;
	loanAmount: string;
	paymentAmount: string;
	remainingPrincipal: string;
	repaymentDate: string;
	paymentDate: string;
};

const recollectionPayment = (props: RecollectionPayment): string => {
	const {
		businessName,
		loanAmount,
		paymentAmount,
		remainingPrincipal,
		repaymentDate,
		paymentDate,
	} = props;
	const emailBody = `
	<tr>
    <td>
    <div class="text-center">
        <img
            class="hero-image"
            src="https://firebasestorage.googleapis.com/v0/b/payhippo.appspot.com/o/email%2Foverdue-2.png?alt=media&token=cd2b9431-b622-4032-b0f1-f4afbccaabf6"
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
                        Hello Payhippo SuperStar,
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
                        ${businessName}'s has made payment for their loan in recollection.

                        <br />
                        <br />
                        Below is the loan detail
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

                                <td>${formatCurrency(loanAmount)}</td>
                            </tr>
                        
                            <tr class="item">
                                <td>Payment Amount</td>

                                <td>${formatCurrency(paymentAmount)}</td>
                            </tr>
                        
                            <tr class="item">
                                <td>Payment Date</td>

                                <td>${paymentDate}</td>
                            </tr>
                        
                            <tr class="item">
                                <td>Remaining Principal</td>

                                <td>${formatCurrency(remainingPrincipal)}</td>
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

                  
                        <!------------- End of Bottom Section ------------->
                        <div
                            class="padding-break"
                            style="
                                font-family: 'Inter', 'Avenir Next',
                                    'Avenir',
                                    'Helvetica',
                                    sans-serif !important;
                                margin-top: 30px;
;
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
export default recollectionPayment;
