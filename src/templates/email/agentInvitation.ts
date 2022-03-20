import baseTemplate from './base';

import { toTitleCase } from '../../utils';

type AgentInvitation = {
	name: string;
	url: string;
};

const agentInvitationTemplate = ({ name, url }: AgentInvitation): string => {
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
				class="email-content bg-white"

			>
				<table
					align="center"
					border="0"
					cellpadding="0"
					cellspacing="0"
					style="width: 100%"
				>
					<tbody>
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
								class="center"
									style="
										margin: 0 0
											0.5rem 0;
										line-height: 1.25;
										color: #333e48;
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
								class="center"
									style="
										margin-bottom: 15px;
										font-family: 'Inter', 'Avenir Next', 'Avenir', 'Helvetica',
					  					sans-serif !important;
										font-weight: 400;
										font-size: 16px;
										line-height: 1.5;
									"
								>
									You have been invited to the Payhippo Agent program, please
									click on the button
									below to officially
									get started.
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
export default agentInvitationTemplate;
