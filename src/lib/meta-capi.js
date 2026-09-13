import crypto from "crypto";

/**
 * Hash a string using SHA-256 for Meta CAPI PII standards.
 * Value must be lowercased and trimmed before hashing.
 * @param {string|null|undefined} value
 * @returns {string|null}
 */
export function hashSha256(value) {
  if (!value || typeof value !== "string") return null;
  const clean = value.trim().toLowerCase();
  if (!clean) return null;
  return crypto.createHash("sha256").update(clean).digest("hex");
}

/**
 * Normalizes phone numbers according to Meta guidelines:
 * - Digits only, no spaces or special symbols (+, -, ()).
 * - Country code included (e.g. 6281234567890).
 * @param {string|null|undefined} phone
 * @returns {string|null}
 */
export function normalizePhone(phone) {
  if (!phone || typeof phone !== "string") return null;
  let digits = phone.replace(/\D/g, "");
  if (!digits) return null;

  // If local Indonesian format starting with 0, convert to 62
  if (digits.startsWith("0")) {
    digits = "62" + digits.slice(1);
  }

  return digits;
}

/**
 * Sends a server-side "Lead" conversion event to Meta Conversions API (Graph API).
 * Fail-safe: catches errors so it never breaks the main form submission or email dispatch.
 * 
 * @param {Object} params
 * @param {string} params.eventId - Unique event_id generated or populated by GTM for deduplication
 * @param {string} params.name - Lead full name / PIC
 * @param {string} params.email - Lead email address
 * @param {string} [params.phone] - Lead phone number
 * @param {string} [params.companyName] - Lead company name
 * @param {string} [params.service] - Selected service of interest
 * @param {string} [params.clientIp] - Visitor client IP address
 * @param {string} [params.userAgent] - Visitor browser User-Agent
 * @param {string} [params.fbp] - _fbp cookie value
 * @param {string} [params.fbc] - _fbc cookie value
 * @param {string} [params.eventSourceUrl] - URL where form was submitted
 * @returns {Promise<Object>}
 */
export async function sendMetaLeadEvent({
  eventId,
  name,
  email,
  phone,
  companyName,
  service,
  clientIp,
  userAgent,
  fbp,
  fbc,
  eventSourceUrl,
}) {
  const pixelId = process.env.META_PIXEL_ID;
  const accessToken = process.env.META_CAPI_ACCESS_TOKEN;
  const testEventCode = process.env.META_CAPI_TEST_EVENT_CODE;

  // If credentials are not set, log simulation notice and return cleanly
  if (!pixelId || !accessToken) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(
        "Meta CAPI Notice: META_PIXEL_ID or META_CAPI_ACCESS_TOKEN is missing. Event simulation logged:",
        { eventId, email, phone, fbp, fbc }
      );
    }
    return { success: true, simulated: true, message: "Meta CAPI credentials not configured." };
  }

  try {
    // 1. Prepare User Data (PII hashed)
    const userData = {};

    // Email
    const hashedEmail = hashSha256(email);
    if (hashedEmail) userData.em = [hashedEmail];

    // Phone
    const normalizedPhone = normalizePhone(phone);
    if (normalizedPhone) {
      const hashedPhone = hashSha256(normalizedPhone);
      if (hashedPhone) userData.ph = [hashedPhone];
    }

    // First Name & Last Name from full name
    if (name && typeof name === "string") {
      const nameParts = name.trim().split(/\s+/);
      const firstName = nameParts[0];
      const lastName = nameParts.length > 1 ? nameParts.slice(1).join(" ") : null;

      const hashedFn = hashSha256(firstName);
      if (hashedFn) userData.fn = [hashedFn];

      if (lastName) {
        const hashedLn = hashSha256(lastName);
        if (hashedLn) userData.ln = [hashedLn];
      }
    }

    // IP & User-Agent (Crucial for high Event Match Quality)
    if (clientIp) userData.client_ip_address = clientIp;
    if (userAgent) userData.client_user_agent = userAgent;

    // Meta Cookies
    if (fbp) userData.fbp = fbp;
    if (fbc) userData.fbc = fbc;

    // 2. Custom Data
    const customData = {
      content_name: service || "Custom Software Consultation",
    };
    if (companyName) {
      customData.company_name = companyName;
    }

    // 3. Build Payload
    const eventPayload = {
      data: [
        {
          event_name: "Lead",
          event_time: Math.floor(Date.now() / 1000),
          event_id: eventId,
          event_source_url: eventSourceUrl || "https://www.expdigitalsolution.com/contact",
          action_source: "website",
          user_data: userData,
          custom_data: customData,
        },
      ],
    };

    if (testEventCode) {
      eventPayload.test_event_code = testEventCode;
    }

    // 4. Send to Meta Graph API v19.0
    const endpoint = `https://graph.facebook.com/v19.0/${pixelId}/events?access_token=${encodeURIComponent(
      accessToken
    )}`;

    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventPayload),
    });

    const data = await res.json();

    if (!res.ok || data.error) {
      console.warn("Meta CAPI API Error:", data.error || data);
      return { success: false, error: data.error };
    }

    return { success: true, data };
  } catch (error) {
    console.warn("Meta CAPI Execution Notice (non-blocking):", error);
    return { success: false, error: error.message };
  }
}
