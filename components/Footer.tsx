"use client";
import Link from "next/link";
import WalnutLogo from "./WalnutLogo";

const footerLinks = {
  "About Us": [
    { label: "Press", href: "#" },
    { label: "Our Company", href: "#" },
    { label: "Become an Affiliate", href: "#" },
    { label: "Careers", href: "#" },
  ],
  "Get Help": [
    { label: "FAQ", href: "#" },
    { label: "Contact Us", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "How it Works", href: "#" },
  ],
  Legal: [
    { label: "Terms of Service", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "TrafoHealth PDA", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--color-charcoal)",
        color: "rgba(247,245,240,0.7)",
        padding: "64px 0 32px",
      }}
    >
      <div className="container-walnut">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: "48px",
            marginBottom: "48px",
          }}
        >
          {/* Brand column */}
          <div>
            <WalnutLogo variant="light" size="md" />
            <p
              style={{
                marginTop: "16px",
                fontSize: "14px",
                lineHeight: 1.7,
                maxWidth: "280px",
                color: "rgba(247,245,240,0.6)",
              }}
            >
              Affordable mental healthcare for ambitious professionals. Vetted
              therapists, peer circles, and group sessions — all in one place.
            </p>

            <div style={{ marginTop: "24px" }}>
              <p
                style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "rgba(247,245,240,0.8)",
                  marginBottom: "12px",
                }}
              >
                Stay up to date
              </p>
              <div style={{ display: "flex", gap: "8px" }}>
                <input
                  type="email"
                  placeholder="Write your email here"
                  style={{
                    flex: 1,
                    background: "rgba(247,245,240,0.08)",
                    border: "1px solid rgba(247,245,240,0.15)",
                    borderRadius: "8px",
                    padding: "10px 14px",
                    fontSize: "14px",
                    color: "rgba(247,245,240,0.9)",
                    outline: "none",
                  }}
                />
                <button
                  style={{
                    width: "42px",
                    height: "42px",
                    background: "var(--color-lime)",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    fontSize: "18px",
                    color: "var(--color-charcoal)",
                  }}
                  aria-label="Subscribe"
                >
                  ↗
                </button>
              </div>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p
                style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "rgba(247,245,240,0.9)",
                  marginBottom: "16px",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                {category}
              </p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="footer-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(247,245,240,0.1)",
            paddingTop: "24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p style={{ fontSize: "13px", color: "rgba(247,245,240,0.4)" }}>
            © 2025 Walnut Health Ltd. All Rights Reserved
          </p>
          <a
            href="https://www.perplexity.ai/computer"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-pplx-link"
          >
            Created with Perplexity Computer
          </a>
        </div>
      </div>
    </footer>
  );
}
