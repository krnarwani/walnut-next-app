import Link from "next/link";
import { platformStats } from "@/lib/mockData";
import {
  CheckCircle2,
  ArrowRight,
  Users,
  BookOpen,
  Video,
  Shield,
  TrendingUp,
  Star,
} from "lucide-react";

const features = [
  {
    icon: <CheckCircle2 size={22} />,
    title: "Get matched with reviewed professionals.",
    points: [
      "Get real help from certified professionals",
      "Reviewed and matched to you based on past experience",
      "Comprehensive vetting against clinical standards",
    ],
    image: "therapy",
  },
  {
    icon: <BookOpen size={22} />,
    title: "Quick, bite-size resources to help you get un-stuck.",
    points: [
      "Quick training programmes validated by CBT professionals",
      "Jot down your thoughts in a private journal",
      "Watch 'shorts' — quick video answers from certified professionals",
    ],
    image: "resources",
  },
  {
    icon: <Users size={22} />,
    title: "Group Sessions & Peer-to-Peer Matching for those with the same problems as you.",
    points: ["Offset the cost of expensive 1:1 therapy with group sessions"],
    image: "group",
  },
];

const testimonials = [
  {
    quote:
      "Walnut matched me with exactly the right therapist within 48 hours. For the first time in 3 years, I feel like myself again at work.",
    author: "Emma R.",
    role: "Senior Product Manager, London",
    initials: "ER",
    color: "#4A7C8E",
  },
  {
    quote:
      "The peer circle has been just as valuable as my 1:1 sessions. Knowing that other leaders face the same challenges changed everything.",
    author: "James K.",
    role: "Startup Founder, Berlin",
    initials: "JK",
    color: "#7C6E8E",
  },
  {
    quote:
      "I was sceptical about online therapy. Walnut's matching process — starting with the AI onboarding — felt genuinely personal and safe.",
    author: "Priya M.",
    role: "Finance Director, Dublin",
    initials: "PM",
    color: "#8E6E4A",
  },
];

const stats = [
  { label: "1 in 5 women compared with 1 in 8 men have a mental disorder.", size: "large" },
  {
    label: "53% of women who have mental health problems have also experienced abuse.",
    size: "hero",
  },
  { label: "Women are twice as likely to be diagnosed with anxiety as men.", size: "large" },
];

export default function LandingPage() {
  return (
    <div>
      {/* ========================
          HERO
      ======================== */}
      <section
        style={{
          position: "relative",
          background: "var(--color-charcoal)",
          minHeight: "min(90vh, 720px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        {/* Background texture */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 80% 60% at 50% 60%, rgba(184,224,64,0.08) 0%, transparent 70%)",
          }}
        />
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(247,245,240,0.06) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />

        <div
          className="container-walnut"
          style={{ position: "relative", zIndex: 2, padding: "80px 24px 100px" }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(184,224,64,0.15)",
              border: "1px solid rgba(184,224,64,0.3)",
              borderRadius: "999px",
              padding: "6px 14px",
              marginBottom: "32px",
              fontSize: "13px",
              fontWeight: 600,
              color: "#B8E040",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#B8E040",
                display: "inline-block",
              }}
            />
            Now in early access — join {platformStats.professionals} professionals
          </div>

          <h1
            style={{
              fontFamily: "Instrument Serif, Georgia, serif",
              fontSize: "clamp(36px, 6vw, 76px)",
              lineHeight: 1.1,
              color: "var(--color-background)",
              maxWidth: "720px",
              margin: "0 auto 24px",
              fontStyle: "italic",
            }}
          >
            Affordable mental healthcare for ambitious professionals.
          </h1>

          <p
            style={{
              fontSize: "clamp(16px, 2vw, 20px)",
              color: "rgba(247,245,240,0.65)",
              maxWidth: "480px",
              margin: "0 auto 40px",
              lineHeight: 1.6,
            }}
          >
            Matched with vetted therapists, peer circles, and group sessions built
            for the demands of modern professional life.
          </p>

          <div
            style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}
          >
            <Link href="/onboarding" className="btn-lime">
              I need help{" "}
              <span
                style={{
                  background: "rgba(30,28,24,0.15)",
                  borderRadius: "50%",
                  width: "22px",
                  height: "22px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "13px",
                }}
              >
                →
              </span>
            </Link>
            <Link
              href="/providers"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                color: "rgba(247,245,240,0.65)",
                fontSize: "15px",
                textDecoration: "none",
                padding: "12px 0",
                transition: "color 0.15s ease",
              }}
            >
              I want to help (Providers)
            </Link>
          </div>

          {/* Trust indicators */}
          <div
            style={{
              marginTop: "56px",
              display: "flex",
              gap: "32px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {[
              { value: platformStats.professionals, label: "Professionals helped" },
              { value: platformStats.therapists, label: "Vetted therapists" },
              { value: platformStats.matchRate, label: "Match satisfaction" },
              { value: platformStats.avgWaitTime, label: "To first session" },
            ].map((stat) => (
              <div key={stat.label} style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontFamily: "Instrument Serif, Georgia, serif",
                    fontSize: "28px",
                    color: "#B8E040",
                    lineHeight: 1,
                    marginBottom: "4px",
                    fontStyle: "italic",
                  }}
                >
                  {stat.value}
                </div>
                <div style={{ fontSize: "12px", color: "rgba(247,245,240,0.45)", letterSpacing: "0.02em" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll chevron */}
        <div
          style={{
            position: "absolute",
            bottom: "32px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <div
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              background: "#B8E040",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--color-charcoal)",
              fontSize: "18px",
              cursor: "pointer",
              animation: "bounce 2s ease infinite",
            }}
          >
            ↓
          </div>
        </div>

      </section>

      {/* ========================
          FEATURES
      ======================== */}
      <section id="features" className="section-padded" style={{ background: "white" }}>
        <div className="container-walnut">
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <h2
              style={{
                fontFamily: "Instrument Serif, Georgia, serif",
                fontSize: "clamp(28px, 4vw, 44px)",
                color: "var(--color-text)",
                lineHeight: 1.15,
                marginBottom: "16px",
              }}
            >
              All-in-one mental wellness
              <br />
              for professionals
            </h2>
            <p style={{ fontSize: "17px", color: "var(--color-text-muted)", maxWidth: "480px", margin: "0 auto" }}>
              Three pillars of care, designed to fit around your ambition.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "32px",
            }}
          >
            {features.map((feature, i) => (
              <div
                key={i}
                className="card-walnut"
                style={{ padding: "0", overflow: "hidden" }}
              >
                {/* Card image area */}
                <div
                  style={{
                    height: "200px",
                    background:
                      i === 0
                        ? "linear-gradient(135deg, #4A7C8E22 0%, #4A7C8E44 100%)"
                        : i === 1
                        ? "linear-gradient(135deg, #B8E04022 0%, #B8E04044 100%)"
                        : "linear-gradient(135deg, #8E6E4A22 0%, #8E6E4A44 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: i === 0 ? "#4A7C8E" : i === 1 ? "#8EB830" : "#8E6E4A",
                    fontSize: "56px",
                  }}
                >
                  {i === 0 ? "🧠" : i === 1 ? "📖" : "👥"}
                </div>

                <div style={{ padding: "24px" }}>
                  <h3
                    style={{
                      fontSize: "17px",
                      fontWeight: 700,
                      color: "var(--color-text)",
                      marginBottom: "16px",
                      lineHeight: 1.4,
                    }}
                  >
                    {feature.title}
                  </h3>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                    {feature.points.map((point, j) => (
                      <li
                        key={j}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "10px",
                          fontSize: "14px",
                          color: "var(--color-text-muted)",
                        }}
                      >
                        <span
                          style={{
                            width: "18px",
                            height: "18px",
                            borderRadius: "50%",
                            background: "var(--color-lime)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            marginTop: "1px",
                            fontSize: "11px",
                          }}
                        >
                          ✓
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================
          STATISTICS SECTION
      ======================== */}
      <section
        className="section-padded"
        style={{ background: "var(--color-surface-green)" }}
      >
        <div className="container-walnut">
          <p
            style={{
              textAlign: "center",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--color-text-muted)",
              marginBottom: "48px",
            }}
          >
            Mental Health shouldn't be a privilege
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.6fr 1fr",
              gap: "32px",
              alignItems: "center",
            }}
          >
            <p
              style={{
                fontFamily: "Instrument Serif, Georgia, serif",
                fontSize: "clamp(20px, 2.5vw, 28px)",
                color: "var(--color-text-muted)",
                lineHeight: 1.4,
                fontStyle: "italic",
              }}
            >
              1 in 5 women compared with 1 in 8 men have a mental disorder.
            </p>

            <p
              style={{
                fontFamily: "Instrument Serif, Georgia, serif",
                fontSize: "clamp(28px, 4vw, 48px)",
                color: "var(--color-text)",
                lineHeight: 1.2,
                textAlign: "center",
                fontStyle: "italic",
              }}
            >
              53% of women who have mental health problems have also experienced
              abuse.
            </p>

            <p
              style={{
                fontFamily: "Instrument Serif, Georgia, serif",
                fontSize: "clamp(20px, 2.5vw, 28px)",
                color: "var(--color-text-muted)",
                lineHeight: 1.4,
                textAlign: "right",
                fontStyle: "italic",
              }}
            >
              Women are twice as likely to be diagnosed with anxiety as men.
            </p>
          </div>

          <div
            style={{
              textAlign: "center",
              marginTop: "48px",
              padding: "24px",
              background: "rgba(255,255,255,0.4)",
              borderRadius: "16px",
            }}
          >
            <p
              style={{
                fontSize: "15px",
                fontWeight: 600,
                color: "var(--color-text)",
                marginBottom: "24px",
              }}
            >
              10% of all profits go towards funding group training at
              non-profit mental health organisations worldwide.
            </p>

            <div style={{ display: "flex", gap: "24px", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
              {["The Center for Victims of Torture", "War Child", "Mind"].map((org) => (
                <div
                  key={org}
                  style={{
                    padding: "10px 20px",
                    border: "1.5px solid var(--color-border)",
                    borderRadius: "8px",
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "var(--color-text-muted)",
                    background: "white",
                  }}
                >
                  {org}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================
          HOW IT WORKS
      ======================== */}
      <section className="section-padded" style={{ background: "var(--color-background)" }}>
        <div className="container-walnut">
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <h2
              style={{
                fontFamily: "Instrument Serif, Georgia, serif",
                fontSize: "clamp(28px, 4vw, 44px)",
                lineHeight: 1.15,
                marginBottom: "16px",
              }}
            >
              From conversation to care
              <br />
              <span style={{ color: "var(--color-text-muted)", fontStyle: "italic" }}>
                in under 48 hours.
              </span>
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "32px",
            }}
          >
            {[
              {
                step: "01",
                title: "Tell us about yourself",
                description:
                  "Our AI-guided onboarding asks the right questions about your goals, challenges, and preferences.",
                icon: "💬",
              },
              {
                step: "02",
                title: "We build your care profile",
                description:
                  "Our matching algorithm considers your therapeutic approach preferences, budget, and availability.",
                icon: "🎯",
              },
              {
                step: "03",
                title: "Review your matches",
                description:
                  "See curated therapist profiles, peer circles, and group sessions — all explained by fit.",
                icon: "✨",
              },
              {
                step: "04",
                title: "Start your journey",
                description:
                  "Book your first session within 48 hours. Your care team stays consistent from day one.",
                icon: "🌱",
              },
            ].map((item) => (
              <div
                key={item.step}
                style={{
                  position: "relative",
                  padding: "32px 24px",
                  background: "white",
                  borderRadius: "16px",
                  border: "1px solid var(--color-border-light)",
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
                    letterSpacing: "0.05em",
                    padding: "4px 10px",
                    borderRadius: "0 0 8px 8px",
                  }}
                >
                  {item.step}
                </div>
                <div style={{ fontSize: "40px", marginBottom: "16px", marginTop: "8px" }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: "17px", fontWeight: 700, marginBottom: "10px" }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: "14px", color: "var(--color-text-muted)", lineHeight: 1.6 }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================
          TESTIMONIALS
      ======================== */}
      <section className="section-padded" style={{ background: "var(--color-surface)" }}>
        <div className="container-walnut">
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <h2
              style={{
                fontFamily: "Instrument Serif, Georgia, serif",
                fontSize: "clamp(28px, 4vw, 44px)",
                lineHeight: 1.15,
              }}
            >
              People like you, finding their way back.
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
            }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                style={{
                  background: "white",
                  border: "1px solid var(--color-border-light)",
                  borderRadius: "16px",
                  padding: "28px",
                  boxShadow: "var(--shadow-card)",
                }}
              >
                <div style={{ display: "flex", gap: "4px", marginBottom: "16px" }}>
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} size={14} fill="#B8E040" color="#B8E040" />
                  ))}
                </div>
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.7,
                    color: "var(--color-text)",
                    marginBottom: "20px",
                    fontStyle: "italic",
                  }}
                >
                  "{t.quote}"
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      background: t.color,
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "13px",
                      fontWeight: 700,
                      flexShrink: 0,
                    }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: 600, color: "var(--color-text)" }}>
                      {t.author}
                    </div>
                    <div style={{ fontSize: "13px", color: "var(--color-text-muted)" }}>
                      {t.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================
          FINAL CTA
      ======================== */}
      <section
        className="section-padded"
        style={{ background: "white", textAlign: "center" }}
      >
        <div className="container-walnut">
          <h2
            style={{
              fontFamily: "Instrument Serif, Georgia, serif",
              fontSize: "clamp(28px, 5vw, 56px)",
              lineHeight: 1.15,
              marginBottom: "32px",
              maxWidth: "700px",
              margin: "0 auto 32px",
              fontStyle: "italic",
            }}
          >
            Stop struggling under the weight of your own ambition, alone.
          </h2>

          <Link href="/onboarding" className="btn-lime" style={{ fontSize: "16px", padding: "16px 36px" }}>
            Get an invite to the beta{" "}
            <span
              style={{
                background: "rgba(30,28,24,0.15)",
                borderRadius: "50%",
                width: "24px",
                height: "24px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "14px",
              }}
            >
              →
            </span>
          </Link>

          <p
            style={{
              marginTop: "16px",
              fontSize: "13px",
              color: "var(--color-text-faint)",
            }}
          >
            No credit card required. Cancel anytime.
          </p>
        </div>
      </section>
    </div>
  );
}
