import Link from "next/link";

export default function AboutContact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-box reveal">
          <div className="contact-text">
            <h2>Ready to Scale Your Digital Architecture?</h2>
            <p>Schedule a technical discovery session with our engineering team today.</p>
          </div>
          <div className="contact-action">
            <Link href="/contact" className="whatsapp-btn" id="btn-about-contact">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.64A2 2 0 012 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
              </svg>
              <span>Start Conversation</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
