import baseTemplate from './base';
import { toTitleCase } from '../../utils';

type Disqualify = {
	businessOwnerName: string;
	reason: string;
};
const options = [
	{
		text: 'Incomplete documentation',
		value: 'INCOMPLETE_DOCUMENTATION',
	},
	{
		text: 'Insufficient Transactions',
		value: 'INSUFFICIENT_TRANSACTIONS',
	},
	{
		text: 'No response from guarantor',
		value: 'NO_GUARANTOR_RESPONSE',
	},
	{
		text: 'Bad Credit Report',
		value: 'NON_PERFORMING_CREDIT_REPORT',
	},
];

const generateTextFromValue = (value = '') => {
	switch (value) {
		case options[0].value:
			return 'Your documents were incomplete or not verifiable.';

		case options[1].value:
			return `We encourage you to use your bank account more frequently,
			for your business transactions,
			in order for us to offer you financing in the near future.
			`;

		case options[2].value:
			return `We could not get any response from your guarantor.`;

		case options[3].value:
			return `We encourage you to clear out your non performing 
            loans from other credit providers,
			in order for us to offer you financing in the near future.`;

		default:
			return `We encourage you to use your bank account more frequently,
			for your business transactions,
			in order for us to offer you financing in the near future.
			`;
	}
};

const disqualify = ({ businessOwnerName, reason }: Disqualify): string => {
	const { value } = options.find(({ value }) => value === reason) || { value: options[1].value };

	const emailBody = `
<tr>
    <td>
    <div class="text-center">
        <img
            class="hero-image"
            src="https://firebasestorage.googleapis.com/v0/b/payhippo.appspot.com/o/email%2Ferror.png?alt=media&token=1bfc3428-cf41-490c-94b1-1ea9f10ed8ac"
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
                        line-height: 1.8;
                    "
                        >

                            Thank you for choosing Payhippo to finance your loan.
                        </p>

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
                        line-height: 1.4;
                        "
                        >

                            We are aware of your need for this loan but unfortunately we can not move forward with financing your loan at this moment.
                        </p>
                        
                        
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
                        line-height: 1.4;
                        "
                        >
                        
                        ${generateTextFromValue(value)}
                    </p>
                    <p
                    style="
                    margin-bottom: 30px;
          
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
                    
                </td>
                </tr>
                </tbody>
                </table>
                    <!------------- Body Section ------------->
                    
                    
                <!------------- End of Body Section ------------->
                 <!------------- Bottom Section ------------->

               
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
        
       
    </td>
</tr>

`;
	return baseTemplate(emailBody);
};

export default disqualify;
