import baseTemplate from './base';

import { toTitleCase } from '../../utils';

type ConfirmGuarantor = {
	guarantorName: string;
	businessOwnerName: string;
	businessName: string;
	guarantorUrl: string;
};
const confirmGuarantor = ({
	guarantorName,
	businessOwnerName,
	businessName,
	guarantorUrl,
}: ConfirmGuarantor): string => {
	const emailBody = `
	<tr>
	<td>
	  <div class="text-center">
	   <img
		  class="hero-image"
		  src="https://firebasestorage.googleapis.com/v0/b/payhippo.appspot.com/o/email%2Fguarantor_new.png?alt=media&token=0c60762c-93d8-47c9-a18a-4248aa9706ac"
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
		  <tbody class="center">
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
				   padding-top: 50px;
				   "
				   >
				   <h2
					  style="
					  margin: 0 0
					  0.5rem 0;
					  line-height: 1.25;
					  font-family: 'Inter', 'Avenir Next',
					  'Avenir',
					  'Helvetica',
					  sans-serif !important;
					  font-size: 1.5rem;
					  font-weight: 500;
					  font-style: normal;
					  "
					  >
					  Hello
					  <!---->
					  ${guarantorName && toTitleCase(guarantorName)},
				   </h2>
				   <p
					  style="
					  margin-bottom: 15px;
					  font-family: 'Inter', 'Avenir Next',
					  'Avenir',
					  'Helvetica',
					  sans-serif !important;
					  font-weight: 400;
					  font-size: 16px;
					  line-height: 1.5;
					  "
					  >
					  ${businessOwnerName}
					  from ${businessName}
					  has requested for a new loan with
					  Payhippo. We will need you to consent that you still want to stand in as the guarantor.
				   </p>
				   <p
					  style="
					  margin-bottom: 15px;
					  font-family: 'Inter', 'Avenir Next',
					  'Avenir',
					  'Helvetica',
					  sans-serif !important;
					  font-weight: 400;
					  font-size: 16px;
					  line-height: 1.5;
					  "
					  >
					  If there is a
					  default and we
					  cannot contact
					  ${businessOwnerName},
					  we will contact you
					  to assist in the
					  loan repayment and recovery process.
				   </p>
				   <p
					  style="
					  margin-bottom: 10px;
					  font-family: 'Inter', 'Avenir Next',
					  'Avenir',
					  'Helvetica',
					  sans-serif !important;
					  font-weight: 400;
					  font-size: 16px;
					  line-height: 1.5;
					  "
					  >
					  Please note that you can either choose to accept or reject to be the guarantor. Please click the button to proceed and let us know your decision.
				   </p>
				   <p
					  align="center"
					  class="btn btn-primary"
					  >
					  <a
						 href="${guarantorUrl}"
						 target="_blank"
						 >Acknowledge</a
						 >
				   </p>
				   <p
				   style="
				   margin-bottom: 15px;
				   font-weight: 400;
				   font-size: 16px;
				   line-height: 1.5;
				   color: #333e48;
				   "
				   >
				   Have questions about the Payhippo? We’d love to help. <br />
				   You can reach us at hello@payhippo.ng or visit us at 
				   <a
					  href="https://payhippo.ng"
					 
					  target="_blank"
					  >payhippo.ng</a
					  >.
				</p>
	
			<div class="padding-break" style="
					  font-family: 'Inter', 'Avenir Next',
					  'Avenir',
					  'Helvetica',
					  sans-serif !important;
					  margin-top: 30px;
					  "></div>
			</td>
			</tr>
			</tbody>
			</table>
			</td>
			</tr>
		`;
	return baseTemplate(emailBody);
};
export default confirmGuarantor;
