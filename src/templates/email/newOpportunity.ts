import baseTemplate from './base';
import { toTitleCase } from '../../utils';

type NewOpportunity = {
	accountManagerName: string;
	name: string;
	partnerName: string;
	url: string;
};
const newOpportunity = ({ accountManagerName, name, partnerName, url }: NewOpportunity): string => {
	const emailBody = `
   <tr>
    <td>
    <div class="text-center">
       <img
          class="hero-image"
          src="https://firebasestorage.googleapis.com/v0/b/payhippo.appspot.com/o/email%2Fgoal.png?alt=media&token=d05ea004-b5ec-4838-9729-89ef3f87f2a7"
          />
          </div>
    </td>
 </tr>
 <tr>
 <td
    class="email-content"
    style="background-color: #ffffff"
    >
    <tr>
        <td>

            <table
               align="center"
               border="0"
               cellpadding="0"
               cellspacing="0"
               style="width: 100%"
               >
               <tbody
                  style="text-align: justify;"
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
                           ${name && toTitleCase(name)},
                        </h2>
                        <p
                           style="
                           margin-bottom: 1.5rem;
                           margin-top: 0.4rem;

                           font-weight: 400;
                           font-size: 16px;
                           line-height: 1.5;
                           color: #011431;
                           "
                           >
                           ${
								partnerName
									? `In
                           partnership with
                           ${partnerName}, we`
									: `${accountManagerName} has invited you to get onboard. We`
							} are excited
                           to provide your
                           small business with
                           the funds it needs
                           to grow. Please
                           click on the button
                           below to officially
                           get the process
                           started.
                        </p>
                     </td>
                  </tr>
               </tbody>
            </table>
        </td>
    </tr>
    <tr>
        <td>
            <table
            style="width: 100%"
               >

              <tbody>
               <tr >
                  <td
                     class="email-content-block copy"
                     style="
                     text-align: center;
                     width: 100%;
                     "
                     >
                     <p
                        style="
                        line-height: 1.5;
                        color: #1123AB;
                        font-size: 16px;
                        "
                        >
                        Important: No processing fee(₦0) is required to sign up with us.
                     </p>
                     <p
                        align="center"
                        class="btn btn-primary"
                        >
                        <a
                           href="${url}"
                           target="_blank"
                           >Get Started</a
                           >
                     </p>

                  </td>
                  <!------------- End of Bottom Section ------------->

               </tr>
            </tbody>

            </table>

        </td>
    </tr>
    <tr>
        <div
        class="padding-break"
        style="

        margin-top: 30px;
        "
        ></div>
    </tr>
    <!------------- Body Section ------------->
    <!------------- End of Body Section ------------->
    <!------------- Bottom Section ------------->
</td>
</tr>
		`;
	return baseTemplate(emailBody);
};
export default newOpportunity;
