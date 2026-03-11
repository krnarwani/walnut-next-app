"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import WalnutLogo from "@/components/WalnutLogo";
import { ArrowRight, ChevronRight } from "lucide-react";

// ============================
// ONBOARDING FLOW DEFINITION
// ============================
interface OnboardingStep {
  id: string;
  assistantMessage: string;
  inputType: "chips" | "text" | "scale" | "confirm";
  options?: string[];
  placeholder?: string;
  multi?: boolean;
  key: string;
  followUp?: (answer: string | string[]) => string;
}

const onboardingSteps: OnboardingStep[] = [
  {
    id: "welcome",
    assistantMessage:
      "Hi, I'm here to help you find the right support. Before we match you with a therapist or care pathway, I'd like to understand what's going on for you. Everything you share is completely private.\n\nTo start — what's brought you here today?",
    inputType: "chips",
    options: [
      "Work stress & burnout",
      "Anxiety or worry",
      "Low mood or depression",
      "Relationship difficulties",
      "A major life change",
      "I'm not sure yet",
      "Something else",
    ],
    multi: false,
    key: "primary_reason",
  },
  {
    id: "duration",
    assistantMessage:
      "Thanks for sharing that. It takes real courage to take this step.\n\nHow long have you been feeling this way?",
    inputType: "chips",
    options: [
      "Just recently (days or weeks)",
      "A few months",
      "Six months to a year",
      "Over a year",
      "It comes and goes",
    ],
    multi: false,
    key: "duration",
  },
  {
    id: "urgency",
    assistantMessage:
      "I want to make sure we match you at the right pace. How urgently do you feel you need support?",
    inputType: "chips",
    options: [
      "I need help as soon as possible",
      "Within the next few weeks",
      "I'm exploring my options",
      "Just curious for now",
    ],
    multi: false,
    key: "urgency",
  },
  {
    id: "goals",
    assistantMessage:
      "What would feel like progress to you? What are you hoping support will help you achieve? You can choose more than one.",
    inputType: "chips",
    options: [
      "Feel less anxious day-to-day",
      "Regain my sense of purpose",
      "Improve my work-life balance",
      "Have better relationships",
      "Build resilience and coping tools",
      "Understand myself better",
      "Address a specific past event",
    ],
    multi: true,
    key: "goals",
  },
  {
    id: "therapist_prefs",
    assistantMessage:
      "When you imagine your ideal therapist, what matters most to you? (Select up to 3)",
    inputType: "chips",
    options: [
      "Evidence-based (CBT, ACT)",
      "Warm and empathetic",
      "Direct and solution-focused",
      "Culturally aware",
      "Shared lived experience",
      "Medical/clinical background",
      "Mindfulness-focused",
    ],
    multi: true,
    key: "therapist_traits",
  },
  {
    id: "format",
    assistantMessage:
      "How would you prefer to meet? And are you open to peer support alongside individual sessions?",
    inputType: "chips",
    options: [
      "Video sessions (online)",
      "In-person sessions",
      "Either works for me",
      "Phone only",
    ],
    multi: false,
    key: "session_format",
  },
  {
    id: "peer",
    assistantMessage:
      "Many professionals find that peer circles — small, facilitated groups of people navigating similar challenges — are a powerful complement to 1:1 therapy.\n\nWould you be open to exploring peer support?",
    inputType: "chips",
    options: [
      "Yes, I'm interested",
      "Maybe — tell me more",
      "I prefer 1:1 for now",
      "No, not for me",
    ],
    multi: false,
    key: "peer_interest",
  },
  {
    id: "budget",
    assistantMessage:
      "To make sure your matches are realistic, what's your approximate weekly budget for mental health support?",
    inputType: "chips",
    options: [
      "Up to £50/week",
      "£50–100/week",
      "£100–200/week",
      "Not sure — show me options",
      "My employer covers this",
    ],
    multi: false,
    key: "budget",
  },
  {
    id: "anything_else",
    assistantMessage:
      "Almost there. Is there anything specific you'd like your therapist to know about you that would help us find the right match?",
    inputType: "text",
    placeholder:
      "E.g. I've tried therapy before and found X helpful… I prefer someone who… etc.",
    key: "additional_notes",
  },
];

const summaryMessages = [
  "Thank you for sharing all of that. You've given me a clear picture of where you are and what you need.",
  "Based on what you've told me, I've identified your care pathway and matched you with three therapists who are an excellent fit.",
  "Here's a summary of your profile:",
];

// ============================
// TYPES
// ============================
interface Message {
  id: string;
  role: "assistant" | "user";
  content: string;
  type?: "summary";
}

// ============================
// COMPONENT
// ============================
export default function OnboardingPage() {
  const router = useRouter();
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content: onboardingSteps[0].assistantMessage,
    },
  ]);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [selectedChips, setSelectedChips] = useState<string[]>([]);
  const [textInput, setTextInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [userProfile, setUserProfile] = useState<Record<string, string | string[]>>({});
  const chatEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const progress = Math.round(((currentStepIndex) / onboardingSteps.length) * 100);

  // ---- Scroll to bottom ----
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // ---- Handle chip toggle ----
  const toggleChip = (option: string) => {
    const step = onboardingSteps[currentStepIndex];
    if (step.multi) {
      setSelectedChips((prev) =>
        prev.includes(option) ? prev.filter((c) => c !== option) : [...prev, option]
      );
    } else {
      setSelectedChips([option]);
    }
  };

  // ---- Submit answer ----
  const submitAnswer = async (answer: string | string[]) => {
    const step = onboardingSteps[currentStepIndex];
    const answerText = Array.isArray(answer) ? answer.join(", ") : answer;

    if (!answerText.trim()) return;

    // Add user message
    const userMsg: Message = {
      id: `user-${currentStepIndex}`,
      role: "user",
      content: answerText,
    };
    setMessages((prev) => [...prev, userMsg]);
    setAnswers((prev) => ({ ...prev, [step.key]: answer }));
    setSelectedChips([]);
    setTextInput("");

    const nextIndex = currentStepIndex + 1;

    if (nextIndex >= onboardingSteps.length) {
      // Show completion
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        summaryMessages.forEach((msg, i) => {
          setTimeout(() => {
            setMessages((prev) => [
              ...prev,
              {
                id: `summary-${i}`,
                role: "assistant",
                content: msg,
                type: i === 2 ? "summary" : undefined,
              },
            ]);
          }, i * 800);
        });
        setTimeout(() => {
          setIsDone(true);
          setUserProfile({ ...answers, [step.key]: answer });
        }, summaryMessages.length * 800 + 400);
      }, 1200);
    } else {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setCurrentStepIndex(nextIndex);
        setMessages((prev) => [
          ...prev,
          {
            id: `assistant-${nextIndex}`,
            role: "assistant",
            content: onboardingSteps[nextIndex].assistantMessage,
          },
        ]);
      }, 1100);
    }
  };

  const handleSubmit = () => {
    const step = onboardingSteps[currentStepIndex];
    if (step.inputType === "text") {
      submitAnswer(textInput || "I'd prefer to share as we go");
    } else {
      submitAnswer(selectedChips);
    }
  };

  const goToMatches = () => {
    // Store profile in sessionStorage is blocked, but we navigate with a param
    router.push("/matches?from=onboarding");
  };

  const currentStep = onboardingSteps[currentStepIndex];

  return (
    <div
      style={{
        background: "var(--color-background)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Progress header */}
      <div
        style={{
          background: "white",
          borderBottom: "1px solid var(--color-border-light)",
          padding: "16px 24px",
        }}
      >
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
            <p style={{ fontSize: "13px", fontWeight: 600, color: "var(--color-text-muted)" }}>
              {isDone ? "Profile complete ✓" : `Step ${Math.min(currentStepIndex + 1, onboardingSteps.length)} of ${onboardingSteps.length}`}
            </p>
            <p style={{ fontSize: "13px", color: "var(--color-text-faint)" }}>
              {isDone ? "100%" : `${progress}%`}
            </p>
          </div>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${isDone ? 100 : progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Chat area */}
      <div
        style={{
          padding: "28px 24px 40px",
          maxWidth: "720px",
          width: "100%",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          minHeight: "360px",
        }}
      >
        {messages.map((msg, i) => (
          <div
            key={msg.id}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: msg.role === "user" ? "flex-end" : "flex-start",
              animationDelay: `${i * 0.05}s`,
            }}
            className="animate-fade-in-up"
          >
            {msg.role === "assistant" && (
              <div style={{ display: "flex", alignItems: "flex-end", gap: "10px" }}>
                {/* Assistant avatar */}
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    background: "var(--color-charcoal)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    fontSize: "14px",
                  }}
                >
                  🌰
                </div>
                <div className="bubble-assistant">
                  {msg.type === "summary" ? (
                    <SummaryCard answers={answers} />
                  ) : (
                    <p
                      style={{
                        fontSize: "15px",
                        lineHeight: 1.7,
                        color: "var(--color-text)",
                        whiteSpace: "pre-line",
                        margin: 0,
                      }}
                    >
                      {msg.content}
                    </p>
                  )}
                </div>
              </div>
            )}

            {msg.role === "user" && (
              <div className="bubble-user">
                <p style={{ fontSize: "15px", lineHeight: 1.6, margin: 0 }}>{msg.content}</p>
              </div>
            )}
          </div>
        ))}

        {/* Typing indicator */}
        {isTyping && (
          <div style={{ display: "flex", alignItems: "flex-end", gap: "10px" }}>
            <div
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                background: "var(--color-charcoal)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                fontSize: "14px",
              }}
            >
              🌰
            </div>
            <div className="bubble-assistant" style={{ padding: "14px 18px" }}>
              <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
                <div className="typing-dot" />
                <div className="typing-dot" />
                <div className="typing-dot" />
              </div>
            </div>
          </div>
        )}

        {!isDone && messages.length < 3 && (
          <div
            style={{
              marginTop: "8px",
              padding: "16px 18px",
              borderRadius: "16px",
              background: "var(--color-surface-green)",
              border: "1px solid rgba(90,138,60,0.14)",
              maxWidth: "520px",
            }}
          >
            <p style={{ margin: 0, fontSize: "14px", color: "var(--color-text-muted)", lineHeight: 1.6 }}>
              Your answers stay private and are only used to shape therapist, peer-circle, and care-pathway recommendations.
            </p>
          </div>
        )}

        <div ref={chatEndRef} />
      </div>

      {/* Input area */}
      {!isDone && !isTyping && (
        <div
          style={{
            background: "white",
            borderTop: "1px solid var(--color-border-light)",
            padding: "20px 24px 24px",
          }}
        >
          <div style={{ maxWidth: "720px", margin: "0 auto" }}>
            {currentStep.inputType === "chips" && (
              <>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                    marginBottom: "16px",
                  }}
                >
                  {currentStep.options?.map((option) => (
                    <button
                      key={option}
                      className={`chip ${selectedChips.includes(option) ? "selected" : ""}`}
                      onClick={() => toggleChip(option)}
                      data-testid={`chip-${option.replace(/\s+/g, "-").toLowerCase()}`}
                    >
                      {selectedChips.includes(option) && (
                        <span style={{ marginRight: "4px" }}>✓</span>
                      )}
                      {option}
                    </button>
                  ))}
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <button
                    className="btn-lime"
                    onClick={handleSubmit}
                    disabled={selectedChips.length === 0}
                    style={{
                      opacity: selectedChips.length === 0 ? 0.4 : 1,
                      cursor: selectedChips.length === 0 ? "not-allowed" : "pointer",
                    }}
                    data-testid="btn-submit-answer"
                  >
                    Continue
                    <ArrowRight size={16} />
                  </button>
                </div>
              </>
            )}

            {currentStep.inputType === "text" && (
              <>
                <textarea
                  ref={inputRef}
                  value={textInput}
                  onChange={(e) => setTextInput(e.target.value)}
                  placeholder={currentStep.placeholder}
                  rows={3}
                  style={{
                    width: "100%",
                    padding: "14px 16px",
                    border: "1.5px solid var(--color-border)",
                    borderRadius: "12px",
                    fontSize: "15px",
                    fontFamily: "DM Sans, sans-serif",
                    color: "var(--color-text)",
                    background: "var(--color-surface)",
                    resize: "none",
                    outline: "none",
                    marginBottom: "12px",
                    transition: "border-color 0.15s ease",
                    lineHeight: 1.6,
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "var(--color-charcoal)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--color-border)")}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleSubmit();
                    }
                  }}
                  data-testid="input-additional-notes"
                />
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <button
                    onClick={() => submitAnswer("I'd prefer to share as we go")}
                    style={{
                      background: "none",
                      border: "none",
                      fontSize: "14px",
                      color: "var(--color-text-muted)",
                      cursor: "pointer",
                      textDecoration: "underline",
                    }}
                  >
                    Skip this question
                  </button>
                  <button className="btn-lime" onClick={handleSubmit} data-testid="btn-submit-text">
                    Continue <ArrowRight size={16} />
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Completion CTA */}
      {isDone && (
        <div
          style={{
            background: "white",
            borderTop: "1px solid var(--color-border-light)",
            padding: "24px",
          }}
          className="animate-fade-in-up"
        >
          <div style={{ maxWidth: "720px", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
            <p style={{ fontSize: "15px", color: "var(--color-text-muted)", textAlign: "center" }}>
              We've found 3 therapists and 2 peer circles that match your profile.
            </p>
            <button
              className="btn-lime"
              onClick={goToMatches}
              style={{ fontSize: "16px", padding: "14px 32px" }}
              data-testid="btn-view-matches"
            >
              View my matches
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// ============================
// SUMMARY CARD (shown at end)
// ============================
function SummaryCard({ answers }: { answers: Record<string, string | string[]> }) {
  const items = [
    { label: "Primary concern", key: "primary_reason" },
    { label: "Duration", key: "duration" },
    { label: "Goals", key: "goals" },
    { label: "Therapist preferences", key: "therapist_traits" },
    { label: "Session format", key: "session_format" },
    { label: "Budget", key: "budget" },
  ];

  return (
    <div>
      <p
        style={{
          fontSize: "15px",
          lineHeight: 1.7,
          color: "var(--color-text)",
          marginBottom: "16px",
        }}
      >
        Here's a summary of your profile:
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {items.map((item) => {
          const val = answers[item.key];
          if (!val) return null;
          return (
            <div
              key={item.key}
              style={{
                display: "flex",
                gap: "12px",
                padding: "10px 14px",
                background: "var(--color-surface)",
                borderRadius: "10px",
              }}
            >
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "var(--color-text-muted)",
                  minWidth: "140px",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  paddingTop: "2px",
                }}
              >
                {item.label}
              </span>
              <span
                style={{
                  fontSize: "14px",
                  color: "var(--color-text)",
                  lineHeight: 1.5,
                }}
              >
                {Array.isArray(val) ? val.join(" · ") : val}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
