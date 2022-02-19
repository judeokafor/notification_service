import baseTemplate from './base';

type GuarantorAccepted = {
	businessName: string;
};
const guarantorAccepted = ({ businessName }: GuarantorAccepted): string => {
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
                        
                    <h3
                    style="
                        margin: 0 0
                            0.3rem 0;
                        line-height: 1.25;
                        font-family: 'Inter', 'Avenir Next',
                            'Avenir',
                            'Helvetica',
                            sans-serif !important;
                        color: #011431;
                        font-size: 1.3rem;
                        font-weight: 500;
                        font-style: normal;
                    "
                >
                Customer, ${businessName} has met the guarantor requirement.
                    <!---->
                </h3>
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
export default guarantorAccepted;
