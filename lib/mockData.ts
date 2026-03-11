// ============================================
// WALNUT HEALTH — MOCK DATA
// ============================================

export interface Therapist {
  id: string;
  name: string;
  title: string;
  specializations: string[];
  languages: string[];
  sessionFormats: ("video" | "in-person" | "phone")[];
  pricingTier: "standard" | "premium" | "accessible";
  priceRange: string;
  availability: "this week" | "next week" | "2+ weeks";
  matchScore: number;
  matchReasons: string[];
  bio: string;
  yearsExperience: number;
  approach: string;
  avatar: string; // initials fallback
  avatarColor: string;
  badges: string[];
}

export interface PeerCircle {
  id: string;
  name: string;
  description: string;
  memberCount: number;
  nextSession: string;
  frequency: string;
  focus: string[];
  facilitator: string;
  priceRange: string;
  matchScore: number;
}

export interface GroupSession {
  id: string;
  name: string;
  description: string;
  seats: number;
  seatsLeft: number;
  date: string;
  time: string;
  duration: string;
  therapist: string;
  price: string;
  focus: string[];
}

export interface CommunityTopic {
  id: string;
  title: string;
  description: string;
  posts: number;
  members: number;
  icon: string;
  category: string;
  pinned?: boolean;
}

export interface CommunityPost {
  id: string;
  title: string;
  preview: string;
  author: string;
  authorInitials: string;
  authorColor: string;
  timeAgo: string;
  replies: number;
  likes: number;
  tags: string[];
  verified?: boolean;
}

// ---- THERAPISTS ----
export const therapists: Therapist[] = [
  {
    id: "t1",
    name: "Dr. Sarah Chen",
    title: "Clinical Psychologist",
    specializations: ["Workplace Burnout", "Anxiety", "High-Performance Stress", "CBT"],
    languages: ["English", "Mandarin"],
    sessionFormats: ["video", "in-person"],
    pricingTier: "premium",
    priceRange: "£120–160/session",
    availability: "this week",
    matchScore: 97,
    matchReasons: [
      "Specializes in high-achieving professional burnout",
      "Evidence-based CBT approach matches your preference",
      "Available this week for urgent support",
      "Strong track record with tech & finance professionals",
    ],
    bio: "Dr. Chen brings 12 years of experience working with ambitious professionals navigating the unique pressures of high-stakes careers. Her integrative approach combines CBT with mindfulness-based techniques.",
    yearsExperience: 12,
    approach: "CBT + Mindfulness",
    avatar: "SC",
    avatarColor: "#4A7C8E",
    badges: ["Top Rated", "CBT Certified", "Verified"],
  },
  {
    id: "t2",
    name: "Marcus Williams",
    title: "Psychotherapist & Executive Coach",
    specializations: ["Leadership Stress", "Work-Life Balance", "Imposter Syndrome", "ACT"],
    languages: ["English", "French"],
    sessionFormats: ["video", "phone"],
    pricingTier: "standard",
    priceRange: "£80–100/session",
    availability: "this week",
    matchScore: 91,
    matchReasons: [
      "Dual expertise in therapy and executive coaching",
      "Specializes in imposter syndrome — a key concern you mentioned",
      "Flexible video and phone sessions fit your schedule",
      "ACT approach aligns with your goal-oriented mindset",
    ],
    bio: "Marcus combines therapeutic depth with practical coaching tools, helping professionals cut through the noise of self-doubt and lead from a place of clarity and purpose.",
    yearsExperience: 8,
    approach: "ACT + Coaching",
    avatar: "MW",
    avatarColor: "#7C6E8E",
    badges: ["Exec Coach", "ACT Practitioner", "Verified"],
  },
  {
    id: "t3",
    name: "Dr. Priya Nair",
    title: "Psychiatrist & Therapist",
    specializations: ["Depression", "Anxiety Disorders", "Burnout Recovery", "EMDR"],
    languages: ["English", "Hindi", "Malayalam"],
    sessionFormats: ["video", "in-person"],
    pricingTier: "premium",
    priceRange: "£140–180/session",
    availability: "next week",
    matchScore: 88,
    matchReasons: [
      "Medical background for comprehensive assessment",
      "EMDR expertise for deeper trauma-informed work",
      "Multilingual for culturally sensitive care",
      "Highly experienced with professional burnout recovery",
    ],
    bio: "Dr. Nair's psychiatric background enables her to offer both therapy and clinical assessment, providing a holistic view of mental wellness that many professionals find reassuring.",
    yearsExperience: 15,
    approach: "EMDR + Integrative",
    avatar: "PN",
    avatarColor: "#8E6E4A",
    badges: ["Psychiatrist", "EMDR Certified", "Verified"],
  },
];

// ---- PEER CIRCLES ----
export const peerCircles: PeerCircle[] = [
  {
    id: "pc1",
    name: "The Ambitious & Anxious",
    description: "A safe space for high-achievers who want to address anxiety without slowing down. Weekly facilitated discussions with evidence-based tools.",
    memberCount: 12,
    nextSession: "Thursday, 7pm GMT",
    frequency: "Weekly",
    focus: ["Anxiety", "Performance", "Workplace Stress"],
    facilitator: "Dr. James Osei",
    priceRange: "£25/session",
    matchScore: 93,
  },
  {
    id: "pc2",
    name: "Leaders in Transition",
    description: "For managers, founders, and executives navigating identity shifts, leadership pressure, and the weight of responsibility.",
    memberCount: 8,
    nextSession: "Tuesday, 6:30pm GMT",
    frequency: "Bi-weekly",
    focus: ["Leadership", "Identity", "Burnout Prevention"],
    facilitator: "Aisha Thompson, BACP",
    priceRange: "£30/session",
    matchScore: 87,
  },
];

// ---- GROUP SESSIONS ----
export const groupSessions: GroupSession[] = [
  {
    id: "gs1",
    name: "Burnout Recovery Workshop",
    description: "A 6-week structured group programme to understand, address, and recover from workplace burnout. Evidence-based tools and peer support.",
    seats: 10,
    seatsLeft: 3,
    date: "Starting 18 March",
    time: "Tuesdays 7pm",
    duration: "90 min",
    therapist: "Dr. Sarah Chen",
    price: "£45/session",
    focus: ["Burnout", "Recovery", "CBT Tools"],
  },
  {
    id: "gs2",
    name: "Mindful Professionals",
    description: "A practical mindfulness group adapted for people with busy, demanding lives. No spiritual overtones — just evidence-based stress reduction.",
    seats: 15,
    seatsLeft: 7,
    date: "Starting 20 March",
    time: "Thursdays 6pm",
    duration: "60 min",
    therapist: "Marcus Williams",
    price: "£30/session",
    focus: ["Mindfulness", "Stress", "Focus"],
  },
];

// ---- COMMUNITY ----
export const communityTopics: CommunityTopic[] = [
  {
    id: "ct1",
    title: "Workplace Stress & Burnout",
    description: "Share coping strategies, recovery stories, and support for those navigating the edge of burnout.",
    posts: 847,
    members: 2300,
    icon: "🔥",
    category: "Mental Wellness",
    pinned: true,
  },
  {
    id: "ct2",
    title: "Imposter Syndrome",
    description: "You're not alone. Discuss the quiet voice that says you don't belong — and how to answer it.",
    posts: 612,
    members: 1840,
    icon: "🪞",
    category: "Self-Development",
    pinned: true,
  },
  {
    id: "ct3",
    title: "Managing Anxiety at Work",
    description: "Practical tools, breathing techniques, and discussions around anxiety in professional settings.",
    posts: 531,
    members: 1650,
    icon: "🧘",
    category: "Mental Wellness",
  },
  {
    id: "ct4",
    title: "Work-Life Balance (or Blur)",
    description: "Is it even possible? Stories, failures, wins, and strategies for finding equilibrium.",
    posts: 489,
    members: 1420,
    icon: "⚖️",
    category: "Lifestyle",
  },
  {
    id: "ct5",
    title: "Leadership & Mental Load",
    description: "The invisible weight of leading teams. Talk about boundaries, decision fatigue, and resilience.",
    posts: 376,
    members: 980,
    icon: "👥",
    category: "Career",
  },
  {
    id: "ct6",
    title: "Processing Grief & Loss",
    description: "A gentle space for those navigating bereavement alongside demanding careers.",
    posts: 224,
    members: 740,
    icon: "🌿",
    category: "Mental Wellness",
  },
];

export const communityPosts: CommunityPost[] = [
  {
    id: "cp1",
    title: "3 months of therapy and I finally took a week off without guilt",
    preview: "I used to physically feel sick when I took annual leave. The inbox anxiety was unbearable. Here's what helped me reframe 'rest' as productive...",
    author: "AnonymousPro_UK",
    authorInitials: "AP",
    authorColor: "#4A7C8E",
    timeAgo: "2h ago",
    replies: 47,
    likes: 183,
    tags: ["Burnout", "Recovery", "Work-Life Balance"],
    verified: true,
  },
  {
    id: "cp2",
    title: "My manager told me I 'seem stressed lately' — do I disclose?",
    preview: "Got pulled aside this week. Part of me wants to be honest, but I'm terrified about how it could affect my performance review. Any advice?",
    author: "FinanceAnon_22",
    authorInitials: "FA",
    authorColor: "#7C6E8E",
    timeAgo: "5h ago",
    replies: 62,
    likes: 97,
    tags: ["Workplace", "Disclosure", "Mental Health"],
  },
  {
    id: "cp3",
    title: "The Sunday dread is real — and I've found something that helps",
    preview: "Four years of dreading Sunday evenings before I finally addressed what was underneath it. It wasn't laziness or weakness...",
    author: "TechLead_Anon",
    authorInitials: "TL",
    authorColor: "#8E6E4A",
    timeAgo: "1d ago",
    replies: 88,
    likes: 341,
    tags: ["Anxiety", "Work", "Practical Tips"],
    verified: true,
  },
  {
    id: "cp4",
    title: "Peer circles vs 1:1 therapy — my honest 6-month comparison",
    preview: "I've been doing both simultaneously. Here's what each gives me that the other can't, and why I'd recommend trying both for different reasons.",
    author: "WellnessJourney_M",
    authorInitials: "WJ",
    authorColor: "#4A8E6E",
    timeAgo: "2d ago",
    replies: 31,
    likes: 224,
    tags: ["Group Sessions", "Therapy", "Review"],
  },
];

// ---- STATS ----
export const platformStats = {
  professionals: "12,400+",
  therapists: "340+",
  matchRate: "94%",
  avgWaitTime: "< 48 hours",
  peerCircles: "85+",
  satisfaction: "4.8/5",
};

// ---- COMPANIES ----
export const companyBenefits = [
  {
    title: "Measurable ROI",
    description: "Companies using Walnut report 34% reduction in stress-related absenteeism within 6 months.",
    icon: "TrendingUp",
  },
  {
    title: "Privacy-First Architecture",
    description: "Employees access care independently. Companies receive only anonymized, aggregate insights — never individual data.",
    icon: "Shield",
  },
  {
    title: "Flexible Coverage",
    description: "Set custom spend limits per employee. Covers 1:1 therapy, group sessions, and peer circles.",
    icon: "Settings",
  },
  {
    title: "Clinical Quality",
    description: "All providers on Walnut are independently vetted against clinical standards. No exceptions.",
    icon: "CheckCircle",
  },
];
