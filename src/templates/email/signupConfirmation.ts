import baseTemplate from './base';

import { toTitleCase } from '../../utils';

type SignUpConfirmation = {
	businessOwnerName: string;
};
const signupConfirmation = ({ businessOwnerName }: SignUpConfirmation): string => {
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
			style="text-align:center;"
			>
				<tr>
					<td
						class="email-content-block copy"
						style="
							font-family: 'Avenir Next',
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
								font-family: 'Inter,', 'Avenir Next',
									'Avenir',
									'Helvetica',
									sans-serif !important;
								color: #333e48;
								font-size: 1.3rem;
								font-weight: 500;
								font-style: normal;
							"
						>
						Welcome aboard Payhippo,
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
						${businessOwnerName && toTitleCase(businessOwnerName)}, your account has
							been activated. To
							get your business
							the credit required
							to take it to the
							next level, please
							click on the button
							below.
						</p>
						<p
							align="center"
							class="btn btn-primary"
						>
							<a
								href=${process.env._APP_URL}
								target="_blank"
								>Sign In</a
							>
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
								color: #333e48;
							"
						>
							Payhippo unlocks
							credit by removing
							stringent collateral
							requirements. We do
							this with our
							data-driven credit
							scoring system to
							provide same-day
							ﬁnancing for SMEs.
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
						<p
							class="signout light-type"
							style="
							margin-bottom:15px;font-family:'Inter','Avenir Next','Avenir','Helvetica',sans-serif!important;font-weight:300;font-size:15px;line-height:1.5;color: #1123AB; text-align: left
							"
						>
							Important: No processing fee(₦0) is required to sign up with us.
						</p>
		
					
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
					</td>
				</tr>
			</tbody>
		</table>
	</td>
</tr>
`;
	return baseTemplate(emailBody);
};
export default signupConfirmation;
