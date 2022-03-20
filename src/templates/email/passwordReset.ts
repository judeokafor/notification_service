import baseTemplate from './base';

import { toTitleCase } from '../../utils';

type PasswordReset = {
	firstName: string;
	lastName: string;
	email: string;
	url: string;
};

const passwordReset = (props: PasswordReset): string => {
	const { firstName, lastName, email, url } = props;

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
									Hello
									<!---->
									${firstName && toTitleCase(firstName)} ${lastName && toTitleCase(lastName)},
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
                                    For security sake, password reset is requested every 3 months.
                                    Please click to reset your Payhippo password for your ${email} account.
								</p>
								<p
									align="center"
									class="btn btn-primary"
								>
									<a
										href="${url}"
										target="_blank"
										>Reset Password</a
									>
								</p>

								<p
									style="
										margin-bottom: 15px;
										font-family:'Inter' 'Avenir Next',
											'Avenir',
											'Helvetica',
											sans-serif !important;
										font-weight: 400;
										font-size: 16px;
										line-height: 1.5;
										color: #333e48;
									"
								>
									Cheers.
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
export default passwordReset;
