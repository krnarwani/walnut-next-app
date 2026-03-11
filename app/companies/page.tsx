import Link from "next/link";
import { companyBenefits } from "@/lib/mockData";
import { TrendingUp, Shield, Settings, CheckCircle2, ArrowRight, Building2, BarChart3, Lock } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  TrendingUp: <TrendingUp size={24} />,
  Shield: <Shield size={24} />,
  Settings: <Settings size={24} />,
  CheckCircle: <CheckCircle2 size={24} />,
};

const tiers = [
  {
    name: "Starter",
    price: "£25",
    unit: "per employee/month",
    description: "For teams of up to 50. All core features.",
    features: [
      "Unlimited 1:1 therapy sessions",
      "Peer circle access",
      "AI onboarding for all employees",
      "Monthly usage report",
      "Email support",
    ],
    cta: "Get started",
    highlight: false,
  },
  {
    name: "Growth",
    price: "£40",
    unit: "per employee/month",
    description: "For teams of 51–250. Enhanced reporting and dedicated support.",
    features: [
      "Everything in Starter",
      "Group session credits",
      "Quarterly wellbeing report",
      "Dedicated account manager",
      "Custom spend limits per team",
      "HRIS integration",
    ],
    cta: "Most popular",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    unit: "for 250+ employees",
    description: "Tailored pricing, integration, and clinical governance for large organisations.",
    features: [
      "Everything in Growth",
      "Custom clinical governance",
      "White-label option",
      "SSO & advanced HRIS",
      "Bespoke wellbeing programmes",
      "24/7 crisis support line",
    ],
    cta: "Talk to us",
    highlight: false,
  },
];

const caseStudies = [
  {
    company: "Series B Tech Startup",
    size: "120 employees",
    result: "34% reduction in stress-related absence in 6 months",
    quote: "We needed something that felt authentic, not a checkbox benefit. Walnut delivered exactly that.",
    industry: "Technology",
  },
  {
    company: "Global Law Firm",
    size: "450 employees",
    result: "89% of users reported improved wellbeing after 8 weeks",
    quote: "The anonymised reporting gives us data to act on without compromising employee trust.",
    industry: "Professional Services",
  },
];

export default function CompaniesPage() {
  return (
    <div style={{ background: "var(--color-background)" }}>
      {/* Hero */}
      <section
        style={{
          background: "var(--color-surface-green)",
          padding: "80px 24px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="container-walnut">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }}>
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "white",
                  border: "1px solid var(--color-border-light)",
                  borderRadius: "999px",
                  padding: "6px 14px",
                  marginBottom: "24px",
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "var(--color-text)",
                }}
              >
                <Building2 size={13} />
                Walnut for Companies
              </div>

              <h1
                style={{
                  fontFamily: "Instrument Serif, Georgia, serif",
                  fontSize: "clamp(32px, 4vw, 56px)",
                  lineHeight: 1.1,
                  marginBottom: "20px",
                  fontStyle: "italic",
                }}
              >
                The mental health benefit your people will actually use.
              </h1>

              <p style={{ fontSize: "17px", color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "32px", maxWidth: "480px" }}>
                Most EAPs go unused. Walnut works because it's built around what ambitious professionals actually need — personalised matching, discretion, and care that fits around work.
              </p>

              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <Link href="#pricing" className="btn-lime" style={{ fontSize: "15px" }}>
                  See pricing
                  <ArrowRight size={16} />
                </Link>
                <Link href="#" className="btn-dark" style={{ fontSize: "15px" }}>
                  Book a demo
                </Link>
              </div>
            </div>

            {/* Stats panel */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                { metric: "34%", label: "reduction in stress-related absence", icon: <TrendingUp size={20} /> },
                { metric: "89%", label: "of users report improved wellbeing in 8 weeks", icon: <BarChart3 size={20} /> },
                { metric: "0%", label: "individual data shared with employers", icon: <Lock size={20} /> },
                { metric: "< 48h", label: "from signup to first session", icon: <CheckCircle2 size={20} /> },
              ].map((s) => (
                <div
                  key={s.metric}
                  style={{
                    background: "white",
                    border: "1px solid var(--color-border-light)",
                    borderRadius: "16px",
                    padding: "20px 24px",
                    display: "flex",
                    gap: "16px",
                    alignItems: "center",
                    boxShadow: "var(--shadow-card)",
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "12px",
                      background: "var(--color-lime)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--color-charcoal)",
                      flexShrink: 0,
                    }}
                  >
                    {s.icon}
                  </div>
                  <div>
                    <div style={{ fontFamily: "Instrument Serif, serif", fontSize: "24px", fontStyle: "italic", lineHeight: 1 }}>
                      {s.metric}
                    </div>
                    <div style={{ fontSize: "13px", color: "var(--color-text-muted)", lineHeight: 1.4 }}>{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padded" style={{ background: "white" }}>
        <div className="container-walnut">
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <h2 style={{ fontFamily: "Instrument Serif, serif", fontSize: "clamp(28px, 4vw, 44px)", marginBottom: "16px" }}>
              Built different. For the demands of modern work.
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px" }}>
            {companyBenefits.map((b, i) => (
              <div
                key={i}
                style={{
                  padding: "28px",
                  background: "var(--color-surface)",
                  borderRadius: "16px",
                  border: "1px solid var(--color-border-light)",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    background: "var(--color-charcoal)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#B8E040",
                    marginBottom: "16px",
                  }}
                >
                  {iconMap[b.icon] || <CheckCircle2 size={24} />}
                </div>
                <h3 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "10px" }}>{b.title}</h3>
                <p style={{ fontSize: "14px", color: "var(--color-text-muted)", lineHeight: 1.7 }}>{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy callout */}
      <section
        style={{
          background: "var(--color-charcoal)",
          padding: "64px 24px",
          textAlign: "center",
        }}
      >
        <div className="container-walnut" style={{ maxWidth: "680px" }}>
          <div style={{ fontSize: "40px", marginBottom: "20px" }}>🔒</div>
          <h2 style={{ fontFamily: "Instrument Serif, serif", fontSize: "clamp(24px, 3vw, 40px)", color: "var(--color-background)", marginBottom: "16px", fontStyle: "italic" }}>
            Privacy is not a feature. It's our foundation.
          </h2>
          <p style={{ fontSize: "16px", color: "rgba(247,245,240,0.65)", lineHeight: 1.7, marginBottom: "28px" }}>
            Your employees access Walnut independently. You receive only anonymized, aggregate workforce wellbeing insights — never individual session data, diagnoses, or notes. GDPR compliant by design.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
            {[
              "GDPR compliant",
              "ISO 27001 certified",
              "HIPAA ready",
            ].map((badge) => (
              <div
                key={badge}
                style={{
                  background: "rgba(247,245,240,0.08)",
                  border: "1px solid rgba(247,245,240,0.15)",
                  borderRadius: "12px",
                  padding: "14px",
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "rgba(247,245,240,0.8)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                }}
              >
                <Shield size={14} style={{ color: "#B8E040" }} />
                {badge}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="section-padded" style={{ background: "var(--color-surface)" }}>
        <div className="container-walnut">
          <h2 style={{ fontFamily: "Instrument Serif, serif", fontSize: "clamp(24px, 3vw, 36px)", marginBottom: "32px", textAlign: "center" }}>
            Walnut in practice
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
            {caseStudies.map((cs, i) => (
              <div key={i} style={{ background: "white", borderRadius: "16px", padding: "28px", border: "1px solid var(--color-border-light)" }}>
                <div style={{ display: "flex", gap: "8px", marginBottom: "16px", alignItems: "center" }}>
                  <span
                    style={{
                      background: "var(--color-surface)",
                      borderRadius: "8px",
                      padding: "4px 10px",
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "var(--color-text-muted)",
                    }}
                  >
                    {cs.industry}
                  </span>
                  <span style={{ fontSize: "12px", color: "var(--color-text-faint)" }}>{cs.size}</span>
                </div>

                <div
                  style={{
                    background: "var(--color-surface-green)",
                    borderRadius: "10px",
                    padding: "14px 16px",
                    marginBottom: "16px",
                  }}
                >
                  <p style={{ fontSize: "16px", fontWeight: 700, color: "var(--color-success)", margin: 0 }}>
                    {cs.result}
                  </p>
                </div>

                <p style={{ fontSize: "14px", fontStyle: "italic", color: "var(--color-text-muted)", lineHeight: 1.7 }}>
                  "{cs.quote}"
                </p>
                <p style={{ fontSize: "13px", color: "var(--color-text-faint)", marginTop: "8px" }}>
                  — {cs.company}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="section-padded" style={{ background: "var(--color-background)" }}>
        <div className="container-walnut">
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <h2 style={{ fontFamily: "Instrument Serif, serif", fontSize: "clamp(28px, 4vw, 44px)", marginBottom: "12px" }}>
              Simple, transparent pricing
            </h2>
            <p style={{ fontSize: "16px", color: "var(--color-text-muted)" }}>
              All plans include a 30-day free trial. No credit card required.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            {tiers.map((tier) => (
              <div
                key={tier.name}
                style={{
                  background: tier.highlight ? "var(--color-charcoal)" : "white",
                  border: tier.highlight ? "2px solid var(--color-lime)" : "1px solid var(--color-border-light)",
                  borderRadius: "20px",
                  padding: "32px",
                  boxShadow: tier.highlight ? "0 8px 32px rgba(184,224,64,0.15)" : "var(--shadow-card)",
                  position: "relative",
                }}
              >
                {tier.highlight && (
                  <div
                    style={{
                      position: "absolute",
                      top: "-1px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: "var(--color-lime)",
                      color: "var(--color-charcoal)",
                      fontSize: "11px",
                      fontWeight: 800,
                      padding: "4px 16px",
                      borderRadius: "0 0 10px 10px",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Most popular
                  </div>
                )}

                <div style={{ marginTop: tier.highlight ? "16px" : "0" }}>
                  <h3 style={{ fontSize: "18px", fontWeight: 700, color: tier.highlight ? "var(--color-background)" : "var(--color-text)", marginBottom: "8px" }}>
                    {tier.name}
                  </h3>
                  <div style={{ marginBottom: "8px" }}>
                    <span style={{ fontFamily: "Instrument Serif, serif", fontSize: "36px", fontStyle: "italic", color: tier.highlight ? "var(--color-background)" : "var(--color-text)" }}>
                      {tier.price}
                    </span>
                    {tier.price !== "Custom" && (
                      <span style={{ fontSize: "13px", color: tier.highlight ? "rgba(247,245,240,0.5)" : "var(--color-text-faint)", marginLeft: "4px" }}>
                        {tier.unit}
                      </span>
                    )}
                  </div>
                  <p style={{ fontSize: "14px", color: tier.highlight ? "rgba(247,245,240,0.6)" : "var(--color-text-muted)", marginBottom: "24px", lineHeight: 1.5 }}>
                    {tier.description}
                  </p>

                  <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "flex", flexDirection: "column", gap: "10px" }}>
                    {tier.features.map((f) => (
                      <li key={f} style={{ display: "flex", gap: "10px", fontSize: "14px", color: tier.highlight ? "rgba(247,245,240,0.8)" : "var(--color-text-muted)" }}>
                        <CheckCircle2 size={15} style={{ color: "#B8E040", flexShrink: 0, marginTop: "1px" }} />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="#"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      padding: "12px",
                      borderRadius: "999px",
                      fontWeight: 700,
                      fontSize: "15px",
                      textDecoration: "none",
                      background: tier.highlight ? "var(--color-lime)" : "var(--color-charcoal)",
                      color: tier.highlight ? "var(--color-charcoal)" : "var(--color-background)",
                    }}
                  >
                    {tier.cta === "Most popular" ? "Get started" : tier.cta}
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
