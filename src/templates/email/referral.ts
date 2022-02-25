import baseTemplate from './base';

import { toTitleCase } from '../../utils';

type Referral = {
	referralName?: string;
	signUpUrl: string;
	invitedBy: string;
	invitedByFullName: string;
	referralCode: string;
};
const referral = (props: Referral): string => {
	const { referralName = 'there', signUpUrl, invitedBy, invitedByFullName, referralCode } = props;
	const emailBody = `
	<tr>
    <td>
    <div class="text-center">
        <img
            class="hero-image"
            src="https://firebasestorage.googleapis.com/v0/b/payhippo.appspot.com/o/email%2Femail-sent.png?alt=media&token=e62bbb85-9ca0-484e-8057-3a6310ffe536"
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
                            Hello ${referralName && toTitleCase(referralName)},
                            <!---->
                        </h2>
                        <p
                            style="
                                margin-bottom: 1rem;
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

						${invitedByFullName} from ${invitedBy} has referred you for 
                        
                        <span style="">

                    
                            
                            <a href="https://payhippo.ng"
                            target="_blank"
                            >
                            
                                Payhippo
                            </a>
                        </span>

                        </p>

                         <p
                            style="
                                margin-bottom: 1rem;
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
                        You can use ${referralName}'s referral code below to signup 
                            <b
                                ><h2
                                    style="
                                        margin: 0
                                            0
                                            0.8rem
                                            0;
                                        line-height: 1.25;
                                        font-family: 'Inter', 'Avenir Next',
                                            'Avenir',
                                            'Helvetica',
                                            sans-serif !important;
                                        color: #0A198E;
                                        font-size: 3rem;
                                        font-weight: bold;
                                        font-style: normal;
                                    "
                                >
								${referralCode}
                                </h2></b
                            >
                        </p>

                        <p>
                        or Click on the button below to get started
                        </p>
                </td>
                </tr>
                </tbody>
                </table>
                    <!------------- Body Section ------------->
                   
                    
                <!------------- End of Body Section ------------->
                 <!------------- Bottom Section ------------->

                    <table
                    width="100%"
                    >

                   <tr >

                   <div
                   style="
                   text-align: center;
                   "
                   >

                       <p
                       align="center"
                       class="btn btn-primary"
                       style="margin-top:1rem"
                   >
                       <a
                       href="${signUpUrl}"
                           target="_blank"
                           >Get Started</a
                       >
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

export default referral;
