import { NextResponse } from "next/server";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;
const TARGET_EMAIL = "expgroupbali@gmail.com";
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "EXP Digital Solution <onboarding@resend.dev>";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, companyName, email, phone, service, message, captchaToken } = body;

    // 1. Basic Field Validation
    if (!name || !companyName || !email) {
      return NextResponse.json(
        { success: false, error: "Please fill in all required fields (Name, Company, Email)." },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: "Invalid email address format." },
        { status: 400 }
      );
    }

    // 2. Google reCAPTCHA Verification (if secret key is configured)
    if (RECAPTCHA_SECRET_KEY && captchaToken) {
      try {
        const verifyRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: `secret=${encodeURIComponent(RECAPTCHA_SECRET_KEY)}&response=${encodeURIComponent(captchaToken)}`,
        });
        const verifyData = await verifyRes.json();
        if (!verifyData.success) {
          return NextResponse.json(
            { success: false, error: "Google reCAPTCHA verification failed. Please try again." },
            { status: 400 }
          );
        }
      } catch (captchaErr) {
        console.error("reCAPTCHA verification error:", captchaErr);
      }
    }

    // 3. Send Email via Resend
    if (!RESEND_API_KEY) {
      console.warn(
        "RESEND_API_KEY is not set in environment variables. Email simulation logged:",
        { name, companyName, email, phone, service, message }
      );
      return NextResponse.json({
        success: true,
        simulated: true,
        message: "Inquiry processed (Simulated mode: Set RESEND_API_KEY in .env.local to dispatch live emails).",
      });
    }

    const resend = new Resend(RESEND_API_KEY);

    const now = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Makassar", // WITA (Bali)
      dateStyle: "full",
      timeStyle: "medium",
    });

    const emailSubject = `[New Project Lead] ${companyName} — ${service} (${name})`;

    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Project Inquiry</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0c0c12; color: #ededf5; margin: 0; padding: 24px; }
    .container { max-width: 600px; margin: 0 auto; background: #12121a; border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; overflow: hidden; }
    .header { background: linear-gradient(135deg, #181824, #0f0f17); padding: 28px 24px; border-bottom: 2px solid #F59E0B; text-align: left; }
    .header h2 { margin: 0 0 6px 0; color: #ffffff; font-size: 20px; letter-spacing: -0.02em; }
    .header p { margin: 0; color: #9898b0; font-size: 13px; }
    .content { padding: 28px 24px; }
    .section-title { font-size: 13px; text-transform: uppercase; letter-spacing: 0.08em; color: #F59E0B; font-weight: 700; margin-bottom: 12px; }
    .info-table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
    .info-table td { padding: 10px 12px; border-bottom: 1px solid rgba(255,255,255,0.06); font-size: 14px; }
    .info-table td.label { width: 35%; color: #9898b0; font-weight: 500; }
    .info-table td.value { width: 65%; color: #ffffff; font-weight: 600; }
    .info-table td.value a { color: #FCD34D; text-decoration: none; }
    .message-box { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; padding: 16px; margin-bottom: 24px; }
    .message-box p { margin: 0; color: #ededf5; font-size: 14px; line-height: 1.6; white-space: pre-wrap; }
    .btn-action { display: inline-block; background: #F59E0B; color: #050507; text-decoration: none; font-weight: 700; font-size: 13px; padding: 10px 18px; border-radius: 6px; margin-right: 10px; }
    .footer { background: #0a0a0f; padding: 18px 24px; border-top: 1px solid rgba(255,255,255,0.06); text-align: center; color: #6b7280; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>🚀 New Lead: Project Consultation Inquiry</h2>
      <p>Received on ${now} (WITA Bali)</p>
    </div>

    <div class="content">
      <div class="section-title">Client Information</div>
      <table class="info-table">
        <tr>
          <td class="label">Full Name / PIC</td>
          <td class="value">${name}</td>
        </tr>
        <tr>
          <td class="label">Company / Business</td>
          <td class="value">${companyName}</td>
        </tr>
        <tr>
          <td class="label">Email Address</td>
          <td class="value"><a href="mailto:${email}">${email}</a></td>
        </tr>
        <tr>
          <td class="label">Phone / WhatsApp</td>
          <td class="value">${phone ? `<a href="https://wa.me/${phone.replace(/[^0-9]/g, "")}">${phone}</a>` : "Not provided"}</td>
        </tr>
        <tr>
          <td class="label">Service Required</td>
          <td class="value" style="color: #FCD34D;">${service}</td>
        </tr>
      </table>

      <div class="section-title">Project Scope & Details</div>
      <div class="message-box">
        <p>${message ? message : "No additional description provided."}</p>
      </div>

      <div style="margin-top: 20px;">
        <a href="mailto:${email}?subject=Re:%20EXP%20Digital%20Solution%20Consultation%20for%20${encodeURIComponent(companyName)}" class="btn-action">
          ✉️ Reply to ${name}
        </a>
        ${
          phone
            ? `<a href="https://wa.me/${phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                `Hello ${name} from ${companyName}, thank you for reaching out to EXP Digital Solution. We are ready to discuss your ${service} requirements for your business.`
              )}" class="btn-action" style="background: #25D366; color: #ffffff;">
                💬 Chat on WhatsApp
              </a>`
            : ""
        }
      </div>
    </div>

    <div class="footer">
      This notification was automatically sent from the <strong>EXP Digital Solution</strong> website contact form.
    </div>
  </div>
</body>
</html>
`;

    const sendResult = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TARGET_EMAIL],
      reply_to: email,
      subject: emailSubject,
      html: emailHtml,
    });

    if (sendResult.error) {
      console.error("Resend API Error:", sendResult.error);
      return NextResponse.json(
        { success: false, error: sendResult.error.message || "Failed to send email via Resend." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      id: sendResult.data?.id,
      message: "Inquiry sent successfully to sales team.",
    });
  } catch (error) {
    console.error("Error in /api/contact:", error);
    return NextResponse.json(
      { success: false, error: error.message || "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
