import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { COMPANY, whatsappLink } from "@/data/company";

export default function Footer({ variant = "home" }) {
  const isAbout = variant === "about";

  return (
    <footer role="contentinfo">
      <div className="container">
        <div className="footer-top">
          {isAbout ? (
            <div className="footer-brand">
              <Link href="/" aria-label="EXP Digital Solution Home">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/exp-logo.png" alt="Exp Digital Solution Logo" className="footer-logo-img" />
              </Link>
              <p>Enterprise software development &amp; digital transformation agency based in Denpasar, Bali.</p>
            </div>
          ) : (
            <div className="footer-brand">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/exp-logo.png" alt="Exp Digital Solution" className="footer-logo-img" />
              <p>
                {COMPANY.legalName} — A premium software house based in Denpasar, Bali. We engineer
                scalable digital solutions that power modern businesses.
              </p>
            </div>
          )}

          <div>
            <div className="footer-col-title">Navigation</div>
            <div className="footer-links-col">
              <Link href="/">Home</Link>
              <Link href="/about">About Us</Link>
              <Link href="/services">All Services</Link>
              <Link href="/portfolio">Portfolio</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/#blog">Blog &amp; Insights</Link>
            </div>
          </div>

          <div>
            <div className="footer-col-title">Solutions</div>
            <div className="footer-links-col">
              <Link href="/solutions/software-house-bali">Software House Bali</Link>
              <Link href="/solutions/jasa-pembuatan-erp-bali">Jasa Pembuatan ERP Bali</Link>
              <Link href="/solutions/software-gym-bali">Software Gym Bali</Link>
              <Link href="/solutions/software-pos-kasir-bali">Software POS Kasir Bali</Link>
              <Link href="/solutions/konsultan-it-bali">Konsultan IT Bali</Link>
              <Link href="/solutions/jasa-pembuatan-website-bali">Jasa Website Bali</Link>
              <Link href="/solutions/jasa-pembuatan-aplikasi-bali">Aplikasi Mobile Bali</Link>
            </div>
          </div>

          <div>
            <div className="footer-col-title">Get in Touch</div>
            <div className="footer-contact-col">
              <div className="footer-contact-item">
                <MapPin />
                <span>{COMPANY.address.full}</span>
              </div>
              <div className="footer-contact-item">
                <Phone />
                <span>{COMPANY.whatsappDisplay}</span>
              </div>
              <div className="footer-contact-item">
                <Mail />
                <a href={`mailto:${COMPANY.email}`} style={{ color: "inherit" }}>
                  {COMPANY.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 {COMPANY.legalName}. All rights reserved.</p>
          <div className="footer-social">
            {!isAbout && (
              <a href={COMPANY.social.instagram} id="btn-instagram" target="_blank" rel="noopener" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
              </a>
            )}
            <a href={COMPANY.social.linkedin} id="btn-linkedin" target="_blank" rel="noopener" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
            </a>
            <a href={COMPANY.social.medium} target="_blank" rel="noopener" aria-label="Medium Blog">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" /></svg>
            </a>
            <a href={whatsappLink()} target="_blank" rel="noopener" aria-label="WhatsApp">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.64A2 2 0 012 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" /></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
