import { header } from './header';
import { footer } from './footer';
const baseTemplate = (emailBody: string): string =>
	`<!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8" />
            <title>Hassle-Free SME Financing</title>
        </head>
    
        <body>
            <head>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="viewport" content="width=device-width" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap"
		        rel="preload" as="style" onload="this.onload=null;this.rel='stylesheet'">
                <title>Hassle-Free SME Financing</title>
                <style type="text/css">
                body {
                    font-family: 'Inter', 'Avenir Next', 'Avenir', 'Helvetica', sans-serif !important;
                }

               table, td, p, span, h2, h3, h4, h5, a {
                    font-family: 'Inter', 'Avenir Next', 'Avenir', 'Helvetica', sans-serif !important;
                }
                
                .table-main {
                    background-color: #f2f2f2;
                    height: 100%;
                    padding-bottom: 25px;
                    padding-left: 0;
                    padding-right: 0;
                    padding-top: 25px;
                    width: 100%;
                }
                
                .hero-image {
                    width: 100%;
                    max-width: 30% !important;
                    position: relative;
                    display: block;
                    margin-left: auto;
                    margin-right: auto;
                    height: auto;
                }
                
                .text-center {
                    text-align: center;
                }
                
                .bg-white {
                    background-color: #ffffff
                }
                
                table[class='body'] {
                    padding-bottom: 25px !important;
                    padding-top: 25px !important;
                    font-family: 'Inter';
                }
                
                .email-logo-masthead {
                    display: inline !important;
                    height: 35px !important;
                    margin-left: 0 !important;
                    margin-right: 0 !important;
                }
                
                .signout {
                    text-align: center;
                }
                
                .center {
                    text-align: left;
                }
                
                .email-content-block {
                    padding-left: 25px !important;
                    padding-right: 25px !important;
                    width: 100%;
                    text-align: left!important;
                }
                
                .email-social-bar-copy p,
                .email-social-bar-copy a,
                .email-social-bar-copy .ios-no-link {
                    color: #011431 !important;
                    text-decoration: none !important;
                }
                
                .invoice-box {
                    max-width: 800px;
                    margin: auto;
                    padding: 0px 30px;
                    font-size: 16px;
                    line-height: 24px;
                    font-family: 'Inter', 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
                    color: #555;
                }
                
                .watermark {
                    color: transparent;
                    visibility: hidden;
                    display: none;
                    opacity: 0;
                    height: 0;
                    width: 0;
                    font-size: 0;
                }
                
                .invoice-box table {
                    width: 100%;
                    line-height: inherit;
                    text-align: left;
                }
                
                .invoice-box table td {
                    padding: 5px;
                    vertical-align: top;
                }
                
                .invoice-box table tr td:nth-child(2) {
                    text-align: right;
                }
                
                .invoice-box table tr.top table td {
                    padding-bottom: 20px;
                }
                
                .invoice-box table tr.top table td.title {
                    font-size: 45px;
                    line-height: 45px;
                    color: #333;
                }
                
                .invoice-box table tr.information table td {
                    padding-bottom: 40px;
                }
                
                .invoice-box table tr.heading td {
                    background: rgba(10, 25, 142, 0.14);
                    border-bottom: 1px solid #ddd;
                    font-weight: bold;
                    color: #011431;
                }
                
                .invoice-box table tr.details td {
                    padding-bottom: 20px;
                }
                
                .invoice-box table tr.item td {
                    border-bottom: 1px solid #eee;
                }
                
                .invoice-box table tr.item.last td {
                    border-bottom: none;
                }
                
                .invoice-box table tr.total td:nth-child(2) {
                    border-top: 2px solid #eee;
                    font-weight: bold;
                }
                
                .invoice-box table tr.top table td {
                    width: 100%;
                    display: block;
                    text-align: center;
                }
                
                .invoice-box table tr.information table td {
                    width: 100%;
                    display: block;
                    text-align: center;
                }
                /** RTL **/
                
                .rtl {
                    direction: rtl;
                    font-family: 'Inter', Tahoma, 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
                }
                
                .rtl table {
                    text-align: right;
                }
                
                .rtl table tr td:nth-child(2) {
                    text-align: left;
                }
                
                .btn a {
                    padding: 10px 20px;
                    border: 1px solid #1123AB;
                    border-radius: 4px;
                    background-color: #1123AB;
                    color: white;
                    text-decoration: none;
                    display: block;
                    max-width: 100px;
                }
                
                .payhippo_link {
                    text-decoration: none;
                }
                
                .btn {
                    box-sizing: border-box;
                    width: 100%;
                }
                
                .btn>tbody>tr>td {
                    padding-bottom: 15px;
                }
                
                .btn table {
                    width: auto;
                }
                
                .btn table td {
                    background-color: #ffffff;
                    border-radius: 5px;
                    text-align: center;
                }
                
                .btn a {
                    background-color: #1123AB;
                    border: solid 1px #1123AB;
                    border-radius: 5px;
                    color: #ffffff;
                    cursor: pointer;
                    display: inline-block;
                    font-size: 14px;
                    font-weight: bold;
                    margin: 0;
                    padding: 10px 30px;
                    text-decoration: none;
                    text-transform: capitalize;
                }
                
                .btn-primary table td {
                    background-color: #1123AB;
                }
                
                .btn-primary a {
                    background-color: #1123AB;
                    border-color: #1123AB;
                    color: #ffffff;
                }
            </style>
                <!--[if mso]><style type=”text/css”>span,td,table,div,p{font-family:Helvetica,sans-serif}</style><![endif]-->
            </head>
    
            <body style="background-color: #f2f2f2; height: 100%; margin: 0; padding: 0">
                <span
                    class="watermark copy"
                    >Seamless financing for small to medium sized African businesses.</span
                >
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/payhippo.appspot.com/o/website-assets%2FPayhippoLogo.png?alt=media&token=08c78510-b7a8-4dd1-a24e-12b051c2d334"
                    style="border: 0; width: 1px; height: 1px"
                    width="1"
                    height="1"
                />
                <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="body table-main"  
                >
                    <tbody>
                        <tr>
                            <td>
                                <table align="center" border="0" cellpadding="0" cellspacing="0">
                                    <tbody
                                    style="background-color: white;"
                                    >
                                        <tr>
                                            <td width="550">
                                                <table
                                                    align="center"
                                                    border="0"
                                                    cellpadding="0"
                                                    cellspacing="0"
                                                    style="width: 100%"
                                                >
                                                    <tbody>
                                                       ${header}
                                                        <!-- individual template -->
                                                        ${emailBody}
                                                        <tr>
														${footer}
													    </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </body>
        </body>
    </html>
    `;

export default baseTemplate;
