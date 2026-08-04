import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "mrujwalkulal14@gmail.com";
const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL || "Portfolio <onboarding@resend.dev>";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildEmailHtml({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");
  const receivedAt = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "medium",
    timeStyle: "short",
  });

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>New portfolio enquiry</title>
</head>
<body style="margin:0;padding:0;background:#f1f0ec;font-family:Arial,Helvetica,sans-serif;color:#0b0b0b;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f1f0ec;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:560px;background:#fbfaf7;border:1px solid rgba(11,11,11,0.12);">
          <tr>
            <td style="background:#0b0b0b;padding:20px 24px;">
              <p style="margin:0;font-size:11px;letter-spacing:0.16em;text-transform:uppercase;color:#e8ff2b;">
                Ujwal Kulal · Portfolio
              </p>
              <h1 style="margin:8px 0 0;font-size:22px;line-height:1.25;color:#f1f0ec;font-weight:700;">
                New enquiry received
              </h1>
            </td>
          </tr>
          <tr>
            <td style="padding:24px;">
              <p style="margin:0 0 18px;font-size:14px;line-height:1.6;color:rgba(11,11,11,0.65);">
                Someone reached out through your portfolio contact form.
              </p>

              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border:1px solid rgba(11,11,11,0.12);">
                <tr>
                  <td style="padding:14px 16px;border-bottom:1px solid rgba(11,11,11,0.12);">
                    <p style="margin:0;font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:rgba(11,11,11,0.5);">Name</p>
                    <p style="margin:6px 0 0;font-size:15px;font-weight:600;">${safeName}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:14px 16px;border-bottom:1px solid rgba(11,11,11,0.12);">
                    <p style="margin:0;font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:rgba(11,11,11,0.5);">Email</p>
                    <p style="margin:6px 0 0;font-size:15px;">
                      <a href="mailto:${safeEmail}" style="color:#0b0b0b;text-decoration:underline;">${safeEmail}</a>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:14px 16px;">
                    <p style="margin:0;font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:rgba(11,11,11,0.5);">Message</p>
                    <p style="margin:10px 0 0;font-size:15px;line-height:1.65;">${safeMessage}</p>
                  </td>
                </tr>
              </table>

              <p style="margin:20px 0 0;">
                <a href="mailto:${safeEmail}?subject=${encodeURIComponent(`Re: Portfolio enquiry from ${name}`)}"
                   style="display:inline-block;background:#e8ff2b;color:#0b0b0b;text-decoration:none;padding:12px 18px;font-size:12px;letter-spacing:0.12em;text-transform:uppercase;font-weight:700;">
                  Reply to ${safeName}
                </a>
              </p>

              <p style="margin:22px 0 0;font-size:12px;color:rgba(11,11,11,0.45);">
                Received ${escapeHtml(receivedAt)} (IST)
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:14px 24px 20px;border-top:1px solid rgba(11,11,11,0.12);">
              <p style="margin:0;font-size:11px;color:rgba(11,11,11,0.4);">
                Reply goes to the sender. This message was sent from ujwal_portfolio contact form.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Email is not configured yet." },
        { status: 503 }
      );
    }

    const body = await request.json();
    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const message = String(body.message || "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (message.length > 5000) {
      return NextResponse.json(
        { error: "Message is too long." },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: email,
      subject: `Portfolio enquiry — ${name}`,
      text: [
        "New portfolio enquiry",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        "",
        "Message:",
        message,
        "",
        "—",
        "Reply directly to this email to respond to the sender.",
      ].join("\n"),
      html: buildEmailHtml({ name, email, message }),
    });

    if (error) {
      console.error("Resend error:", error);
      const msg =
        typeof error === "object" &&
        error &&
        "message" in error &&
        typeof (error as { message?: string }).message === "string"
          ? (error as { message: string }).message
          : "";
      const isTestLimit = /only send testing emails/i.test(msg);
      return NextResponse.json(
        {
          error: isTestLimit
            ? "Resend test mode can only deliver to your Resend account email until you verify a domain. Sign up Resend with mrujwalkulal14@gmail.com, or verify a domain."
            : "Could not send message. Try again later.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
