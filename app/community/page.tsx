import Link from "next/link";
import { communityTopics, communityPosts } from "@/lib/mockData";
import { Shield, Users, MessageCircle, Heart, CheckCircle2, Pin, ArrowRight } from "lucide-react";

export default function CommunityPage() {
  return (
    <div style={{ background: "var(--color-background)" }}>
      {/* Hero */}
      <section
        style={{
          background: "var(--color-charcoal)",
          padding: "72px 24px 64px",
          textAlign: "center",
        }}
      >
        <div className="container-walnut" style={{ maxWidth: "680px" }}>
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
            <Shield size={13} />
            Moderated · Privacy-first · Professionally supported
          </div>

          <h1
            style={{
              fontFamily: "Instrument Serif, Georgia, serif",
              fontSize: "clamp(32px, 5vw, 56px)",
              lineHeight: 1.1,
              color: "var(--color-background)",
              marginBottom: "20px",
              fontStyle: "italic",
            }}
          >
            You're not alone in this.
          </h1>

          <p style={{ fontSize: "17px", color: "rgba(247,245,240,0.65)", lineHeight: 1.7, maxWidth: "540px", margin: "0 auto 32px" }}>
            A safe, moderated community where ambitious professionals talk honestly about mental health — without it affecting their careers.
          </p>

          <div style={{ display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap" }}>
            {[
              { icon: <Users size={16} />, value: "12,400+", label: "Members" },
              { icon: <MessageCircle size={16} />, value: "3,200+", label: "Discussions" },
              { icon: <Shield size={16} />, value: "100%", label: "Anonymous option" },
            ].map((stat) => (
              <div key={stat.label} style={{ display: "flex", alignItems: "center", gap: "8px", color: "rgba(247,245,240,0.75)", fontSize: "14px" }}>
                <span style={{ color: "#B8E040" }}>{stat.icon}</span>
                <strong style={{ color: "rgba(247,245,240,0.95)" }}>{stat.value}</strong>
                {stat.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust indicators */}
      <div style={{ background: "var(--color-surface-green)", padding: "20px 24px" }}>
        <div className="container-walnut">
          <div style={{ display: "flex", gap: "24px", flexWrap: "wrap", justifyContent: "center" }}>
            {[
              "All posts reviewed by trained moderators",
              "Share anonymously or under your handle",
              "Clinical team monitors for crisis content",
              "No employer access — ever",
            ].map((trust) => (
              <div key={trust} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "var(--color-success)", fontWeight: 600 }}>
                <CheckCircle2 size={14} />
                {trust}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container-walnut" style={{ padding: "48px 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: "40px", alignItems: "start" }}>
          {/* Main content */}
          <div>
            {/* Topics */}
            <section style={{ marginBottom: "48px" }}>
              <h2
                style={{
                  fontFamily: "Instrument Serif, Georgia, serif",
                  fontSize: "clamp(22px, 3vw, 30px)",
                  marginBottom: "20px",
                }}
              >
                Discussion Topics
              </h2>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {communityTopics.map((topic) => (
                  <div
                    key={topic.id}
                    className="card-walnut"
                    style={{
                      padding: "20px 24px",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                    }}
                    data-testid={`topic-card-${topic.id}`}
                  >
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "12px",
                        background: "var(--color-surface)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "22px",
                        flexShrink: 0,
                      }}
                    >
                      {topic.icon}
                    </div>

                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                        <h3 style={{ fontSize: "15px", fontWeight: 700, color: "var(--color-text)" }}>
                          {topic.title}
                        </h3>
                        {topic.pinned && (
                          <span
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "4px",
                              fontSize: "11px",
                              fontWeight: 600,
                              color: "var(--color-amber)",
                              background: "rgba(201,152,90,0.12)",
                              padding: "2px 8px",
                              borderRadius: "999px",
                            }}
                          >
                            <Pin size={10} />
                            Pinned
                          </span>
                        )}
                      </div>
                      <p style={{ fontSize: "13px", color: "var(--color-text-muted)", margin: "0 0 8px" }}>
                        {topic.description}
                      </p>
                      <div style={{ display: "flex", gap: "16px" }}>
                        <span style={{ fontSize: "12px", color: "var(--color-text-faint)" }}>
                          {topic.posts.toLocaleString()} posts
                        </span>
                        <span style={{ fontSize: "12px", color: "var(--color-text-faint)" }}>
                          {topic.members.toLocaleString()} members
                        </span>
                        <span
                          style={{
                            fontSize: "11px",
                            background: "var(--color-surface-alt)",
                            padding: "2px 8px",
                            borderRadius: "999px",
                            color: "var(--color-text-muted)",
                            fontWeight: 500,
                          }}
                        >
                          {topic.category}
                        </span>
                      </div>
                    </div>

                    <ArrowRight size={16} color="var(--color-text-faint)" />
                  </div>
                ))}
              </div>
            </section>

            {/* Featured posts */}
            <section>
              <h2
                style={{
                  fontFamily: "Instrument Serif, Georgia, serif",
                  fontSize: "clamp(22px, 3vw, 30px)",
                  marginBottom: "20px",
                }}
              >
                Featured Discussions
              </h2>

              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {communityPosts.map((post) => (
                  <div
                    key={post.id}
                    style={{
                      background: "white",
                      border: "1px solid var(--color-border-light)",
                      borderRadius: "16px",
                      padding: "24px",
                      boxShadow: "var(--shadow-card)",
                      cursor: "pointer",
                      transition: "box-shadow 0.2s ease",
                    }}
                    data-testid={`post-card-${post.id}`}
                  >
                    <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                      <div
                        style={{
                          width: "38px",
                          height: "38px",
                          borderRadius: "50%",
                          background: post.authorColor,
                          color: "white",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "13px",
                          fontWeight: 700,
                          flexShrink: 0,
                        }}
                      >
                        {post.authorInitials}
                      </div>

                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px", flexWrap: "wrap" }}>
                          <span style={{ fontSize: "13px", fontWeight: 600, color: "var(--color-text)" }}>
                            {post.author}
                          </span>
                          {post.verified && (
                            <span className="trust-badge" style={{ fontSize: "11px" }}>
                              <CheckCircle2 size={10} />
                              Verified member
                            </span>
                          )}
                          <span style={{ fontSize: "12px", color: "var(--color-text-faint)", marginLeft: "auto" }}>
                            {post.timeAgo}
                          </span>
                        </div>

                        <h3 style={{ fontSize: "16px", fontWeight: 700, color: "var(--color-text)", marginBottom: "8px", lineHeight: 1.4 }}>
                          {post.title}
                        </h3>

                        <p style={{ fontSize: "14px", color: "var(--color-text-muted)", lineHeight: 1.6, marginBottom: "12px" }}>
                          {post.preview}
                        </p>

                        <div style={{ display: "flex", gap: "6px", marginBottom: "12px", flexWrap: "wrap" }}>
                          {post.tags.map((tag) => (
                            <span
                              key={tag}
                              style={{
                                background: "var(--color-surface)",
                                border: "1px solid var(--color-border-light)",
                                borderRadius: "999px",
                                padding: "2px 10px",
                                fontSize: "11px",
                                color: "var(--color-text-muted)",
                              }}
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>

                        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                          <button
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "6px",
                              background: "none",
                              border: "none",
                              fontSize: "13px",
                              color: "var(--color-text-muted)",
                              cursor: "pointer",
                              padding: "4px 0",
                            }}
                          >
                            <Heart size={14} />
                            {post.likes}
                          </button>
                          <button
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "6px",
                              background: "none",
                              border: "none",
                              fontSize: "13px",
                              color: "var(--color-text-muted)",
                              cursor: "pointer",
                              padding: "4px 0",
                            }}
                          >
                            <MessageCircle size={14} />
                            {post.replies} replies
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside style={{ display: "flex", flexDirection: "column", gap: "24px", position: "sticky", top: "88px" }}>
            {/* Join CTA */}
            <div
              style={{
                background: "var(--color-charcoal)",
                borderRadius: "16px",
                padding: "28px",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "32px", marginBottom: "12px" }}>🌰</div>
              <h3
                style={{
                  fontFamily: "Instrument Serif, Georgia, serif",
                  fontSize: "20px",
                  color: "var(--color-background)",
                  marginBottom: "8px",
                  fontStyle: "italic",
                }}
              >
                Join the community
              </h3>
              <p style={{ fontSize: "13px", color: "rgba(247,245,240,0.6)", lineHeight: 1.6, marginBottom: "20px" }}>
                Your posts can be fully anonymous. No employer will ever see your activity.
              </p>
              <Link href="/onboarding" className="btn-lime" style={{ width: "100%", justifyContent: "center" }}>
                Get started →
              </Link>
            </div>

            {/* Moderation notice */}
            <div
              style={{
                background: "var(--color-surface-green)",
                borderRadius: "16px",
                padding: "24px",
                border: "1px solid rgba(90,138,60,0.2)",
              }}
            >
              <div style={{ display: "flex", gap: "10px", marginBottom: "12px" }}>
                <Shield size={18} style={{ color: "var(--color-success)", flexShrink: 0 }} />
                <h4 style={{ fontSize: "14px", fontWeight: 700, color: "var(--color-text)" }}>
                  How we keep this safe
                </h4>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                {[
                  "Trained volunteer moderators active 24/7",
                  "AI-assisted content review",
                  "Immediate crisis escalation pathway",
                  "Zero tolerance for harmful content",
                ].map((item) => (
                  <li key={item} style={{ display: "flex", gap: "8px", fontSize: "13px", color: "var(--color-text-muted)" }}>
                    <CheckCircle2 size={13} style={{ color: "var(--color-success)", flexShrink: 0, marginTop: "2px" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Crisis support */}
            <div
              style={{
                background: "white",
                border: "1px solid var(--color-border-light)",
                borderRadius: "16px",
                padding: "20px",
              }}
            >
              <p style={{ fontSize: "13px", fontWeight: 700, color: "var(--color-text)", marginBottom: "8px" }}>
                In crisis or need immediate help?
              </p>
              <p style={{ fontSize: "12px", color: "var(--color-text-muted)", lineHeight: 1.6, marginBottom: "12px" }}>
                Please reach out to a crisis line or our care team directly.
              </p>
              <a
                href="https://www.samaritans.org"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  textAlign: "center",
                  padding: "10px",
                  background: "var(--color-surface)",
                  borderRadius: "10px",
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "var(--color-text)",
                  textDecoration: "none",
                }}
              >
                Samaritans: 116 123
              </a>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
