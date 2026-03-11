import { NextRequest, NextResponse } from "next/server";
import { therapists, peerCircles, groupSessions } from "@/lib/mockData";

// POST /api/matches
// Accepts onboarding answers, returns scored and sorted match recommendations.
// This is a server action stub — in production, replace with real ML matching logic
// and Supabase integration.
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Simple scoring based on urgency and budget
    const { urgency, budget, therapist_traits, peer_interest } = body;

    // Clone therapists and adjust scores based on urgency
    const scoredTherapists = therapists
      .map((t) => ({
        ...t,
        matchScore:
          urgency === "I need help as soon as possible" && t.availability === "this week"
            ? Math.min(t.matchScore + 3, 99)
            : t.matchScore,
      }))
      .sort((a, b) => b.matchScore - a.matchScore);

    // Filter peer circles based on interest
    const includePeerCircles =
      peer_interest !== "No, not for me" && peer_interest !== undefined;

    return NextResponse.json({
      success: true,
      matches: {
        therapists: scoredTherapists,
        peerCircles: includePeerCircles ? peerCircles : [],
        groupSessions,
      },
      profile: body,
      generatedAt: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to generate matches" },
      { status: 400 }
    );
  }
}

// GET /api/matches — returns default recommendations
export async function GET() {
  return NextResponse.json({
    success: true,
    matches: {
      therapists,
      peerCircles,
      groupSessions,
    },
    generatedAt: new Date().toISOString(),
  });
}
