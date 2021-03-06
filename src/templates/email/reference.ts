import baseTemplate from './base';
import { toTitleCase } from '../../utils';

type Reference = { businessOwnerName: string; firstName: string; referenceUrl: string };
const reference = ({ businessOwnerName, firstName, referenceUrl }: Reference): string => {
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
            <tbody
            style="text-align: left;"
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
						Hello
						<!---->
						${firstName && toTitleCase(firstName)},

                        </h2>
                        <p
                            style="
                                margin-bottom: 1.5rem;
                                margin-top: 0.4rem;
                                font-weight: 400;
                                font-size: 16px;
                                line-height: 1.8;
                                color: #011431;
                            "
                        >
                        <p
                        style="line-height: 1.4; font-size: 16px;"
                        
                        >

                        ${businessOwnerName} has submitted your details as a referee with Payhippo.
                        </p>
                        <p
                        style="line-height: 1.4; font-size: 16px;"
                        >
                        We would like your to confirm if the details submitted are accurate.
                        </p>
                        <p
                        style="line-height: 1.4; font-size: 16px;"
                        >
                        If you accept, please click on the button below to move forward with this request
                        </p>
                        
                             
                        <p
                        align="center"
                        class="btn btn-primary"
                    >
                        <a
                        href="${referenceUrl}"
                            target="_blank"
                            >Accept</a
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
                     Have questions about the Payhippo? We???d love to help. <br />
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
export default reference;
