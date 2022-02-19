import baseTemplate from './base';

import { toTitleCase } from '../../utils';

type GuarantorNotAccepted = {
	businessName: string;
	guarantorsNotSigned: boolean;
};
const guarantorNotAccepted = ({
	businessName,
	guarantorsNotSigned,
}: GuarantorNotAccepted): string => {
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
                        Hello ${businessName && toTitleCase(businessName)},

                        
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
                                color: #011431;
                            "
                        >
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

                            ${guarantorsNotSigned} has not responded to our message and hence delays your funds.
                            <span
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
                                
                                Please, reach out to them.
                            </span>
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
export default guarantorNotAccepted;
