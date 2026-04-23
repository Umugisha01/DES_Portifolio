import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Sparkles, Send, Wand2, Music2 } from "lucide-react";
import { toast } from "sonner";

const moods = ["Cinematic", "Dark", "Uplifting", "Lo-Fi", "Epic", "Romantic"];
const genres = ["Hip-Hop", "Orchestral", "Electronic", "Afrobeat", "Ambient", "Jazz"];

const AITools = () => {
  const [mood, setMood] = useState("Cinematic");
  const [genre, setGenre] = useState("Orchestral");
  const [generating, setGenerating] = useState(false);
  const [chat, setChat] = useState<{ role: "user" | "ai"; text: string }[]>([
    { role: "ai", text: "Hi! I'm your DES Studios assistant. I can help with project briefs, pricing, or booking. What are you working on?" },
  ]);
  const [input, setInput] = useState("");

  const generate = () => {
    setGenerating(true);
    setTimeout(() => {
      setGenerating(false);
      toast.success(`${mood} ${genre} preview generated`);
    }, 2200);
  };

  const send = () => {
    if (!input.trim()) return;
    const u = input;
    setChat((c) => [...c, { role: "user", text: u }]);
    setInput("");
    setTimeout(() => {
      setChat((c) => [...c, { role: "ai", text: "Great — for that brief, I'd recommend our Gold package starting at $4,500 with a 3-day delivery. Want me to book a discovery call?" }]);
    }, 800);
  };

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-tight">
          <div className="reveal text-center">
            <p className="eyebrow flex items-center gap-2 justify-center"><Wand2 className="h-3 w-3" /> AI Powered</p>
            <h1 className="mt-4 font-display font-extrabold text-4xl md:text-6xl uppercase">Creative <span className="text-gradient-gold">Intelligence</span></h1>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Compose moods, ideate visuals, and chat with our studio assistant — all powered by AI built into DES Studios.</p>
          </div>

          <div className="mt-16 grid lg:grid-cols-2 gap-6">
            {/* MUSIC GEN */}
            <div className="reveal bg-ink-soft border border-border p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 grid place-items-center bg-ink border border-gold/40"><Music2 className="h-5 w-5 text-gold" /></div>
                <div>
                  <h2 className="font-display font-bold text-xl uppercase">Music Generator</h2>
                  <p className="text-xs text-muted-foreground tracking-wider uppercase">Mood × Genre → Audio Preview</p>
                </div>
              </div>

              <p className="text-[11px] uppercase tracking-[0.2em] text-gold mb-3">Mood</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {moods.map((m) => (
                  <button key={m} onClick={() => setMood(m)} className={`px-3 py-2 text-xs uppercase tracking-wider border transition-colors ${mood === m ? "bg-gold text-ink border-gold" : "border-border hover:border-gold"}`}>{m}</button>
                ))}
              </div>

              <p className="text-[11px] uppercase tracking-[0.2em] text-gold mb-3">Genre</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {genres.map((g) => (
                  <button key={g} onClick={() => setGenre(g)} className={`px-3 py-2 text-xs uppercase tracking-wider border transition-colors ${genre === g ? "bg-gold text-ink border-gold" : "border-border hover:border-gold"}`}>{g}</button>
                ))}
              </div>

              <div className="bg-ink border border-border p-5">
                <div className="flex items-end gap-1 h-24">
                  {Array.from({ length: 40 }).map((_, i) => (
                    <div key={i} className={`flex-1 rounded-sm bg-gradient-to-t from-gold-deep to-gold-bright ${generating ? "animate-pulse" : ""}`} style={{ height: `${20 + Math.abs(Math.sin(i * 0.6 + (generating ? Date.now() / 200 : 0))) * 80}%`, animationDelay: `${i * 30}ms` }} />
                  ))}
                </div>
              </div>

              <Button variant="gold" className="w-full mt-6" onClick={generate} disabled={generating}>
                {generating ? "Generating..." : <>Generate Preview <Sparkles /></>}
              </Button>
            </div>

            {/* AI CHAT */}
            <div className="reveal bg-ink-soft border border-border flex flex-col h-[560px]">
              <div className="p-6 border-b border-border flex items-center gap-3">
                <div className="h-10 w-10 grid place-items-center bg-ink border border-gold/40"><Sparkles className="h-5 w-5 text-gold" /></div>
                <div>
                  <h2 className="font-display font-bold text-xl uppercase">Studio Assistant</h2>
                  <p className="text-xs text-muted-foreground tracking-wider uppercase">FAQ · Quotes · Bookings</p>
                </div>
              </div>
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {chat.map((m, i) => (
                  <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div className={`max-w-[80%] p-3 text-sm leading-relaxed ${m.role === "user" ? "bg-gold text-ink" : "bg-ink border border-border"}`}>
                      {m.text}
                    </div>
                  </div>
                ))}
              </div>
              <form onSubmit={(e) => { e.preventDefault(); send(); }} className="p-4 border-t border-border flex gap-2">
                <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask about pricing, services, bookings..." className="flex-1 bg-ink border border-border px-4 py-3 text-sm outline-none focus:border-gold" />
                <Button type="submit" variant="gold" size="icon"><Send /></Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AITools;
