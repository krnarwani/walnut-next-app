import Link from "next/link";
import { CheckCircle2, BarChart2, Calendar, DollarSign, Users, Shield, Zap, ArrowRight } from "lucide-react";

const benefits = [
  {
    icon: <Users size={24} />,
    title: "Access a warm, pre-qualified audience",
    description:
      "Our members are professionals actively seeking support — not browsing passively. Every enquiry is from someone ready to start.",
  },
  {
    icon: <Zap size={24} />,
    title: "AI-powered matching does the intake for you",
    description:
      "Our onboarding flow gathers deep context before clients reach you. No more lengthy intake sessions just to understand the basics.",
  },
  {
    icon: <Calendar size={24} />,
    title: "Integrated scheduling and reminders",
    description:
      "Manage your availability, session bookings, and reminders all in one place. Reduce no-shows with automated client nudges.",
  },
  {
    icon: <DollarSign size={24} />,
    title: "Transparent, flexible payment",
    description:
      "Set your own rates. Walnut adds no hidden fees. Receive payments weekly, directly to your account.",
  },
  {
    icon: <BarChart2 size={24} />,
    title: "Practice analytics and insights",
    description:
      "Understand your client base, session outcomes, and utilisation patterns through your provider dashboard.",
  },
  {
    icon: <Shield size={24} />,
    title: "Clinical governance support",
    description:
      "We support your CPD requirements and connect you to peer supervision groups through the platform.",
  },
];

const vetProcess = [
  {
    step: "01",
    title: "Application",
    description: "Submit your credentials, registration details, and professional indemnity insurance.",
  },
  {
    step: "02",
    title: "Credential verification",
    description: "We verify your registration with your professional body (BACP, BPS, UKCP, GMC, etc.).",
  },
  {
    step: "03",
    title: "Quality interview",
    description: "A 30-minute call with our clinical lead to understand your approach and specialisms.",
  },
  {
    step: "04",
    title: "Onboarding & profile",
    description: "Set up your profile, availability, and pricing. Go live within 48 hours.",
  },
];

const testimonials = [
  {
    quote:
      "My practice has grown 40% since joining Walnut. The clients are thoughtful, engaged, and come in knowing what they want from therapy.",
    author: "Dr. Yemi Adeyemi",
    role: "Clinical Psychologist, Manchester",
    initials: "YA",
    color: "#4A7C8E",
  },
  {
    quote:
      "The AI onboarding means clients already understand what CBT involves before our first session. It's genuinely changed how I work.",
    author: "Claire Beaumont",
    role: "CBT Therapist, Edinburgh",
    initials: "CB",
    color: "#7C6E8E",
  },
];

export default function ProvidersPage() {
  return (
    <div style={{ background: "var(--color-background)" }}>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(160deg, var(--color-charcoal) 0%, #2D2A24 100%)",
          padding: "80px 24px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 1px 1px, rgba(247,245,240,0.04) 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div className="container-walnut" style={{ position: "relative" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(184,224,64,0.15)",
              border: "1px solid rgba(184,224,64,0.3)",
              borderRadius: "999px",
              padding: "6px 14px",
              marginBottom: "24px",
              fontSize: "13px",
              fontWeight: 600,
              color: "#B8E040",
            }}
          >
            For Coaches & Therapists
          </div>

          <h1
            style={{
              fontFamily: "Instrument Serif, Georgia, serif",
              fontSize: "clamp(32px, 5vw, 64px)",
              lineHeight: 1.1,
              color: "var(--color-background)",
              marginBottom: "20px",
              fontStyle: "italic",
              maxWidth: "720px",
              margin: "0 auto 20px",
            }}
          >
            Build a practice you believe in.
          </h1>

          <p
            style={{
              fontSize: "17px",
              color: "rgba(247,245,240,0.65)",
              maxWidth: "520px",
              margin: "0 auto 40px",
              lineHeight: 1.7,
            }}
          >
            Join the Walnut network and connect with professionals who are actively seeking the kind of support you provide.
          </p>

          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="#apply" className="btn-lime" style={{ fontSize: "16px", padding: "14px 32px" }}>
              Apply to join
              <ArrowRight size={18} />
            </Link>
            <Link href="#how-it-works" className="btn-outline" style={{ fontSize: "16px", padding: "14px 32px", borderColor: "rgba(247,245,240,0.25)", color: "rgba(247,245,240,0.8)" }}>
              How it works
            </Link>
          </div>

          <div style={{ marginTop: "56px", display: "flex", gap: "40px", justifyContent: "center", flexWrap: "wrap" }}>
            {[
              { value: "340+", label: "Active providers" },
              { value: "£0", label: "Platform fee" },
              { value: "48h", label: "From application to live" },
              { value: "4.9★", label: "Provider satisfaction" },
            ].map((stat) => (
              <div key={stat.label} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "Instrument Serif, serif", fontSize: "28px", color: "#B8E040", fontStyle: "italic" }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: "12px", color: "rgba(247,245,240,0.45)" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padded" style={{ background: "white" }}>
        <div className="container-walnut">
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <h2 style={{ fontFamily: "Instrument Serif, serif", fontSize: "clamp(28px, 4vw, 44px)", marginBottom: "16px" }}>
              Everything you need to focus on what matters.
            </h2>
            <p style={{ fontSize: "16px", color: "var(--color-text-muted)", maxWidth: "480px", margin: "0 auto" }}>
              Walnut handles the admin, matching, and payments — so you can focus entirely on your clients.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "28px" }}>
            {benefits.map((b, i) => (
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
                    background: "var(--color-lime)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--color-charcoal)",
                    marginBottom: "16px",
                  }}
                >
                  {b.icon}
                </div>
                <h3 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "10px" }}>{b.title}</h3>
                <p style={{ fontSize: "14px", color: "var(--color-text-muted)", lineHeight: 1.7 }}>{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vetting process */}
      <section id="how-it-works" className="section-padded" style={{ background: "var(--color-background)" }}>
        <div className="container-walnut">
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <h2 style={{ fontFamily: "Instrument Serif, serif", fontSize: "clamp(28px, 4vw, 44px)", marginBottom: "12px" }}>
              Our vetting process
            </h2>
            <p style={{ fontSize: "16px", color: "var(--color-text-muted)", maxWidth: "480px", margin: "0 auto" }}>
              We maintain the highest standards so your clients can trust who they're working with.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "24px" }}>
            {vetProcess.map((step) => (
              <div
                key={step.step}
                style={{
                  background: "white",
                  border: "1px solid var(--color-border-light)",
                  borderRadius: "16px",
                  padding: "28px 24px",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "-1px",
                    left: "24px",
                    background: "var(--color-lime)",
                    color: "var(--color-charcoal)",
                    fontSize: "11px",
                    fontWeight: 800,
                    padding: "4px 10px",
                    borderRadius: "0 0 8px 8px",
                    letterSpacing: "0.05em",
                  }}
                >
                  {step.step}
                </div>
                <h3 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "10px", marginTop: "12px" }}>{step.title}</h3>
                <p style={{ fontSize: "14px", color: "var(--color-text-muted)", lineHeight: 1.6 }}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padded" style={{ background: "var(--color-surface)" }}>
        <div className="container-walnut">
          <h2 style={{ fontFamily: "Instrument Serif, serif", fontSize: "clamp(24px, 3vw, 36px)", marginBottom: "36px", textAlign: "center" }}>
            Practitioners who chose Walnut
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
            {testimonials.map((t, i) => (
              <div key={i} style={{ background: "white", border: "1px solid var(--color-border-light)", borderRadius: "16px", padding: "28px" }}>
                <p style={{ fontSize: "15px", fontStyle: "italic", lineHeight: 1.7, marginBottom: "20px", color: "var(--color-text)" }}>
                  "{t.quote}"
                </p>
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: t.color, color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: 700 }}>
                    {t.initials}
                  </div>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: 600 }}>{t.author}</div>
                    <div style={{ fontSize: "13px", color: "var(--color-text-muted)" }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply CTA */}
      <section id="apply" className="section-padded" style={{ background: "var(--color-charcoal)", textAlign: "center" }}>
        <div className="container-walnut" style={{ maxWidth: "600px" }}>
          <h2 style={{ fontFamily: "Instrument Serif, serif", fontSize: "clamp(28px, 4vw, 48px)", color: "var(--color-background)", marginBottom: "16px", fontStyle: "italic" }}>
            Ready to join?
          </h2>
          <p style={{ fontSize: "16px", color: "rgba(247,245,240,0.6)", marginBottom: "32px", lineHeight: 1.7 }}>
            Applications are reviewed within 2 working days. All accepted providers receive a personal onboarding call.
          </p>
          <Link href="#" className="btn-lime" style={{ fontSize: "16px", padding: "16px 40px" }}>
            Apply to become a provider
            <ArrowRight size={18} />
          </Link>
          <p style={{ fontSize: "13px", color: "rgba(247,245,240,0.35)", marginTop: "16px" }}>
            We're currently accepting applications from BACP, BPS, UKCP, and GMC registered practitioners.
          </p>
        </div>
      </section>
    </div>
  );
}
