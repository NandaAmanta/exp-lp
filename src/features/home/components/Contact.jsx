import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-box reveal">
          <div className="contact-text">
            <h2>
              Ready to Build
              <br />
              <span className="gradient-text">Something Great?</span>
            </h2>
            <p>Partner with us to engineer your next digital advantage. Tell us about your project.</p>
          </div>
          <div className="contact-action">
            <Link
              href="/contact"
              className="whatsapp-btn"
              id="btn-consult"
            >
              <MessageCircle />
              Consult with Experts
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
