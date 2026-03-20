import { Client } from "@microsoft/microsoft-graph-client";

let connectionSettings: any;

async function getAccessToken() {
  if (
    connectionSettings &&
    connectionSettings.settings.expires_at &&
    new Date(connectionSettings.settings.expires_at).getTime() > Date.now()
  ) {
    return connectionSettings.settings.access_token;
  }

  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
  const xReplitToken = process.env.REPL_IDENTITY
    ? "repl " + process.env.REPL_IDENTITY
    : process.env.WEB_REPL_RENEWAL
      ? "depl " + process.env.WEB_REPL_RENEWAL
      : null;

  if (!xReplitToken) {
    throw new Error("X_REPLIT_TOKEN not found for repl/depl");
  }

  connectionSettings = await fetch(
    "https://" +
      hostname +
      "/api/v2/connection?include_secrets=true&connector_names=outlook",
    {
      headers: {
        Accept: "application/json",
        X_REPLIT_TOKEN: xReplitToken,
      },
    }
  )
    .then((res) => res.json())
    .then((data) => data.items?.[0]);

  const accessToken =
    connectionSettings?.settings?.access_token ||
    connectionSettings.settings?.oauth?.credentials?.access_token;

  if (!connectionSettings || !accessToken) {
    throw new Error("Outlook not connected");
  }
  return accessToken;
}

async function getOutlookClient() {
  const accessToken = await getAccessToken();

  return Client.initWithMiddleware({
    authProvider: {
      getAccessToken: async () => accessToken,
    },
  });
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

interface InquiryEmailData {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  requirements: string;
  createdAt: Date;
  sourceUrl?: string;
  userAgent?: string;
  ipAddress?: string;
}

export async function sendInternalNotification(
  data: InquiryEmailData
): Promise<void> {
  const client = await getOutlookClient();

  const timestamp = data.createdAt.toISOString();
  const londonTime = data.createdAt.toLocaleString("en-GB", {
    timeZone: "Europe/London",
  });

  const subject = `New enquiry — Central Technologies — ${data.name} — ${timestamp}`;

  const body = `
New Enquiry Received
====================

Full Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || "Not provided"}

Requirements/Message:
${data.requirements}

---
Metadata
---
Enquiry ID: ${data.id}
Timestamp (UTC): ${timestamp}
Timestamp (London): ${londonTime}
Source URL: ${data.sourceUrl || "Not available"}
IP Address: ${data.ipAddress || "Not available"}
User Agent: ${data.userAgent || "Not available"}
  `.trim();

  await client.api("/me/sendMail").post({
    message: {
      subject,
      body: {
        contentType: "Text",
        content: body,
      },
      toRecipients: [
        {
          emailAddress: {
            address: "info@centraltechsupport.co.uk",
          },
        },
      ],
    },
  });
}

export async function sendCustomerAcknowledgement(
  data: InquiryEmailData
): Promise<void> {
  const client = await getOutlookClient();

  const subject = "We've received your enquiry — Central Technologies";

  const htmlBody = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f5f5f5;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td style="padding: 40px 20px;">
        <table role="presentation" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 4px;">
          <tr>
            <td style="padding: 40px 40px 30px 40px; text-align: center; border-bottom: 1px solid #e5e5e5;">
              <h1 style="margin: 0; font-size: 24px; font-weight: 400; color: #333333; letter-spacing: 1px;">Central Technologies</h1>
            </td>
          </tr>
          <tr>
            <td style="padding: 40px;">
              <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.6; color: #333333;">
                Thank you for reaching out. We have received your enquiry and will respond within one working day.
              </p>
              
              <div style="background-color: #fafafa; border-radius: 4px; padding: 24px; margin: 30px 0;">
                <h2 style="margin: 0 0 16px 0; font-size: 14px; font-weight: 600; color: #666666; text-transform: uppercase; letter-spacing: 0.5px;">Summary of your enquiry</h2>
                <table role="presentation" style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; font-size: 14px; color: #666666; vertical-align: top; width: 100px;">Name:</td>
                    <td style="padding: 8px 0; font-size: 14px; color: #333333;">${escapeHtml(data.name)}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-size: 14px; color: #666666; vertical-align: top;">Email:</td>
                    <td style="padding: 8px 0; font-size: 14px; color: #333333;">${escapeHtml(data.email)}</td>
                  </tr>
                  ${
                    data.phone
                      ? `
                  <tr>
                    <td style="padding: 8px 0; font-size: 14px; color: #666666; vertical-align: top;">Phone:</td>
                    <td style="padding: 8px 0; font-size: 14px; color: #333333;">${escapeHtml(data.phone)}</td>
                  </tr>
                  `
                      : ""
                  }
                  <tr>
                    <td style="padding: 8px 0; font-size: 14px; color: #666666; vertical-align: top;">Message:</td>
                    <td style="padding: 8px 0; font-size: 14px; color: #333333; white-space: pre-wrap;">${escapeHtml(data.requirements)}</td>
                  </tr>
                </table>
              </div>
              
              <p style="margin: 20px 0 0 0; font-size: 14px; line-height: 1.6; color: #666666;">
                All communications are handled with complete discretion.
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding: 30px 40px; border-top: 1px solid #e5e5e5; text-align: center;">
              <p style="margin: 0 0 10px 0; font-size: 13px; color: #999999;">
                If you need to add any details, simply reply to this email.
              </p>
              <p style="margin: 0; font-size: 13px; color: #999999;">
                <a href="https://centraltechnologies.london/" style="color: #666666; text-decoration: none;">centraltechnologies.london</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();

  const plainTextBody = `
Central Technologies
====================

Thank you for reaching out. We have received your enquiry and will respond within one working day.

Summary of your enquiry
-----------------------
Name: ${data.name}
Email: ${data.email}
${data.phone ? `Phone: ${data.phone}` : ""}
Message: ${data.requirements}

All communications are handled with complete discretion.

If you need to add any details, simply reply to this email.

centraltechnologies.london
  `.trim();

  await client.api("/me/sendMail").post({
    message: {
      subject,
      body: {
        contentType: "HTML",
        content: htmlBody,
      },
      toRecipients: [
        {
          emailAddress: {
            address: data.email,
          },
        },
      ],
    },
  });
}

export async function sendTestEmail(toEmail: string): Promise<void> {
  const client = await getOutlookClient();

  await client.api("/me/sendMail").post({
    message: {
      subject: "Test Email — Central Technologies",
      body: {
        contentType: "Text",
        content:
          "This is a test email from Central Technologies website. If you received this, the email integration is working correctly.",
      },
      toRecipients: [
        {
          emailAddress: {
            address: toEmail,
          },
        },
      ],
    },
  });
}
