import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  ChevronDown, 
  Mic2, 
  Video, 
  Music2, 
  Disc, 
  Camera, 
  Radio, 
  Layers, 
  Instagram, 
  Mail, 
  Phone,
  MessageCircle,
  Play
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";

// Images (Using Unsplash placeholders for premium cinematic feel)
const heroImg = "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop"; 
const founderImg = "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=2070&auto=format&fit=crop";

const services = [
  { 
    icon: Mic2, 
    title: "Music Production", 
    desc: "From vocal recording to full album production, we bring 10+ years of expertise to every track." 
  },
  { 
    icon: Video, 
    title: "Video Production", 
    desc: "Cinematic music videos and corporate content delivered with professional vision and precision." 
  },
  { 
    icon: Music2, 
    title: "Beat Making", 
    desc: "Custom high-quality instrumentals tailored to your genre and artistic style." 
  },
  { 
    icon: Disc, 
    title: "Mixing & Mastering", 
    desc: "The 'Clean Sound' promise. Industry-standard polishing for a professional, radio-ready finish." 
  },
  { 
    icon: Camera, 
    title: "Live Recording Coverage", 
    desc: "Multi-camera expertise for concerts, choirs, and events, capturing every moment and every note." 
  },
  { 
    icon: Radio, 
    title: "Live Streaming", 
    desc: "Flawless real-time broadcasting for events, ensuring your audience stays connected globally." 
  },
  { 
    icon: Layers, 
    title: "Sound Design", 
    desc: "Atmospheric and impactful audio work for films, games, and multimedia projects." 
  },
];

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "50+", label: "Happy Clients" },
  { value: "100+", label: "Projects Completed" },
];

const portfolioItems = [
  {
    id: "bhLqneU0K-U",
    title: "Jesus is The One",
    category: "Live Recording",
    desc: "A powerful live worship experience by Ichthus Gloria Choir, capturing the raw spiritual depth of live gospel music.",
    type: "video"
  },
  {
    id: "Ma7bYn5wbYA",
    title: "EL ROI",
    category: "Live Recording",
    desc: "Intimate live session featuring soulful harmonies and professional acoustic arrangements.",
    type: "video"
  },
  {
    id: "wx5ZiZE51EA",
    title: "GAKONDO YANJYE",
    category: "Songs",
    desc: "A cinematic official music video blending traditional Rwandan cultural elements with modern production.",
    type: "video"
  },
  {
    id: "MTjkQSoTnYs",
    title: "TUZASA NA WE",
    category: "Live Recording",
    desc: "High-energy live registration showcasing expert multi-camera coverage and crisp engineering.",
    type: "video"
  },
  {
    id: "OPeKWE6UaTE",
    title: "EL-ROI Worship Experience",
    category: "Live Recording",
    desc: "A flagship concert production featuring Chryso Ndasingwa, demonstrating large-scale audio-visual capability.",
    type: "video"
  },
  {
    id: "a2uNVkvqet4",
    title: "Blessings",
    category: "Songs",
    desc: "Vibrant and high-end official music video featuring state-of-the-art color grading.",
    type: "video"
  }
];

const Index = () => {
  const [filter, setFilter] = useState("All");
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const filteredPortfolio = filter === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [filter]);

  return (
    <Layout>
      {/* HERO SECTION */}
      <section id="home" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <video
            className="w-full h-full object-cover"
            src="/Video/Video01.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>

        <div className="relative z-10 container-tight text-center">
          <div className="animate-fade">
            <span className="inline-block h-3 w-3 rotate-45 bg-red mb-10 animate-pulse-red" />
          </div>
          <h1 className="animate-fade-up font-display font-black text-6xl md:text-8xl lg:text-9xl uppercase leading-none tracking-tighter text-white">
            DES <span className="text-red">STUDIOS</span>
          </h1>
          <p className="mt-8 font-serif-italic text-2xl md:text-3xl text-white/90 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Real work, Clean sound, Strong visuals
          </p>
          <div className="ornament-divider animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <span className="h-2 w-2 rotate-45 bg-red" />
          </div>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-6 animate-fade-up" style={{ animationDelay: "0.5s" }}>
            <Button 
              onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-red hover:bg-red-bright text-white px-10 py-7 text-sm font-black tracking-widest transition-all hover:scale-105 rounded-none"
            >
              VIEW OUR WORK <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              variant="outline" 
              className="border-white/20 hover:border-red text-white px-10 py-7 text-sm font-black tracking-widest bg-white/5 backdrop-blur-sm rounded-none"
            >
              CONTACT US
            </Button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center animate-shimmer opacity-50">
          <p className="text-[10px] tracking-[0.5em] text-white">SCROLL</p>
          <ChevronDown className="h-5 w-5 mx-auto mt-2 text-red" />
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="section-padding bg-black relative">
        <div className="container-tight grid lg:grid-cols-2 gap-20 items-center">
          <div className="reveal">
            <p className="eyebrow">The Founder</p>
            <h2 className="mt-6 text-white text-5xl md:text-6xl font-black uppercase leading-tight">
              A Decade of<br />
              <span className="text-red">Sonic Excellence.</span>
            </h2>
            <p className="mt-8 text-white/70 text-lg leading-relaxed font-light">
              DES Studios is a Kigali-based creative studio founded by <span className="text-white font-bold">DUSHIME Emmanuel Shalom</span>, a music producer with over 10 years of experience.
            </p>
            <p className="mt-6 text-white/70 text-lg leading-relaxed font-light">
              We specialize in delivering high-quality sound and visuals. We have worked with music producers, choirs, artists, video directors, and photographers, creating powerful and professional content that stands the test of time.
            </p>
            
            <div className="mt-12 group relative inline-block">
              <div className="absolute -inset-1 bg-gradient-red rounded-none blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative px-8 py-4 bg-black border border-white/10 text-white font-bold tracking-widest text-xs uppercase">
                Location: Kigali, Rwanda
              </div>
            </div>
          </div>

          <div className="reveal relative">
            <div className="aspect-[4/5] overflow-hidden border border-white/5 grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl bg-white/5">
              <img 
                src={founderImg} 
                alt="DUSHIME Emmanuel Shalom" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-red p-10 hidden md:block">
              <p className="text-white font-black text-4xl">10</p>
              <p className="text-white/80 text-[10px] tracking-widest font-bold uppercase mt-1">Years of craft</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="section-padding bg-ink-soft border-y border-white/5">
        <div className="container-tight">
          <SectionHeader 
            eyebrow="Expertise" 
            title="Premium" 
            accent="Services" 
            description="We provide a full spectrum of audio and visual services, ensuring every project meets world-class standards."
          />
          
          <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className="reveal bg-black p-10 border border-white/5 hover:border-red/40 group transition-all duration-500 hover:-translate-y-2 shadow-xl"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="h-16 w-16 bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-red group-hover:bg-red/5 transition-all mb-8">
                  <Icon className="h-8 w-8 text-red" />
                </div>
                <h3 className="text-white text-2xl font-bold mb-4">{title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
                <div className="mt-8 h-1 w-0 bg-red group-hover:w-full transition-all duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section id="portfolio" className="section-padding bg-black">
        <div className="container-tight">
          <div className="reveal flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20">
            <div>
              <p className="eyebrow">Our Work</p>
              <h2 className="mt-6 text-white text-5xl md:text-6xl font-black uppercase">
                Featured <span className="text-red">Projects</span>
              </h2>
            </div>
            
            <div className="flex flex-wrap gap-4">
              {["All", "Songs", "Live Recording", "Other"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-2 text-[10px] font-bold uppercase tracking-widest transition-all ${
                    filter === cat 
                      ? "bg-red text-white" 
                      : "bg-white/5 text-white/50 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPortfolio.map((item, i) => (
              <div
                key={item.id}
                className="reveal group cursor-pointer"
                style={{ transitionDelay: `${i * 100}ms` }}
                onClick={() => setActiveVideo(item.id)}
              >
                <div className="relative aspect-video overflow-hidden bg-white/5">
                  <img 
                    src={`https://img.youtube.com/vi/${item.id.trim()}/maxresdefault.jpg`}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-all flex items-center justify-center">
                    <div className="h-16 w-16 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center group-hover:bg-red group-hover:border-red transition-all transform scale-90 group-hover:scale-100">
                      <Play className="h-6 w-6 text-white fill-current" />
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 bg-red px-3 py-1">
                    <p className="text-[10px] font-black uppercase text-white">{item.category}</p>
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="text-white text-xl font-bold group-hover:text-red transition-colors">{item.title}</h3>
                  <p className="mt-3 text-white/50 text-sm leading-relaxed line-clamp-2">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* VIDEO MODAL */}
          {activeVideo && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 sm:p-10 bg-black/95 backdrop-blur-xl transition-all duration-300">
              <button 
                onClick={() => setActiveVideo(null)}
                className="absolute top-10 right-10 text-white/50 hover:text-white transition-colors font-black text-xs tracking-widest"
              >
                CLOSE [X]
              </button>
              <div className="w-full max-w-5xl aspect-video shadow-2xl border border-white/10">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${activeVideo.trim()}?autoplay=1`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="py-40 bg-ink-soft border-y border-white/5 overflow-hidden">
        <div className="container-tight">
          <div className="grid md:grid-cols-3 gap-20">
            {stats.map((stat, i) => (
              <div key={stat.label} className="reveal text-center group relative">
                <div className="absolute -top-20 left-1/2 -translate-x-1/2 text-9xl font-black text-white/[0.03] group-hover:text-red/[0.05] transition-all duration-1000 select-none">
                  {stat.value}
                </div>
                <p className="relative z-10 text-6xl md:text-7xl font-black text-white mb-4 tracking-tighter">{stat.value}</p>
                <div className="ornament-divider mx-auto scale-75 opacity-20"><span className="h-1 w-1 bg-red" /></div>
                <p className="relative z-10 text-red font-bold uppercase tracking-[0.4em] text-xs transition-all group-hover:tracking-[0.6em] group-hover:text-white">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="section-padding bg-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-red/[0.02] blur-[150px] -z-10" />
        <div className="container-tight">
          <div className="grid lg:grid-cols-2 gap-20">
            <div className="reveal">
              <p className="eyebrow">Get In Touch</p>
              <h2 className="mt-6 text-white text-5xl md:text-6xl font-black uppercase leading-tight">
                Let's Start Your<br />
                <span className="text-red">Next Project.</span>
              </h2>
              <p className="mt-8 text-white/60 text-lg max-w-md leading-relaxed font-light">
                Ready to transform your vision into professional sound and visuals? Reach out to us through any channel below.
              </p>

              <div className="mt-12 space-y-8">
                <a href="tel:+250783850464" className="flex items-center gap-6 group max-w-xs">
                  <div className="h-14 w-14 border border-white/10 flex items-center justify-center group-hover:border-red group-hover:bg-red/5 transition-all">
                    <Phone className="h-6 w-6 text-red" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Call Us</p>
                    <p className="text-white font-bold text-lg group-hover:text-red transition-colors">+250 783 850 464</p>
                  </div>
                </a>

                <a href="mailto:Deestudios250@gmail.com" className="flex items-center gap-6 group max-w-xs">
                  <div className="h-14 w-14 border border-white/10 flex items-center justify-center group-hover:border-red group-hover:bg-red/5 transition-all">
                    <Mail className="h-6 w-6 text-red" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Email Us</p>
                    <p className="text-white font-bold text-lg group-hover:text-red transition-colors">Deestudios250@gmail.com</p>
                  </div>
                </a>

                <a href="https://www.instagram.com/desstudios250/?hl=en" target="_blank" rel="noreferrer" className="flex items-center gap-6 group max-w-xs">
                  <div className="h-14 w-14 border border-white/10 flex items-center justify-center group-hover:border-red group-hover:bg-red/5 transition-all">
                    <Instagram className="h-6 w-6 text-red" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Follow Us</p>
                    <p className="text-white font-bold text-lg group-hover:text-red transition-colors">@desstudios250</p>
                  </div>
                </a>

                <a href="https://wa.me/250783850464" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-[#25D366]/10 text-[#25D366] px-8 py-4 border border-[#25D366]/20 font-bold text-xs uppercase tracking-widest hover:bg-[#25D366]/20 transition-all">
                  <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="reveal bg-white/[0.02] p-10 md:p-16 border border-white/5 relative">
              <div className="absolute top-0 right-0 h-10 w-10 border-t-2 border-r-2 border-red -mr-1 -mt-1" />
              <h3 className="text-2xl font-black text-white uppercase mb-10 tracking-tight">Send a Project Brief</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-white/60 uppercase tracking-widest">Full Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 px-6 py-4 text-white focus:border-red outline-none transition-all rounded-none" placeholder="Your Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-white/60 uppercase tracking-widest">Email Address</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 px-6 py-4 text-white focus:border-red outline-none transition-all rounded-none" placeholder="your@email.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-white/60 uppercase tracking-widest">Project Details</label>
                  <textarea rows={4} className="w-full bg-white/5 border border-white/10 px-6 py-4 text-white focus:border-red outline-none transition-all resize-none rounded-none" placeholder="Tell us about your requirements..."></textarea>
                </div>
                <Button className="w-full bg-red hover:bg-red-bright text-white py-10 font-black uppercase tracking-[0.2em] text-xs rounded-none transition-all hover:scale-[1.02]">
                  SEND MESSAGE
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
