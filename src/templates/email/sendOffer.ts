import moment from 'moment';
import baseTemplate from './base';

import { toTitleCase, formatCurrency } from '../../utils';

export enum OpportunityType {
	NEW = 'NEW',
	RETURNING = 'RETURNING',
}

type SendOffer = {
	addStatementFee: boolean;
	actualLoanDuration: number;
	availabilityDate: string;
	bankAccountNumber: string;
	businessBankName: string;
	businessName: string;
	businessOwnerName: string;
	loanOfferAmount: string;
	repaymentAmount: string;
	repaymentDate: string;
	opportunityType: OpportunityType;
	totalPendingOverpaidAmount: string;
	statementProcessingFee: string;
	pendingOverpaidLoans?: {
		amount: string;
		loanRepaidDate: number;
	}[];
};

const sendOffer = (props: SendOffer): string => {
	const {
		addStatementFee,
		actualLoanDuration,
		availabilityDate,
		bankAccountNumber,
		businessBankName,
		businessName,
		businessOwnerName,
		loanOfferAmount,
		repaymentAmount,
		repaymentDate,
		opportunityType = OpportunityType.RETURNING,
		pendingOverpaidLoans,
		totalPendingOverpaidAmount,
		statementProcessingFee,
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
   <td class="email-content" style="background-color: #ffffff">
     <table
       align="center"
       border="0"
       cellpadding="0"
       cellspacing="0"
       style="width: 100%"
     >
       <tbody>
         <tr>
           <td
             class="email-content-block copy"
             style="padding-left: 25px; padding-right: 25px; padding-top: 50px"
           >
             <h2
               style="
                 margin: 0 0 0.5rem 0;
                 line-height: 1.25;
                 font-size: 1.5rem;
                 font-weight: 500;
                 font-style: normal;
               "
             >
               Hello
               <!---->
               ${businessOwnerName && toTitleCase(businessOwnerName)},
             </h2>
             <p
               style="
                 margin-bottom: 15px;
                 font-weight: 400;
                 font-size: 16px;
                 line-height: 1.5;
               "
             >
               Here are the details of your loan offer
             </p>
             <div
               class="padding-break"
               style="
                 font-family:'Inter', 'Avenir Next', 'Avenir', 'Helvetica', sans-serif !important;
                 margin-top: 20px;
               "
             ></div>
           </td>
         </tr>
 
         <!-- NewTable -->
         <tr>
           <td>
             <div class="invoice-box">
             <table>
                 <tr>
                     <td>
                         <table>
                             <tr class="heading">
                               <td>Loan Details</td>
                               <td>Unit/Value</td>
                             </tr>
                             <tr class="item">
                               <td>Amount</td>
                               <td>${loanOfferAmount}</td>
                             </tr>
                             <tr class="item">
                               <td>Business Name</td>
                               <td>${businessName}</td>
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
                               <td>Availability Date</td>
                               <td>${availabilityDate}</td>
                             </tr>
                             <tr class="item">
                               <td>Loan Duration</td>
                               <td>${actualLoanDuration} days</td>
                             </tr>
                             <tr class="item last">
                               <td>Repayment Due Date</td>
                               <td>${repaymentDate}</td>
                             </tr>
                             ${
									pendingOverpaidLoans?.length
										? `
                        <tr class="item last">
                          <td>Previous Reimbursement Amount</td>
                          <td> ${pendingOverpaidLoans
								.map(loan => {
									return `${formatCurrency(loan.amount)} repaid on ${moment
										.unix(loan.loanRepaidDate)
										.format('L')} <br />`;
								})
								.join('')}
                          </td>
                        </tr>
                        <tr class="item">
                          <td>Total Reimbursement Amount</td>
                          <td>${totalPendingOverpaidAmount}</td>
                        </tr>
                    `
										: ''
								}

                
                ${
					addStatementFee
						? ` <tr class="item">
                              <td>Statement Processing Fee</td>
                              <td>${statementProcessingFee}</td>
                          </tr> `
						: ''
				}
                <tr class="item">
                  <td>Repayment Amount</td>
                  <td>${repaymentAmount}</td>
                </tr>
                
              </table>
            </td>
          </tr>
        </table>
      </div>
    </td>
   </tr>
 
         <!-- End of new Table -->
         <tr>
           <table
             align="center"
             border="0"
             cellpadding="0"
             cellspacing="0"
             style="width: 100%"
           >
             <tr>
               <td>

                   <p
                     style="
                       margin: 10px 30px;
                       font-weight: 400;
                       font-size: 16px;
                       line-height: 1.5;
                     "
                   >
                     ${
							actualLoanDuration < 30
								? ''
								: 'Our system automatically readjusts repayment dates to give each customer the best opportunity to get a new loan before the weekend. We understand that the funds we give our customers is more effectively used during the weekdays.'
						}
                   </p>
                   ${
						opportunityType === OpportunityType.NEW
							? `
                   <p
                     class="signout light-type"
                     style="
                       margin: 15px;
                       font-family:'Inter', 'Avenir Next', 'Avenir', 'Helvetica', sans-serif !important;
                       font-weight: 400;
                       font-size: 16px;
                       line-height: 1.5;
                       color: #1123ab;
                     "
                   >
                     Important: No processing fee(₦0) is required to access a loan
                     from us.
                   </p>
                   `
							: ''
					}
                   <p
                     style="
                       margin: 20px 30px 30px;
                        color: black;
                       font-weight: 400;
                       font-size: 16px;
                       line-height: 1.5;
                     "
                   >
                     Please, click on the button below to Accept your offer. By
                     clicking on this button you are deemed to have accepted the loan
                     with the  <a
                     href="https://app.payhippo.ng/terms"
                    
                     target="_blank"
                     >Terms and Conditions</a
                     >.
                   </p>
                   <p align="center" class="btn btn-primary">
                     <a href="${process.env._APP_URL}" target="_blank"
                       >Accept Offer</a
                     >
                   </p>
               </td>
           </tr>

               <tr>
 
               <td class="email-content-block copy"
               style="padding-left: 25px; padding-right: 25px; padding-top: 0px" >
                 <p
                   style="
                     margin: 15px 20px;
                     font-weight: 400;
                     font-size: 16px;
                     line-height: 1.5;
                     color: #333e48;
                   "
                 >
                   <u>
                     <b> Terms and Conditions </b>
                   </u>
                 </p>
                 <ul
                   style="
                     margin: 15px 20px;
                     font-weight: 400;
                     font-size: 16px;
                     line-height: 1.6;
                     font-weight: 400;
                     font-size: 16px;
                     line-height: 1.5;
                     padding: 0;
                   "
                 >
                   <li style="margin-bottom: 0.5rem">
                     Payhippo will send you the funds directly to your stipulated
                     bank.
                   </li>
                   <li style="margin-bottom: 0.5rem">
                     You will transfer the full repayment amount at the end of
                     the loan.
                   </li>
                   <li style="margin-bottom: 0.5rem">
                     There will be additional late fees and charges if the loan
                     is repaid after the stated due date.
                   </li>
                   <li style="margin-bottom: 0.5rem">
                     Interest will continue to accrue on the facility in the
                     event that payment is received after the due date.
                   </li>
                   <li style="margin-bottom: 0.5rem">
                     The borrower is responsible for settling the additional
                     interest charges in the event that payment is received after
                     the due date.
                   </li>
                   <li style="margin-bottom: 0.5rem">
                     Interest will be prorated where the loan amount is paid
                     before the due date. Note, one-time charges will not be
                     prorated.
                   </li>
                   <li style="margin-bottom: 0.5rem">
                     Note that your Credit History will be evaluated by your
                     commitment in making sure your payment is received on or
                     before the due date.
                   </li>
                   <li style="margin-bottom: 0.5rem">
                     This loan is non-exclusive. If you are using any other
                     lending services to finance your business, please continue
                     to do so at your own discretion. We look forward to
                     financing you alongside your other financial partners.
                   </li>
                   <li style="margin-bottom: 0.5rem">
                     You will only be disbursed the new loan once it is confirmed
                     that the previous one has been paid off completely.
                   </li>
                 </ul>
               <p
                 class="signout light-type"
                 style="
                   margin: 15px 30px;
                   font-weight: 400;
                   font-size: 16px;
                   line-height: 1.5;
                   color: #788991;
                 "
               ></p>
               </td>
             </tr>
           </table>
         </tr>
       </tbody>
     </table>
   </td>
 </tr>
 
	`;
	return baseTemplate(emailBody);
};
export default sendOffer;
