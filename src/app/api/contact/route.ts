import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, subject, message, selectedPlan } = body;

    // 1. Validation
    if (!firstName || typeof firstName !== "string" || firstName.trim() === "") {
      return NextResponse.json(
        { success: false, error: "First name is required." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, error: "A valid email address is required." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 5) {
      return NextResponse.json(
        { success: false, error: "Message must be at least 5 characters long." },
        { status: 400 }
      );
    }

    const leadData = {
      name: `${firstName.trim()} ${lastName ? lastName.trim() : ""}`.trim(),
      email: email.trim(),
      phone: phone && phone.trim() ? phone.trim() : "Not provided",
      subject: subject ? subject.trim() : (selectedPlan || "General Portfolio Inquiry"),
      message: message.trim(),
      timestamp: new Date().toLocaleString("en-PK", { timeZone: "Asia/Karachi" }),
    };

    // 2. Server Console Log (Backup Tracking)
    console.log("=== NEW CONTACT INQUIRY RECEIVED ===", leadData);

    // 3. Send Email via Resend if API Key is configured
    const apiKey = process.env.RESEND_API_KEY;
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || "zafarsolutions.pk@gmail.com";

    let emailSent = false;
    let emailError: string | null = null;

    if (apiKey && apiKey.trim() !== "") {
      try {
        const resend = new Resend(apiKey);

        const emailResult = await resend.emails.send({
          from: "Portfolio Lead <onboarding@resend.dev>",
          to: [receiverEmail],
          replyTo: leadData.email,
          subject: `⚡ New Inquiry: ${leadData.name} - ${leadData.subject}`,
          html: `
            <!DOCTYPE html>
            <html>
              <head>
                <meta charset="utf-8">
                <style>
                  body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0b091a; color: #f3efff; margin: 0; padding: 24px; }
                  .container { max-width: 600px; margin: 0 auto; background: #15102a; border-radius: 20px; border: 1px solid rgba(255,255,255,0.1); overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.5); }
                  .header { background: linear-gradient(135deg, #7c3aed, #2563eb); padding: 32px 28px; text-align: left; }
                  .header h1 { margin: 0 0 6px 0; font-size: 24px; color: #ffffff; font-weight: 800; letter-spacing: -0.5px; }
                  .header p { margin: 0; font-size: 13px; color: rgba(255,255,255,0.8); }
                  .content { padding: 32px 28px; }
                  .badge { display: inline-block; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; background: rgba(56, 189, 248, 0.15); color: #38bdf8; border: 1px solid rgba(56, 189, 248, 0.3); margin-bottom: 20px; }
                  .field { margin-bottom: 18px; }
                  .field-label { font-size: 11px; text-transform: uppercase; font-weight: 700; color: rgba(255,255,255,0.5); letter-spacing: 0.1em; margin-bottom: 4px; }
                  .field-value { font-size: 16px; font-weight: 600; color: #ffffff; }
                  .field-value a { color: #38bdf8; text-decoration: none; }
                  .message-box { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 14px; padding: 18px; margin-top: 20px; font-size: 15px; line-height: 1.6; color: #e2e8f0; white-space: pre-wrap; }
                  .footer { padding: 20px 28px; background: rgba(0,0,0,0.2); border-top: 1px solid rgba(255,255,255,0.05); font-size: 12px; color: rgba(255,255,255,0.4); display: flex; justify-content: space-between; align-items: center; }
                  .btn { display: inline-block; padding: 12px 24px; background: #2563eb; color: #ffffff !important; text-decoration: none; font-weight: 700; font-size: 13px; border-radius: 10px; margin-top: 20px; text-transform: uppercase; letter-spacing: 0.05em; }
                </style>
              </head>
              <body>
                <div class="container">
                  <div class="header">
                    <h1>New Client Inquiry</h1>
                    <p>Submitted via your Portfolio website at ${leadData.timestamp}</p>
                  </div>
                  <div class="content">
                    <div class="badge">${leadData.subject}</div>
                    
                    <div class="field">
                      <div class="field-label">Client Name</div>
                      <div class="field-value">${leadData.name}</div>
                    </div>

                    <div class="field">
                      <div class="field-label">Email Address</div>
                      <div class="field-value"><a href="mailto:${leadData.email}">${leadData.email}</a></div>
                    </div>

                    <div class="field">
                      <div class="field-label">Phone / WhatsApp</div>
                      <div class="field-value">${leadData.phone}</div>
                    </div>

                    <div class="field">
                      <div class="field-label">Inquiry Topic / Model</div>
                      <div class="field-value">${leadData.subject}</div>
                    </div>

                    <div class="field">
                      <div class="field-label">Message Details</div>
                      <div class="message-box">${leadData.message}</div>
                    </div>

                    <a href="mailto:${leadData.email}?subject=Re: ${encodeURIComponent(leadData.subject)}" class="btn">Reply to Client</a>
                  </div>
                  <div class="footer">
                    <span>Portfolio Notification System</span>
                    <span>Direct Delivery to ${receiverEmail}</span>
                  </div>
                </div>
              </body>
            </html>
          `,
        });

        if (emailResult.error) {
          console.error("Resend API error:", emailResult.error);
          emailError = emailResult.error.message;
        } else {
          emailSent = true;
          console.log("Email dispatched via Resend successfully:", emailResult.data?.id);
        }
      } catch (sendErr: unknown) {
        console.error("Failed to send email via Resend:", sendErr);
        emailError = sendErr instanceof Error ? sendErr.message : "Failed to dispatch email.";
      }
    } else {
      console.warn(
        "RESEND_API_KEY is not configured in .env.local yet. Message logged locally to server console."
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your message has been sent successfully. We will get back to you within 24 hours.",
        emailDelivered: emailSent,
        lead: {
          name: leadData.name,
          email: leadData.email,
          subject: leadData.subject,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong while processing your request. Please try again or reach out on WhatsApp.",
      },
      { status: 500 }
    );
  }
}
