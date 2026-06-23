import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, socials, niche, goals } = await req.json();

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required fields." }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "Gemini API configuration key is missing on the server." }, { status: 500 });
    }

    const ai = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });

    const userPrompt = `
      You are the Elite Creative Director at cherry.nyc, a futuristic 2026-2030 cyber-luxury webcam studio and creator collective in New York City.
      We operate the most advanced multicasting technologies (delivering simultaneous HD feeds to Chaturbate, Stripchat, Fansly, Twitch, YouTube, and OnlyFans) and offer an industry-leading 92% transparent earnings split.

      Generate a highly tailored, empowering, luxurious, and sexually confident "Cherry Talent Empire Roadmap" for this applicant. Do NOT make it sound corporate. It should feel exclusive, high-status, extremely motivating, and speak to them as a future top earner who owns their body, rules, and empire.

      APPLICANT PROFILES:
      - Name: ${name}
      - Core Niche / Style: ${niche || "Versatile / Tech-glam"}
      - Professional Goals: ${goals || "To scale income, master multiple platforms, and establish a luxurious personal brand."}
      - Social Footprint: ${socials || "Not specified (Discrete)"}

      Provide a structured response. Use clean, bold headers. Avoid markdown code blocks inside your text, but do use bullet points. Make it read like a premium digital transmission from our Manhattan headquarters.
      Include:
      1. THE CHERRY VISION - A highly personalized welcome and acknowledgement of their aesthetic power.
      2. MULTISTREAM MATRICES - A strategy on which top 3-4 platforms (out of Fansly, Twitch, Chaturbate, Stripchat, OnlyFans) they should synchronize first using our neural-streaming framework, explaining why it maximizes their specific niche.
      3. EXPECTED LANDMARKS - Seductive projection of their potential reach and monetary gains (given our 92% split compared to typical 50% studio cuts).
      4. NEXT STEPS - A direct, empowering call to unlock their physical studio audition in Tribeca.

      Limit response to about 300-400 words. Keep the tone powerful, sleek, and premium.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: userPrompt,
      config: {
        systemInstruction: "You are the head Creative Director for Cherry NYC (cherry.nyc), a high-end cyber-luxury creative agency and webcam studio. Your voice is sophisticated, sexually confident, highly empowering, professional, and exclusive. Always output elegant text without mentioning system variables, code variables, or technical details about the AI itself.",
        temperature: 0.85,
      }
    });

    const text = response.text || "Your registration is received. Connect with our Tribeca coordinator at talent@cherry.nyc.";

    return NextResponse.json({ roadmap: text });
  } catch (error: any) {
    console.error("Cherry consult API error:", error);
    return NextResponse.json({ error: "Quantum transmission interrupted. Please try again." }, { status: 500 });
  }
}
