import { NextResponse } from "next/server";
import { sendEmail, StoreEmail } from "@/actions/smtp";
import { clarityProvider } from "@/providers/clarity";

export async function POST(request: Request) {
	try {
		const body = await request.json();
		const { firstName, lastName, email, companyName, phone, interest, vehicleCount, trackingType, features, region, existingCustomer } = body;

		// Track form submission attempt
		clarityProvider.trackEvent("quote_form_submit_attempt", {
			company: companyName,
			region: region,
			interest: interest,
			vehicleCount: vehicleCount,
			trackingTypes: trackingType.length,
			featuresCount: features.length,
		});

		const html = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" lang="en">
  <head>
    <meta name="viewport" content="width=device-width" />
    <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
    <meta name="x-apple-disable-message-reformatting" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="x-apple-disable-message-reformatting" />
    <meta
      name="format-detection"
      content="telephone=no,address=no,email=no,date=no,url=no" />
    <meta name="color-scheme" content="light" />
    <meta name="supported-color-schemes" content="light" />
    <!--$-->
    <style>
      @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        mso-font-alt: 'sans-serif';
        src: url(https://rsms.me/inter/font-files/Inter-Regular.woff2?v=3.19) format('woff2');
      }

      * {
        font-family: 'Inter', sans-serif;
      }
    </style>
    <style>
      blockquote,h1,h2,h3,img,li,ol,p,ul{margin-top:0;margin-bottom:0}@media only screen and (max-width:425px){.tab-row-full{width:100%!important}.tab-col-full{display:block!important;width:100%!important}.tab-pad{padding:0!important}}
    </style>
  </head>
  <body style="margin:0">
    <div
      style="display:none;overflow:hidden;line-height:1px;opacity:0;max-height:0;max-width:0"
      id="__react-email-preview">
      Confirmation Email
      <div>
         ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿
      </div>
    </div>
    <table
      align="center"
      width="100%"
      border="0"
      cellpadding="0"
      cellspacing="0"
      role="presentation"
      style="max-width:600px;min-width:300px;width:100%;margin-left:auto;margin-right:auto;padding:0.5rem">
      <tbody>
        <tr style="width:100%">
          <td>
            <p
              style="font-size:15px;line-height:26.25px;margin-bottom:16px;margin-top:16px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:#374151;margin:0 0 20px 0">
               
            </p>
            <h1
              style="margin-left:0px;margin-right:0px;margin-top:0px;margin-bottom:12px;text-align:left;color:#111827;font-size:36px;line-height:40px;font-weight:800">
              Hey There!
            </h1>
            <hr
              style="width:100%;border:none;border-top:1px solid #eaeaea;margin-top:32px;margin-bottom:32px" />
            <p
              style="font-size:15px;line-height:26.25px;margin-bottom:16px;margin-top:16px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:#374151;margin:0 0 20px 0">
              Thank you for reaching out to<strong> Rides IQ. </strong>
            </p>
            <p
              style="font-size:15px;line-height:26.25px;margin-bottom:16px;margin-top:16px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:#374151;margin:0 0 20px 0">
              Our team is currently reviewing the details you&#x27;ve shared to
              ensure we fully understand your needs. We appreciate the
              thoroughness of your submission, as it will help us provide you
              with the most appropriate solution tailored to your requirements.
            </p>
            <p
              style="font-size:15px;line-height:26.25px;margin-bottom:16px;margin-top:16px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:#374151;margin:0 0 20px 0">
              You can expect to hear back from us within the next<strong>
                2-3 business days</strong
              >
              with our initial assessment and any clarifying questions we might
              have. Should you wish to add any further information in the
              meantime, please don&#x27;t hesitate to reply to this email.
            </p>
            <p
              style="font-size:15px;line-height:26.25px;margin-bottom:16px;margin-top:16px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:#374151;margin:0 0 20px 0">
              Thank you for considering Rides IQ for your needs. We value your
              interest in our services and look forward to the possibility of
              working together.
            </p>
            <p
              style="font-size:15px;line-height:26.25px;margin-bottom:16px;margin-top:16px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:#374151;margin:0 0 20px 0">
              Best regards,
            </p>
            <hr
              style="width:100%;border:none;border-top:1px solid #eaeaea;margin-top:32px;margin-bottom:32px" />
            <h1
              style="margin-left:0px;margin-right:0px;margin-top:0px;margin-bottom:12px;text-align:left;color:#111827;font-size:36px;line-height:40px;font-weight:800">
              RIDES IQ.
            </h1>
            <table
              align="center"
              width="100%"
              border="0"
              cellpadding="0"
              cellspacing="0"
              role="presentation"
              style="max-width:100%;text-align:left;margin-bottom:20px">
              <tbody>
                <tr style="width:100%">
                  <td>
                    <a
                      href="https://ridesiq.com/unsub"
                      style="line-height:100%;text-decoration:none;display:inline-block;max-width:100%;mso-padding-alt:0px;color:#ffffff;background-color:#00affc;border-color:#00affc;border-width:2px;border-style:solid;font-size:14px;font-weight:500;border-radius:6px;padding:8px 24px 8px 24px"
                      target="_blank"
                      ><span
                        ><!--[if mso]><i style="mso-font-width:400%;mso-text-raise:12" hidden>&#8202;&#8202;&#8202;</i><![endif]--></span
                      ><span
                        style="max-width:100%;display:inline-block;line-height:120%;mso-padding-alt:0px;mso-text-raise:6px"
                        >unsubscribe</span
                      ><span
                        ><!--[if mso]><i style="mso-font-width:400%" hidden>&#8202;&#8202;&#8202;&#8203;</i><![endif]--></span
                      ></a
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
    <!--/$-->
  </body>
</html>`;

		// Format the text for RidesIQ team email
		const text = `
	Quote Request Details:\n
	-------------------\n
	Name: ${firstName} ${lastName}\n
	Email: ${email}\n
	Company: ${companyName}\n
	Phone: ${phone}\n
	Region: ${region}\n
	Existing Customer: ${existingCustomer}\n

	Fleet Information:\n
	----------------\n
	Interest: ${interest} \n
	Vehicle Count: ${vehicleCount} \n
	Vehicle Types: ${JSON.stringify(trackingType)} \n
	Required Features: ${JSON.stringify(features)} \n
		`;

		// Create HTML template for RidesIQ team email
		const teamEmailHtml = `
		<html>
		<head>
		  <style>
			body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
			.container { max-width: 600px; margin: 0 auto; padding: 20px; }
			.section { margin-bottom: 20px; }
			.section-title { 
			  background-color: #678FCA; 
			  color: white; 
			  padding: 8px 16px; 
			  border-radius: 4px;
			  margin-bottom: 12px;
			}
			.info-row {
			  display: flex;
			  margin: 8px 0;
			  border-bottom: 1px solid #eee;
			  padding-bottom: 8px;
			}
			.label { font-weight: bold; width: 150px; }
			.value { flex: 1; }
			.list-item { margin: 4px 0 4px 20px; }
		  </style>
		</head>
		<body>
		  <div class="container">
			<h2>New Quote Request</h2>
			
			<div class="section">
			  <div class="section-title">Contact Information</div>
			  <div class="info-row">
				<div class="label">Name:</div>
				<div class="value">${firstName} ${lastName}</div>
			  </div>
			  <div class="info-row">
				<div class="label">Email:</div>
				<div class="value">${email}</div>
			  </div>
			  <div class="info-row">
				<div class="label">Company:</div>
				<div class="value">${companyName}</div>
			  </div>
			  <div class="info-row">
				<div class="label">Phone:</div>
				<div class="value">${phone}</div>
			  </div>
			  <div class="info-row">
				<div class="label">Region:</div>
				<div class="value">${region}</div>
			  </div>
			  <div class="info-row">
				<div class="label">Existing Customer:</div>
				<div class="value">${existingCustomer}</div>
			  </div>
			</div>

			<div class="section">
			  <div class="section-title">Fleet Information</div>
			  <div class="info-row">
				<div class="label">Interest:</div>
				<div class="value">${interest}</div>
			  </div>
			  <div class="info-row">
				<div class="label">Vehicle Count:</div>
				<div class="value">${vehicleCount}</div>
			  </div>
			  <div class="info-row">
				<div class="label">Vehicle Types:</div>
				<div class="value">
				  <ul>
					${trackingType.map((type: string) => `<li class="list-item">${type}</li>`).join("")}
				  </ul>
				</div>
			  </div>
			  <div class="info-row">
				<div class="label">Required Features:</div>
				<div class="value">
				  <ul>
					${features.map((feature: string) => `<li class="list-item">${feature}</li>`).join("")}
				  </ul>
				</div>
			  </div>
			</div>
		  </div>
		</body>
		</html>`;

		// Send to RidesIQ team
		const StoreEmailResult = await StoreEmail({
			to: [email],
			from: process.env.AWS_SES_VERIFIED_EMAIL!,
			subject: `Quote Request from ${firstName} ${lastName}`,
			name: `${firstName} ${lastName}`,
			text: text,
			html: teamEmailHtml,
		});

		if (!StoreEmailResult.success) {
			clarityProvider.trackEvent("quote_form_error", {
				error: "store_email_failed",
				company: companyName,
			});
			return NextResponse.json({ error: "Failed to store email" }, { status: 500 });
		}

		// Send confirmation to client with original template
		const SendToContacterResult = await sendEmail({
			to: [email],
			from: process.env.AWS_SES_VERIFIED_EMAIL!,
			subject: "Thank you for contacting RidesIQ",
			html,
			text: "Thank you for contacting RidesIQ. We'll get back to you soon!",
		});

		if (!SendToContacterResult.success) {
			clarityProvider.trackEvent("quote_form_error", {
				error: "send_confirmation_failed",
				company: companyName,
			});
			return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
		}

		// Track successful submission
		clarityProvider.trackEvent("quote_form_success", {
			company: companyName,
			region: region,
			interest: interest,
		});

		return NextResponse.json({ success: true, messageId: SendToContacterResult.messageId });
	} catch (error) {
		// Track error
		clarityProvider.trackEvent("quote_form_error", {
			error: String(error),
			type: "unexpected_error",
		});
		console.error("Error in email API route:", error);
		return NextResponse.json({ error: "Internal server error" }, { status: 500 });
	}
}
