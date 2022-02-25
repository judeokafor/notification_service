import baseTemplate from './base';

import { toTitleCase } from '../../utils';

type RequestProps = { name: string; isReturning: boolean };
const request = ({ name, isReturning }: RequestProps): string => {
	const emailBody = `
	<tr>
    <td>
    <div class="text-center">
        <img
            class="hero-image"
            src="https://firebasestorage.googleapis.com/v0/b/payhippo.appspot.com/o/email%2Fgrowth.png?alt=media&token=c11d029a-7f44-4b03-bf9e-e025808aadbd"
        />
    </div>
    </td>
</tr>
<tr>
	<td class="email-content" style="background-color: #ffffff">
	  <tr>
		<td>
		  <table
			align="center"
			border="0"
			cellpadding="0"
			cellspacing="0"
			style="width: 100%"
		  >
			<tbody style="text-align: center">
			  <tr>
				<td
				  class="email-content-block copy"
				  style="
					font-family: 'Inter', 'Avenir Next', 'Avenir', 'Helvetica',
					  sans-serif !important;
					padding-left: 25px;
					padding-right: 25px;
					padding-top: 30px;
				  "
				>
				  <h2
					style="
					  margin: 0 0 0.3rem 0;
					  line-height: 1.25;
					  font-family: 'Inter', 'Avenir Next', 'Avenir', 'Helvetica',
						sans-serif !important;
					  color: #011431;
					  font-size: 1.5rem;
					  font-weight: 500;
					  font-style: normal;
					"
				  >
                  Hello ${name && toTitleCase(name)},
					<!---->
				  </h2>
				  <p
					style="
					  margin-bottom: 1.5rem;
					  margin-top: 0.4rem;
					  font-family: 'Inter', 'Avenir Next', 'Avenir', 'Helvetica',
						sans-serif !important;
					  font-weight: 400;
					  font-size: 16px;
					  line-height: 1.5;
					  color: #011431;
					"
				  >
                  We are excited to ${isReturning ? 'continue providing' : 'provide'} 
                  your small business with the funds it needs to grow.
                  Please click on the button below to officially get the process started.
				  </p>
				</td>
			  </tr>
			</tbody>
		  </table>
		</td>
	  </tr>
  
	  <tr>
		<td>
		  <div style="text-align: center">
			<p align="center" class="btn btn-primary">
			  <a href=${process.env._APP_URL} target="_blank">Get Started</a>
			</p>
		  </div>
		</td>
	  </tr>
	  <tr>
		<td>
		  <div
			class="padding-break"
			style="
			  font-family: 'Inter', 'Avenir Next', 'Avenir', 'Helvetica',
				sans-serif !important;
			  margin-top: 30px;
			"
		  ></div>
		</td>
	  </tr>
	  <!------------- Body Section ------------->
  
	  <!------------- End of Body Section ------------->
	  <!------------- Bottom Section ------------->
  
	  <!------------- End of Bottom Section ------------->
	</td>
  </tr>
	`;
	return baseTemplate(emailBody);
};
export default request;
