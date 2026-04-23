import { useState } from "react";
import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import projConcert from "@/assets/project-concert.jpg";
import projFilm from "@/assets/project-film.jpg";
import projCommercial from "@/assets/project-commercial.jpg";
import projFestival from "@/assets/project-festival.jpg";
import projMusic from "@/assets/project-music.jpg";
import projLighting from "@/assets/project-lighting.jpg";

const filters = ["All", "Film", "Music", "Commercial", "Live Event"] as const;
type Filter = typeof filters[number];

const projects = [
  { img: projFilm, cat: "Film" as const, year: 2024, title: "Echoes of Tomorrow", client: "DES Originals", desc: "A feature-length sci-fi drama exploring identity and memory in a near-future Lagos. Shot over 32 days across three countries.", aspect: "tall" },
  { img: projConcert, cat: "Music" as const, year: 2024, title: "Resonance — Album Visual", client: "Tola Afolabi", desc: "Full music video production and album artwork for an award-winning artist's third studio album.", aspect: "wide" },
  { img: projCommercial, cat: "Commercial" as const, year: 2023, title: "Zenith Bank Campaign", client: "Zenith Bank", desc: "A luxury brand campaign featuring cinematic storytelling deployed across 6 African markets.", aspect: "square" },
  { img: projFestival, cat: "Live Event" as const, year: 2023, title: "Lagos Music Festival", client: "LMF Productions", desc: "Multi-camera live broadcast and full event documentation for 50,000+ attendees.", aspect: "wide" },
  { img: projMusic, cat: "Music" as const, year: 2023, title: "Midnight Sessions Vol. 2", client: "DES Records", desc: "Live recording series capturing intimate performances from emerging West African artists.", aspect: "square" },
  { img: projLighting, cat: "Live Event" as const, year: 2022, title: "Pulse — MTN Campaign", client: "MTN Nigeria", desc: "High-energy stage design and lighting for MTN's youth-focused product launch tour.", aspect: "tall" },
];

const Portfolio = () => {
  const [filter, setFilter] = useState<Filter>("All");
  const [open, setOpen] = useState<typeof projects[number] | null>(null);

  const filtered = filter === "All" ? projects : projects.filter((p) => p.cat === filter);

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-tight">
          <div className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="eyebrow">Our Work</p>
              <h2 className="mt-4 font-display font-extrabold text-4xl md:text-5xl lg:text-6xl uppercase leading-[1.05]">
                Featured <span className="text-gradient-gold">Projects</span>
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-2 text-xs uppercase tracking-[0.15em] border transition-colors ${
                    filter === f ? "bg-gold text-ink border-gold" : "border-border text-muted-foreground hover:border-gold hover:text-gold"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Masonry-ish grid */}
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <button
                onClick={() => setOpen(p)}
                key={p.title}
                className="reveal text-left group hover-lift"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className={`relative overflow-hidden ${p.aspect === "tall" ? "aspect-[4/5]" : p.aspect === "wide" ? "aspect-[16/10]" : "aspect-[4/3]"}`}>
                  <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent opacity-90" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="flex items-center justify-between text-[11px] tracking-[0.2em] mb-2">
                      <span className="text-gold font-semibold uppercase">{p.cat}</span>
                      <span className="text-muted-foreground">{p.year}</span>
                    </div>
                    <h3 className="font-display font-bold text-lg group-hover:text-gold transition-colors">{p.title}</h3>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 z-[60] bg-ink/95 backdrop-blur-xl overflow-y-auto" onClick={() => setOpen(null)}>
          <div className="min-h-screen flex items-center justify-center p-4 md:p-12">
            <div className="relative w-full max-w-5xl bg-ink-soft border border-border" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setOpen(null)} className="absolute top-4 right-4 z-10 h-10 w-10 grid place-items-center bg-ink/80 hover:bg-gold hover:text-ink transition-colors" aria-label="Close">
                <X className="h-5 w-5" />
              </button>
              <div className="aspect-video overflow-hidden">
                <img src={open.img} alt={open.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 md:p-10">
                <div className="flex items-center justify-between text-[11px] tracking-[0.2em] mb-3">
                  <span className="text-gold font-semibold uppercase">{open.cat}</span>
                  <span className="text-muted-foreground">{open.year}</span>
                </div>
                <h3 className="font-display font-extrabold text-3xl md:text-4xl uppercase">{open.title}</h3>
                <p className="text-sm text-gold mt-2 tracking-wider">CLIENT: {open.client}</p>
                <p className="mt-6 text-muted-foreground leading-relaxed">{open.desc}</p>
                <Button variant="gold" className="mt-8" onClick={() => setOpen(null)}>Close Project</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Portfolio;
