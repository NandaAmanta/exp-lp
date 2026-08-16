"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import {
  Send,
  Building2,
  Mail,
  User,
  Phone,
  Layers,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Lock,
} from "lucide-react";
import { COMPANY, whatsappLink } from "@/data/company";

export default function ContactFormSection() {
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    phone: "",
    service: "Custom ERP Development",
    message: "",
  });

  const [captchaToken, setCaptchaToken] = useState("");
  const [isCaptchaLoaded, setIsCaptchaLoaded] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const recaptchaContainerRef = useRef(null);
  const widgetIdRef = useRef(null);

  // Initialize Google reCAPTCHA
  const initRecaptcha = useCallback(() => {
    if (!recaptchaContainerRef.current) return;
    if (widgetIdRef.current !== null) return; // already rendered

    if (window.grecaptcha && typeof window.grecaptcha.render === "function") {
      try {
        const id = window.grecaptcha.render(recaptchaContainerRef.current, {
          sitekey: COMPANY.recaptchaSiteKey,
          theme: "dark",
          callback: (token) => {
            setCaptchaToken(token);
            setErrors((prev) => ({ ...prev, captcha: "" }));
          },
          "expired-callback": () => {
            setCaptchaToken("");
          },
          "error-callback": () => {
            setCaptchaToken("");
          },
        });
        widgetIdRef.current = id;
        setIsCaptchaLoaded(true);
      } catch (err) {
        console.warn("reCAPTCHA render notice:", err);
      }
    }
  }, []);

  useEffect(() => {
    // Check if script is already present
    const existingScript = document.getElementById("google-recaptcha-script");
    if (existingScript) {
      if (window.grecaptcha) {
        window.grecaptcha.ready(() => {
          initRecaptcha();
        });
      }
      return;
    }

    // Set up global callback
    window.onRecaptchaLoaded = () => {
      if (window.grecaptcha) {
        window.grecaptcha.ready(() => {
          initRecaptcha();
        });
      }
    };

    // Load Google reCAPTCHA script
    const script = document.createElement("script");
    script.id = "google-recaptcha-script";
    script.src = "https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoaded&render=explicit";
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      delete window.onRecaptchaLoaded;
    };
  }, [initRecaptcha]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error for this field if typed
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = "Company / organization name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Business email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!captchaToken) {
      newErrors.captcha = "Please complete the Google reCAPTCHA verification";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          companyName: formData.companyName.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          service: formData.service,
          message: formData.message.trim(),
          captchaToken: captchaToken,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to submit inquiry. Please try again or reach us via WhatsApp.");
      }

      setIsSubmitted(true);
    } catch (err) {
      console.error("Submission error:", err);
      setSubmitError(err.message || "Failed to submit inquiry. Please try again or reach us via WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSendViaWhatsApp = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const waText = `Hello Exp Digital Solution, I would like to consult on a software project:
- *Name*: ${formData.name}
- *Company*: ${formData.companyName}
- *Email*: ${formData.email}
- *Phone*: ${formData.phone || "-"}
- *Service*: ${formData.service}
- *Project Details*:
${formData.message || "Looking to discuss bespoke software development for our enterprise."}`;

    window.open(whatsappLink(waText), "_blank", "noopener,noreferrer");
  };

  const handleResetForm = () => {
    setIsSubmitted(false);
    setSubmitError("");
    setFormData({
      name: "",
      companyName: "",
      email: "",
      phone: "",
      service: "Custom ERP Development",
      message: "",
    });
    setCaptchaToken("");
    if (window.grecaptcha && widgetIdRef.current !== null) {
      try {
        window.grecaptcha.reset(widgetIdRef.current);
      } catch (err) {}
    }
  };

  return (
    <section className="contact-form-section" style={{ position: "relative", zIndex: 2 }}>
      <div className="container">
        {/* Form Container (Clean, Centered, Widened to 940px) */}
        <div className="contact-form-card" style={{ maxWidth: "940px", margin: "0 auto 60px auto" }}>
          <div className="contact-form-header">
            <h3>Start Your Project Consultation</h3>
            <p>
              Tell us about your system requirements, operational workflows, or digital transformation goals. Our
              engineering team will review and respond within 2 hours.
            </p>
          </div>

          {isSubmitted ? (
            <div className="form-success-state" style={{ textAlign: "center", padding: "30px 10px" }}>
              <div style={{ display: "inline-flex", color: "#22c55e", marginBottom: "16px" }}>
                <CheckCircle2 size={56} />
              </div>
              <h4 style={{ fontSize: "1.4rem", marginBottom: "10px", color: "var(--text-primary)" }}>
                Inquiry Sent Successfully!
              </h4>
              <p style={{ color: "var(--text-secondary)", maxWidth: "480px", margin: "0 auto 24px auto" }}>
                Thank you, <strong>{formData.name}</strong> from <strong>{formData.companyName}</strong>. Our
                engineering team has received your project details and will reach out to you at ({formData.email})
                shortly.
              </p>
              <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
                <button type="button" className="btn-primary" onClick={handleResetForm}>
                  Send Another Inquiry
                </button>
                <a
                  href={whatsappLink(
                    `Hello Exp Digital Solution, I (${formData.name} from ${formData.companyName}) just submitted a consultation inquiry on your website.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-direct-btn-large"
                  style={{ width: "auto", margin: 0, padding: "12px 20px" }}
                >
                  <Phone size={18} /> Confirm on WhatsApp
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form-fields" noValidate>
              {/* Row 1: Name & Company Name */}
              <div className="form-row-2">
                <div className="form-group">
                  <label htmlFor="input-name" className="form-label">
                    Full Name / PIC <span className="form-label-required">*</span>
                  </label>
                  <div className="form-input-wrapper">
                    <User size={18} className="form-input-icon" />
                    <input
                      type="text"
                      id="input-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Anderson"
                      className={`form-input ${errors.name ? "input-error" : ""}`}
                      required
                    />
                  </div>
                  {errors.name && <span className="form-error-msg">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="input-company" className="form-label">
                    Company / Organization <span className="form-label-required">*</span>
                  </label>
                  <div className="form-input-wrapper">
                    <Building2 size={18} className="form-input-icon" />
                    <input
                      type="text"
                      id="input-company"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="e.g. Acme Corporation Ltd."
                      className={`form-input ${errors.companyName ? "input-error" : ""}`}
                      required
                    />
                  </div>
                  {errors.companyName && <span className="form-error-msg">{errors.companyName}</span>}
                </div>
              </div>

              {/* Row 2: Email & Phone */}
              <div className="form-row-2">
                <div className="form-group">
                  <label htmlFor="input-email" className="form-label">
                    Work / Business Email <span className="form-label-required">*</span>
                  </label>
                  <div className="form-input-wrapper">
                    <Mail size={18} className="form-input-icon" />
                    <input
                      type="email"
                      id="input-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@company.com"
                      className={`form-input ${errors.email ? "input-error" : ""}`}
                      required
                    />
                  </div>
                  {errors.email && <span className="form-error-msg">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="input-phone" className="form-label">
                    Phone / WhatsApp Number
                  </label>
                  <div className="form-input-wrapper">
                    <Phone size={18} className="form-input-icon" />
                    <input
                      type="tel"
                      id="input-phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+62 812-3456-7890 or +1 (555) 012-3456"
                      className="form-input"
                    />
                  </div>
                </div>
              </div>

              {/* Row 3: Service Selection */}
              <div className="form-group">
                <label htmlFor="select-service" className="form-label">
                  Service of Interest
                </label>
                <div className="form-input-wrapper">
                  <Layers size={18} className="form-input-icon" />
                  <select
                    id="select-service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="Custom ERP Development">Custom ERP Development (Enterprise Operations)</option>
                    <option value="Gym Management System">Gym Management System & Biometric Integration</option>
                    <option value="POS System">Point of Sale (POS) & Multi-branch Retail Platform</option>
                    <option value="Custom Web App">Custom Web & Mobile Application Development</option>
                    <option value="Company Profile">Premium Corporate Website & Digital Platform</option>
                    <option value="Tech Consultation">Technical Consultation & System Architecture Audit</option>
                    <option value="Other">Other / General Software Inquiry</option>
                  </select>
                </div>
              </div>

              {/* Row 4: Message */}
              <div className="form-group">
                <label htmlFor="textarea-message" className="form-label">
                  Project Scope & Details
                </label>
                <textarea
                  id="textarea-message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your system objectives, key workflows, timeline expectations, or specific modules needed..."
                  className="form-textarea"
                />
              </div>

              {/* Google reCAPTCHA Verification */}
              <div className="recaptcha-container">
                <div className="recaptcha-header">
                  <span className="recaptcha-label">
                    <ShieldCheck size={16} color="var(--accent)" />
                    Security Verification (Google reCAPTCHA)
                  </span>
                </div>

                <div className="recaptcha-widget-wrapper">
                  <div ref={recaptchaContainerRef} id="g-recaptcha-container" />
                  {!isCaptchaLoaded && (
                    <div className="recaptcha-loading-placeholder">
                      <div className="recaptcha-spinner" />
                      <span>Loading Google reCAPTCHA...</span>
                    </div>
                  )}
                </div>
                {errors.captcha && <span className="form-error-msg">{errors.captcha}</span>}
              </div>

              {submitError && (
                <div
                  style={{
                    background: "rgba(239, 68, 68, 0.12)",
                    border: "1px solid rgba(239, 68, 68, 0.35)",
                    borderRadius: "var(--radius-md)",
                    padding: "14px 18px",
                    color: "#fca5a5",
                    fontSize: "0.9rem",
                  }}
                >
                  ⚠️ {submitError}
                </div>
              )}

              {/* Action Buttons */}
              <div className="form-actions-bar">
                <button
                  type="submit"
                  id="btn-submit-contact-form"
                  className="btn-form-submit"
                  disabled={isSubmitting}
                >
                  <Send size={18} />
                  {isSubmitting ? "Sending Inquiry..." : "Submit Project Inquiry"}
                </button>

                <div style={{ textAlign: "center", color: "var(--text-dim)", fontSize: "0.85rem", margin: "2px 0" }}>
                  — OR DIRECT CONSULTATION —
                </div>

                <button
                  type="button"
                  onClick={handleSendViaWhatsApp}
                  id="btn-send-to-whatsapp"
                  className="whatsapp-direct-btn-large"
                  style={{ margin: 0 }}
                >
                  <Phone size={18} />
                  Send Inquiry via WhatsApp
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Trust Badges Bar */}
        <div className="contact-trust-bar" style={{ maxWidth: "940px", margin: "0 auto 60px auto" }}>
          <div className="contact-trust-box">
            <div className="trust-box-icon">
              <Clock size={24} />
            </div>
            <div className="trust-box-text">
              <h5>Rapid Response (&lt; 2 Hours)</h5>
              <p>Your technical requirements are reviewed directly by our software architects.</p>
            </div>
          </div>

          <div className="contact-trust-box">
            <div className="trust-box-icon">
              <Lock size={24} />
            </div>
            <div className="trust-box-text">
              <h5>NDA & Data Confidentiality</h5>
              <p>All business logic, specifications, and project scope are protected under mutual NDA.</p>
            </div>
          </div>

          <div className="contact-trust-box">
            <div className="trust-box-icon">
              <ShieldCheck size={24} />
            </div>
            <div className="trust-box-text">
              <h5>100% Free Initial Discovery</h5>
              <p>Initial discovery consultation and architectural blueprint provided with zero upfront commitment.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
