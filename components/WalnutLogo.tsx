"use client";
import Link from "next/link";

interface WalnutLogoProps {
  variant?: "dark" | "light" | "lime";
  size?: "sm" | "md" | "lg";
  showWordmark?: boolean;
  href?: string;
}

export default function WalnutLogo({
  variant = "dark",
  size = "md",
  showWordmark = true,
  href = "/",
}: WalnutLogoProps) {
  const sizes = {
    sm: { icon: 28, text: "text-lg", gap: "gap-2" },
    md: { icon: 36, text: "text-xl", gap: "gap-2.5" },
    lg: { icon: 44, text: "text-2xl", gap: "gap-3" },
  };

  const s = sizes[size];
  const textColor =
    variant === "light" ? "#F7F5F0" : variant === "lime" ? "#B8E040" : "#1E1C18";

  const icon = (
    <svg
      width={s.icon}
      height={s.icon}
      viewBox="0 0 44 44"
      fill="none"
      aria-label="Walnut icon"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer ring */}
      <circle
        cx="22"
        cy="22"
        r="20"
        stroke={variant === "light" ? "#F7F5F0" : "#1E1C18"}
        strokeWidth="2"
        fill={variant === "light" ? "rgba(247,245,240,0.08)" : "rgba(30,28,24,0.05)"}
      />
      {/* Walnut shell shape — stylized "W" leaf form */}
      <path
        d="M12 28 C12 20, 17 14, 22 14 C27 14, 32 20, 32 28"
        stroke={variant === "light" ? "#F7F5F0" : "#1E1C18"}
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
      />
      {/* Center seam */}
      <line
        x1="22"
        y1="14"
        x2="22"
        y2="30"
        stroke={variant === "light" ? "#F7F5F0" : "#1E1C18"}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Lime accent dot */}
      <circle cx="22" cy="32" r="3.5" fill="#B8E040" />
    </svg>
  );

  const content = (
    <span
      className={`inline-flex items-center ${s.gap}`}
      style={{ textDecoration: "none" }}
    >
      {icon}
      {showWordmark && (
        <span
          style={{
            fontFamily: "Instrument Serif, Georgia, serif",
            fontSize:
              size === "sm" ? "18px" : size === "md" ? "22px" : "26px",
            color: textColor,
            letterSpacing: "-0.02em",
            lineHeight: 1,
            fontStyle: "italic",
          }}
        >
          walnut
        </span>
      )}
    </span>
  );

  if (href) {
    return (
      <Link href={href} style={{ textDecoration: "none", display: "inline-flex" }}>
        {content}
      </Link>
    );
  }
  return content;
}
