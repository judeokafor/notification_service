import baseTemplate from './base';

import { toTitleCase } from '../../utils';

type Recollection = {
	businessOwnerName: string;
};
const recollection = ({ businessOwnerName }: Recollection): string => {
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
                        Dear ${businessOwnerName && toTitleCase(businessOwnerName)},
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
                        Your loan is currently overdue. We are sending you this mail to notify you that our recollections team will contact you soon on how to begin the repayment of your loan.

                    
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
                                margin-top: 20px;
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
export default recollection;
