"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import WalnutLogo from "./WalnutLogo";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Features", href: "/#features" },
  { label: "For Coaches", href: "/providers" },
  { label: "For Companies", href: "/companies" },
  { label: "Community", href: "/community" },
];

const navStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "28px",
};

const mobileTriggerStyle: React.CSSProperties = {
  background: "none",
  border: "none",
  cursor: "pointer",
  color: "var(--color-text)",
  display: "none",
  alignItems: "center",
  justifyContent: "center",
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "rgba(247,245,240,0.88)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(214,208,196,0.6)",
      }}
    >
      <div
        className="container-walnut"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "64px",
        }}
      >
        {/* Logo */}
        <WalnutLogo variant="dark" size="md" />

        {/* Desktop Nav */}
        <nav
          style={navStyle}
          className="walnut-desktop-nav"
        >
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div
          style={{ display: "flex", alignItems: "center", gap: "12px" }}
          className="walnut-desktop-nav"
        >
          <Link href="#" className="nav-link">
            Login
          </Link>
          <Link
            href="/onboarding"
            className="btn-lime"
            style={{ padding: "9px 20px", fontSize: "14px" }}
          >
            Get started →
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="walnut-mobile-trigger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={mobileTriggerStyle}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            background: "var(--color-background)",
            borderTop: "1px solid var(--color-border-light)",
            padding: "16px 24px 24px",
          }}
        >
          <nav style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link"
                style={{ fontSize: "16px" }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div
              style={{
                height: "1px",
                background: "var(--color-border-light)",
                margin: "8px 0",
              }}
            />
            <Link
              href="#"
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </Link>
            <Link
              href="/onboarding"
              className="btn-lime"
              style={{ textAlign: "center" }}
              onClick={() => setMenuOpen(false)}
            >
              Get started →
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
