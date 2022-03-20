import baseTemplate from './base';

import { toTitleCase } from '../../utils';

type StatementReminder = {
	businessName: string;
};
const statementReminder = ({ businessName }: StatementReminder): string => {
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
				<table
					align="center"
					border="0"
					cellpadding="0"
					cellspacing="0"
					style="width: 100%"
				>
					<tbody
					style="text-align:center"
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
										font-family: 'Inter', 'Avenir Next',
											'Avenir',
											'Helvetica',
											sans-serif !important;
										color: #333e48;
										font-size: 1.5rem;
										font-weight: 500;
										font-style: normal;
									"
								>
									Dear
									<!---->
									${businessName && toTitleCase(businessName)},
								</h2>
								<p
									style="
										margin-bottom: 15px;
										font-family: 'Avenir Next',
											'Avenir',
											'Helvetica',
											sans-serif !important;
										font-weight: 400;
										font-size: 16px;
										line-height: 1.5;
									"
								>Kindly prepare your bank statement for your next loan application as your present loan is due in 3 days. This is to ensure the fast disbursal of your next loan
								</p>
								
							</td>
						</tr>
					</tbody>
				</table>
			</td>
		</tr>
		`;
	return baseTemplate(emailBody);
};
export default statementReminder;
