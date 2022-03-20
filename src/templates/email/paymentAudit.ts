import baseTemplate from './base';

const paymentAudit = ({ date }: { date: string }): string => {
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
					<h1
						style="
							margin: 0 0
								0.9rem 0;
							line-height: 1.25;
							font-family:'Inter','Avenir Next',
								'Avenir',
								'Helvetica',
								sans-serif !important;
							color: #333e48;
							font-size: 1.3rem;
							font-weight: 500;
							font-style: normal;
						"
					>
						Hello Engineering,
					</h1>
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
							font-size: 1.3rem;
							font-weight: 500;
							font-style: normal;
						"
					>
						Attached below,
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
				>Payment Audit for, ${date}.
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
export default paymentAudit;
