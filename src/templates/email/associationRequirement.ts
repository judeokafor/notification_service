import baseTemplate from './base';

import { toTitleCase } from '../../utils';

type AssociationRequirement = {
	businessOwnerName: string;
	associationName: string;
};

const associationRequirement = ({
	businessOwnerName,
	associationName,
}: AssociationRequirement): string => {
	const emailBody = `
   <tr>
   <td>
   <div class="text-center">
         <img
            class="hero-image"
            src="https://firebasestorage.googleapis.com/v0/b/payhippo.appspot.com/o/email%2Freminder.png?alt=media&token=30a86ed6-25bd-4824-8205-3832406fb93c"
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
                     Hello Payhippo SuperStar,
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
                     color: #333e48;
                     "
                     >
                     ${businessOwnerName && toTitleCase(businessOwnerName)}, from ${
		associationName && toTitleCase(associationName)
	} has met the association requirements.
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
                 
                  <div
                     class="padding-break"
                     style="
                  
                    
                     margin-top: 30px;
                     "
                     ></div>
               </td>
            </tr>
         </tbody>
      </table>
   </td>
</tr>
		`;
	return baseTemplate(emailBody);
};
export default associationRequirement;
