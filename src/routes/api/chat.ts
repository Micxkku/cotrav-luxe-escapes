import { createFileRoute } from "@tanstack/react-router";
import { convertToModelMessages, streamText, type UIMessage } from "ai";
import { createLovableAiGatewayProvider } from "@/lib/ai-gateway.server";

const SYSTEM_PROMPT = `You are the CoTrav Stays concierge — a friendly AI assistant for a luxury staycation platform in India.

About CoTrav Stays:
- Curated luxury villas, resorts, and private staycations across India.
- 15+ hubs including Delhi NCR, Mumbai, Bengaluru, Rajasthan, Goa, and a Wellness Circuit (Rishikesh).
- Offerings: Staycations, Workations, Corporate Retreats, Events, Membership, and a Become-a-Host program.
- Contact: +91 98765 43210 · WhatsApp same number · enquire via the "Get in Touch" menu.

How to answer:
- Be concise (1–3 short paragraphs or a tight bullet list). Warm, professional, no emojis spam.
- Answer common FAQs: destinations, hubs, booking process, check-in/out, group size, pricing range, membership perks, corporate packages, hosting partnership.
- If you don't know specifics (exact price for a date, availability), say so and point users to WhatsApp +91 98765 43210 or the "Get in Touch" button.
- Never invent properties, prices, or policies. Stay strictly on CoTrav Stays topics.`;

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const { messages } = (await request.json()) as { messages?: UIMessage[] };
        if (!Array.isArray(messages)) {
          return new Response("Messages are required", { status: 400 });
        }
        const key = process.env.LOVABLE_API_KEY;
        if (!key) return new Response("Missing LOVABLE_API_KEY", { status: 500 });

        const gateway = createLovableAiGatewayProvider(key);
        const result = streamText({
          model: gateway("google/gemini-3-flash-preview"),
          system: SYSTEM_PROMPT,
          messages: await convertToModelMessages(messages),
        });
        return result.toUIMessageStreamResponse({ originalMessages: messages });
      },
    },
  },
});
