import Link from "next/link";
import { therapists, peerCircles, groupSessions } from "@/lib/mockData";
import type { Therapist, PeerCircle, GroupSession } from "@/lib/mockData";
import { CheckCircle2, Video, MapPin, Phone, Clock, Users, Calendar, ChevronRight, Star } from "lucide-react";

function TherapistCard({ therapist, rank }: { therapist: Therapist; rank: number }) {
  const formatIcons: Record<string, React.ReactNode> = {
    video: <Video size={13} />,
    "in-person": <MapPin size={13} />,
    phone: <Phone size={13} />,
  };

  const availabilityColor =
    therapist.availability === "this week"
      ? "var(--color-success)"
      : therapist.availability === "next week"
      ? "var(--color-warning)"
      : "var(--color-text-muted)";

  return (
    <div
      style={{
        background: "white",
        border: rank === 1 ? "2px solid var(--color-lime)" : "1px solid var(--color-border-light)",
        borderRadius: "20px",
        padding: "28px",
        boxShadow: rank === 1 ? "0 6px 32px rgba(184,224,64,0.15)" : "var(--shadow-card)",
        position: "relative",
        transition: "box-shadow 0.2s ease, transform 0.2s ease",
      }}
      data-testid={`therapist-card-${therapist.id}`}
    >
      {rank === 1 && (
        <div
          style={{
            position: "absolute",
            top: "-1px",
            left: "28px",
            background: "var(--color-lime)",
            color: "var(--color-charcoal)",
            fontSize: "11px",
            fontWeight: 800,
            letterSpacing: "0.06em",
            padding: "4px 12px",
            borderRadius: "0 0 10px 10px",
            textTransform: "uppercase",
          }}
        >
          Best Match
        </div>
      )}

      <div style={{ display: "flex", gap: "16px", alignItems: "flex-start", marginTop: rank === 1 ? "12px" : "0" }}>
        {/* Avatar */}
        <div
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            background: therapist.avatarColor,
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "17px",
            fontWeight: 700,
            flexShrink: 0,
          }}
        >
          {therapist.avatar}
        </div>

        {/* Info */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px" }}>
            <div>
              <h3 style={{ fontSize: "18px", fontWeight: 700, color: "var(--color-text)", marginBottom: "2px" }}>
                {therapist.name}
              </h3>
              <p style={{ fontSize: "14px", color: "var(--color-text-muted)" }}>{therapist.title}</p>
            </div>
            {/* Match score */}
            <div className="match-score">{therapist.matchScore}%</div>
          </div>

          {/* Badges */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", margin: "12px 0" }}>
            {therapist.badges.map((badge) => (
              <span
                key={badge}
                className="trust-badge"
                style={{ fontSize: "12px" }}
              >
                <CheckCircle2 size={11} />
                {badge}
              </span>
            ))}
          </div>

          {/* Specializations */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "16px" }}>
            {therapist.specializations.map((s) => (
              <span
                key={s}
                style={{
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border-light)",
                  borderRadius: "999px",
                  padding: "3px 10px",
                  fontSize: "12px",
                  color: "var(--color-text-muted)",
                  fontWeight: 500,
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bio */}
      <p style={{ fontSize: "14px", color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "20px" }}>
        {therapist.bio}
      </p>

      {/* Match reasons */}
      <div
        style={{
          background: "var(--color-surface)",
          borderRadius: "12px",
          padding: "16px",
          marginBottom: "20px",
        }}
      >
        <p style={{ fontSize: "12px", fontWeight: 700, color: "var(--color-text)", marginBottom: "10px", textTransform: "uppercase", letterSpacing: "0.06em" }}>
          Why this match
        </p>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
          {therapist.matchReasons.map((reason, i) => (
            <li key={i} style={{ display: "flex", gap: "8px", fontSize: "13px", color: "var(--color-text-muted)" }}>
              <span style={{ color: "#8EB830", flexShrink: 0, marginTop: "1px" }}>✓</span>
              {reason}
            </li>
          ))}
        </ul>
      </div>

      {/* Footer */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px",
          paddingTop: "16px",
          borderTop: "1px solid var(--color-border-light)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <span style={{ fontSize: "13px", fontWeight: 700, color: "var(--color-text)" }}>
              {therapist.priceRange}
            </span>
            <span style={{ display: "flex", gap: "6px" }}>
              {therapist.sessionFormats.map((f) => (
                <span
                  key={f}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                    fontSize: "12px",
                    color: "var(--color-text-muted)",
                  }}
                >
                  {formatIcons[f]}{f}
                </span>
              ))}
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <Clock size={12} style={{ color: availabilityColor }} />
            <span style={{ fontSize: "12px", color: availabilityColor, fontWeight: 600 }}>
              Available {therapist.availability}
            </span>
          </div>
        </div>

        <div style={{ display: "flex", gap: "10px" }}>
          <button
            className="btn-outline"
            style={{ padding: "9px 18px", fontSize: "13px" }}
            data-testid={`btn-view-profile-${therapist.id}`}
          >
            View profile
          </button>
          <button
            className="btn-lime"
            style={{ padding: "9px 18px", fontSize: "13px" }}
            data-testid={`btn-book-${therapist.id}`}
          >
            Book intro session
          </button>
        </div>
      </div>
    </div>
  );
}

function PeerCircleCard({ circle }: { circle: PeerCircle }) {
  return (
    <div
      className="card-walnut"
      style={{ padding: "24px" }}
      data-testid={`circle-card-${circle.id}`}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
        <div
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "12px",
            background: "var(--color-surface-green)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "22px",
          }}
        >
          🌀
        </div>
        <div className="match-score" style={{ width: "44px", height: "44px", fontSize: "13px" }}>
          {circle.matchScore}%
        </div>
      </div>

      <h3 style={{ fontSize: "17px", fontWeight: 700, marginBottom: "8px" }}>{circle.name}</h3>
      <p style={{ fontSize: "14px", color: "var(--color-text-muted)", lineHeight: 1.6, marginBottom: "16px" }}>
        {circle.description}
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "16px" }}>
        {circle.focus.map((f) => (
          <span
            key={f}
            style={{
              background: "var(--color-surface)",
              border: "1px solid var(--color-border-light)",
              borderRadius: "999px",
              padding: "3px 10px",
              fontSize: "12px",
              color: "var(--color-text-muted)",
            }}
          >
            {f}
          </span>
        ))}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "8px",
          marginBottom: "20px",
        }}
      >
        {[
          { icon: <Users size={13} />, label: `${circle.memberCount} members` },
          { icon: <Calendar size={13} />, label: circle.frequency },
          { icon: <Clock size={13} />, label: circle.nextSession },
          { icon: <Star size={13} />, label: circle.facilitator },
        ].map((item, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "var(--color-text-muted)" }}>
            {item.icon}
            {item.label}
          </div>
        ))}
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: "14px", fontWeight: 700, color: "var(--color-text)" }}>
          {circle.priceRange}
        </span>
        <button className="btn-lime" style={{ padding: "9px 18px", fontSize: "13px" }}>
          Join circle →
        </button>
      </div>
    </div>
  );
}

function GroupSessionCard({ session }: { session: GroupSession }) {
  const urgencyColor = session.seatsLeft <= 3 ? "var(--color-error)" : "var(--color-success)";
  return (
    <div
      className="card-walnut"
      style={{ padding: "24px" }}
      data-testid={`session-card-${session.id}`}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
        <div
          style={{
            fontSize: "11px",
            fontWeight: 700,
            color: urgencyColor,
            background: `${urgencyColor}18`,
            padding: "4px 10px",
            borderRadius: "999px",
            textTransform: "uppercase",
            letterSpacing: "0.06em",
          }}
        >
          {session.seatsLeft} seats left
        </div>
        <span style={{ fontSize: "13px", fontWeight: 700, color: "var(--color-text)" }}>
          {session.price}
        </span>
      </div>

      <h3 style={{ fontSize: "17px", fontWeight: 700, marginBottom: "8px" }}>{session.name}</h3>
      <p style={{ fontSize: "14px", color: "var(--color-text-muted)", lineHeight: 1.6, marginBottom: "16px" }}>
        {session.description}
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "20px" }}>
        {[
          `${session.date} · ${session.time}`,
          `${session.duration} per session · ${session.therapist}`,
          `${session.seats} total spots`,
        ].map((line, i) => (
          <p key={i} style={{ fontSize: "13px", color: "var(--color-text-muted)", margin: 0 }}>
            {line}
          </p>
        ))}
      </div>

      <button className="btn-dark" style={{ width: "100%", justifyContent: "center", padding: "11px" }}>
        Reserve my spot →
      </button>
    </div>
  );
}

export default function MatchesPage() {
  return (
    <div style={{ background: "var(--color-background)", minHeight: "100vh" }}>
      {/* Header */}
      <div
        style={{
          background: "white",
          borderBottom: "1px solid var(--color-border-light)",
          padding: "40px 24px 32px",
        }}
      >
        <div className="container-walnut">
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "var(--color-surface-green)",
              color: "var(--color-success)",
              fontSize: "13px",
              fontWeight: 600,
              padding: "6px 14px",
              borderRadius: "999px",
              marginBottom: "20px",
            }}
          >
            <CheckCircle2 size={14} />
            Onboarding complete — matches ready
          </div>

          <h1
            style={{
              fontFamily: "Instrument Serif, Georgia, serif",
              fontSize: "clamp(28px, 4vw, 44px)",
              lineHeight: 1.15,
              marginBottom: "12px",
            }}
          >
            Your personalised care recommendations
          </h1>

          <p style={{ fontSize: "16px", color: "var(--color-text-muted)", maxWidth: "560px" }}>
            Based on your onboarding profile, we've matched you with therapists, peer circles, and group sessions best suited to your needs and preferences.
          </p>
        </div>
      </div>

      <div className="container-walnut" style={{ padding: "48px 24px" }}>
        {/* Therapist matches */}
        <section style={{ marginBottom: "64px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "28px", flexWrap: "wrap", gap: "12px" }}>
            <div>
              <h2
                style={{
                  fontFamily: "Instrument Serif, Georgia, serif",
                  fontSize: "clamp(22px, 3vw, 32px)",
                  marginBottom: "4px",
                }}
              >
                Therapist Matches
              </h2>
              <p style={{ fontSize: "14px", color: "var(--color-text-muted)" }}>
                Ranked by compatibility with your profile
              </p>
            </div>
            <span
              style={{
                background: "var(--color-lime)",
                color: "var(--color-charcoal)",
                padding: "6px 14px",
                borderRadius: "999px",
                fontSize: "13px",
                fontWeight: 700,
              }}
            >
              3 matches found
            </span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {therapists.map((t, i) => (
              <TherapistCard key={t.id} therapist={t} rank={i + 1} />
            ))}
          </div>
        </section>

        {/* Peer circles */}
        <section style={{ marginBottom: "64px" }}>
          <div style={{ marginBottom: "28px" }}>
            <h2
              style={{
                fontFamily: "Instrument Serif, Georgia, serif",
                fontSize: "clamp(22px, 3vw, 32px)",
                marginBottom: "4px",
              }}
            >
              Peer Circle Recommendations
            </h2>
            <p style={{ fontSize: "14px", color: "var(--color-text-muted)" }}>
              Small, facilitated groups of professionals navigating similar challenges
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
            {peerCircles.map((circle) => (
              <PeerCircleCard key={circle.id} circle={circle} />
            ))}
          </div>
        </section>

        {/* Group sessions */}
        <section style={{ marginBottom: "48px" }}>
          <div style={{ marginBottom: "28px" }}>
            <h2
              style={{
                fontFamily: "Instrument Serif, Georgia, serif",
                fontSize: "clamp(22px, 3vw, 32px)",
                marginBottom: "4px",
              }}
            >
              Group Sessions
            </h2>
            <p style={{ fontSize: "14px", color: "var(--color-text-muted)" }}>
              Structured programmes at a fraction of the cost of individual therapy
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
            {groupSessions.map((session) => (
              <GroupSessionCard key={session.id} session={session} />
            ))}
          </div>
        </section>

        {/* Not right CTA */}
        <div
          style={{
            background: "white",
            border: "1px solid var(--color-border-light)",
            borderRadius: "16px",
            padding: "28px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <div>
            <p style={{ fontSize: "16px", fontWeight: 600, color: "var(--color-text)", marginBottom: "4px" }}>
              Don't see the right fit?
            </p>
            <p style={{ fontSize: "14px", color: "var(--color-text-muted)" }}>
              Update your preferences or speak to our care team for a personalised recommendation.
            </p>
          </div>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <Link href="/onboarding" className="btn-outline" style={{ padding: "10px 20px", fontSize: "14px" }}>
              Refine my preferences
            </Link>
            <button className="btn-lime" style={{ padding: "10px 20px", fontSize: "14px" }}>
              Talk to care team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
