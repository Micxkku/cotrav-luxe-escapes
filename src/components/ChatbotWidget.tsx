import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, type UIMessage } from "ai";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const SUGGESTIONS = [
  "What destinations do you cover?",
  "How does membership work?",
  "Tell me about corporate retreats",
  "How do I become a host?",
];

const WELCOME: UIMessage = {
  id: "welcome",
  role: "assistant",
  parts: [
    {
      type: "text",
      text: "Hi! I'm the CoTrav Stays concierge. Ask me about destinations, bookings, membership, or corporate retreats.",
    },
  ],
};

export function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
    messages: [WELCOME],
  });

  const busy = status === "submitted" || status === "streaming";

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  function submit(text: string) {
    const t = text.trim();
    if (!t || busy) return;
    sendMessage({ text: t });
    setInput("");
  }

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          aria-label="Open chat"
          className="fixed bottom-6 right-6 z-[60] flex items-center gap-2 bg-[var(--primary)] hover:bg-[var(--primary-light)] text-white rounded-full shadow-2xl px-5 py-3.5 transition-all hover:scale-105"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="font-bold text-sm hidden sm:inline">Ask Concierge</span>
        </button>
      )}

      {open && (
        <div className="fixed bottom-6 right-6 z-[60] w-[calc(100vw-3rem)] sm:w-96 h-[560px] max-h-[calc(100vh-3rem)] bg-white rounded-2xl shadow-2xl border border-[var(--border)] flex flex-col overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 bg-[var(--primary)] text-white">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[var(--accent)] flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-[var(--primary)]" />
              </div>
              <div>
                <div className="font-bold text-sm leading-tight">CoTrav Concierge</div>
                <div className="text-[10px] opacity-80">Typically replies instantly</div>
              </div>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close chat" className="p-1 hover:bg-white/10 rounded">
              <X className="w-4 h-4" />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-[var(--bg-secondary)]">
            {messages.map((m) => {
              const text = m.parts.map((p) => (p.type === "text" ? p.text : "")).join("");
              const isUser = m.role === "user";
              return (
                <div key={m.id} className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2 text-sm whitespace-pre-wrap ${
                      isUser
                        ? "bg-[var(--primary)] text-white rounded-br-sm"
                        : "bg-white text-[var(--text-primary)] border border-[var(--border)] rounded-bl-sm"
                    }`}
                  >
                    {text || (busy ? "…" : "")}
                  </div>
                </div>
              );
            })}
            {busy && messages[messages.length - 1]?.role === "user" && (
              <div className="flex justify-start">
                <div className="bg-white border border-[var(--border)] rounded-2xl rounded-bl-sm px-3.5 py-2.5">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-[var(--primary)] rounded-full animate-bounce" />
                    <span className="w-1.5 h-1.5 bg-[var(--primary)] rounded-full animate-bounce [animation-delay:120ms]" />
                    <span className="w-1.5 h-1.5 bg-[var(--primary)] rounded-full animate-bounce [animation-delay:240ms]" />
                  </div>
                </div>
              </div>
            )}
          </div>

          {messages.length <= 1 && (
            <div className="px-3 pb-2 pt-1 flex flex-wrap gap-1.5 bg-[var(--bg-secondary)]">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => submit(s)}
                  className="text-xs bg-white border border-[var(--border)] hover:border-[var(--accent)] text-[var(--primary)] rounded-full px-3 py-1.5 transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          <form
            onSubmit={(e) => {
              e.preventDefault();
              submit(input);
            }}
            className="flex items-center gap-2 p-3 border-t border-[var(--border)] bg-white"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about destinations, bookings…"
              className="flex-1 text-sm bg-[var(--bg-secondary)] rounded-full px-4 py-2.5 outline-none focus:ring-2 focus:ring-[var(--accent)]"
              disabled={busy}
            />
            <button
              type="submit"
              disabled={busy || !input.trim()}
              aria-label="Send"
              className="w-10 h-10 shrink-0 rounded-full bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--primary)] flex items-center justify-center disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
