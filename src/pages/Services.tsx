import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Film, Music2, Megaphone, Video, Sparkles, Camera, Lightbulb, Mic2, Radio } from "lucide-react";

const services = [
  { icon: Film, title: "Film & Video Production", desc: "Short films to feature-length productions with cinematic precision.", tags: ["Cinematography", "Direction", "Editing"] },
  { icon: Music2, title: "Music Production", desc: "World-class recording, mixing, and mastering in our flagship studios.", tags: ["Recording", "Mixing", "Mastering"] },
  { icon: Megaphone, title: "Commercial & Advertising", desc: "High-impact brand films, TVCs, and digital ad campaigns.", tags: ["Brand Films", "TVC", "Digital Ads"] },
  { icon: Radio, title: "Live Event Coverage", desc: "Multi-camera production, broadcast streaming, and event documentation.", tags: ["Live Stream", "Multi-Cam", "Broadcast"] },
  { icon: Sparkles, title: "Post-Production & VFX", desc: "Color grading, motion graphics, and sound design.", tags: ["Color Grade", "VFX", "Motion Graphics"] },
  { icon: Camera, title: "Photography & Stills", desc: "Editorial, commercial, and portrait photography.", tags: ["Editorial", "Commercial", "Portrait"] },
  { icon: Mic2, title: "Live Recording", desc: "On-location and studio live recording with broadcast-quality output.", tags: ["Concerts", "Sessions", "Albums"] },
  { icon: Lightbulb, title: "Lighting & Stage Design", desc: "Concert, event, and architectural lighting with full design service.", tags: ["Concert", "Architectural", "Programming"] },
];

const packages = [
  {
    name: "Silver",
    price: "From $1,500",
    features: ["Half-day session", "1 cinematographer", "Standard delivery (7 days)", "Up to 3 minutes final cut", "1 round of revisions"],
  },
  {
    name: "Gold",
    price: "From $4,500",
    featured: true,
    features: ["Full-day session", "Director + 2 operators", "Express delivery (3 days)", "Up to 8 minutes final cut", "Color grading + sound design", "3 rounds of revisions"],
  },
  {
    name: "Platinum",
    price: "From $12,000",
    features: ["Multi-day production", "Full creative team", "Dedicated producer", "Unlimited cut length", "Full VFX & post suite", "Unlimited revisions", "Priority delivery"],
  },
];

const Services = () => (
  <Layout>
    <section className="section-padding">
      <div className="container-tight">
        <SectionHeader eyebrow="What We Do" title="Our" accent="Services" description="Eight disciplines, one creative studio. Every service backed by a senior team and best-in-class equipment." />

        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {services.map(({ icon: Icon, title, desc, tags }, i) => (
            <div key={title} className="reveal bg-ink p-7 group hover:bg-ink-soft transition-colors" style={{ transitionDelay: `${i * 40}ms` }}>
              <div className="h-12 w-12 grid place-items-center bg-ink-soft border border-border mb-5 group-hover:border-gold transition-colors">
                <Icon className="h-5 w-5 text-gold" />
              </div>
              <h3 className="font-display font-bold text-lg mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {tags.map((t) => (
                  <span key={t} className="text-[10px] tracking-wider uppercase border border-gold/40 text-gold px-2 py-1">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* PACKAGES */}
    <section className="section-padding bg-ink-soft border-y border-border">
      <div className="container-tight">
        <SectionHeader eyebrow="Production Packages" title="Choose Your" accent="Tier" />
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {packages.map((p, i) => (
            <div
              key={p.name}
              className={`reveal p-8 border ${p.featured ? "border-gold bg-ink shadow-gold lg:scale-105" : "border-border bg-ink"}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {p.featured && (
                <div className="text-[10px] tracking-[0.3em] uppercase bg-gold text-ink inline-block px-3 py-1 mb-4">Most Popular</div>
              )}
              <h3 className="font-display font-extrabold text-3xl uppercase">{p.name}</h3>
              <p className="text-gold font-display text-2xl mt-2">{p.price}</p>
              <ul className="mt-6 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm text-foreground/90">
                    <Check className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button asChild variant={p.featured ? "gold" : "outline"} className="w-full mt-8">
                <Link to="/booking">Book {p.name} <ArrowRight /></Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-tight text-center reveal">
        <h2 className="font-display font-extrabold text-4xl md:text-5xl uppercase">Need Something <span className="text-gradient-gold">Custom?</span></h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">Every project is unique. Tell us what you're imagining and we'll build a package around it.</p>
        <Button asChild variant="gold" size="lg" className="mt-8">
          <Link to="/booking">Request Custom Quote <ArrowRight /></Link>
        </Button>
      </div>
    </section>
  </Layout>
);

export default Services;
