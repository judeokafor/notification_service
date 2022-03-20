import baseTemplate from './base';
import { toTitleCase } from '../../utils';

type ReferenceAssociation = {
	associationMemberName: string;
	businessOwnerName: string;
	businessName: string;
	associationName: string;
	referenceUrl: string;
};
const referenceAssociation = (props: ReferenceAssociation): string => {
	const {
		associationMemberName,
		businessOwnerName,
		businessName,
		associationName,
		referenceUrl,
	} = props;
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
					class="center"
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
									Hello
									<!---->
									${associationMemberName && toTitleCase(associationMemberName)},
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
									${businessOwnerName && toTitleCase(businessOwnerName)}
									from ${businessName && toTitleCase(businessName)} is part of your association ${
		associationName && toTitleCase(associationName)
	}
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
                                We will like you to tell us about their personality, credit worthiness and contributions towards your association growth.
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
								Have questions about the Payhippo? We’d love to help. </br>
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
										font-family: 'Inter', 'Avenir Next',
											'Avenir',
											'Helvetica',
											sans-serif !important;
										margin-top: 50px;
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

export default referenceAssociation;
