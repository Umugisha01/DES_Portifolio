import { Instagram, Youtube, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "./Logo";

export const Footer = () => (
  <footer className="border-t border-white/5 bg-black">
    <div className="container-tight py-16 grid gap-12 md:grid-cols-4">
      <div className="md:col-span-1 space-y-6">
        <Logo />
        <p className="text-sm text-white/50 leading-relaxed max-w-xs">
          A premium creative production studio in Kigali, Rwanda. Capturing high-end sound and visual stories for over 10 years.
        </p>
        <div className="flex gap-3">
          {[
            { Icon: Instagram, href: "https://www.instagram.com/desstudios250/?hl=en" },
            { Icon: Youtube, href: "https://www.youtube.com/@shalomgabrisd.e.sstudios7450" },
            { Icon: Mail, href: "mailto:Deestudios250@gmail.com" },
          ].map(({ Icon, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="h-10 w-10 grid place-items-center border border-white/10 text-white/50 hover:text-red hover:border-red transition-all"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>

      <div>
        <h4 className="eyebrow mb-6 text-[10px]">Quick Links</h4>
        <ul className="space-y-4 text-xs font-bold uppercase tracking-widest">
          {[
            ["Home", "#home"],
            ["About", "#about"],
            ["Services", "#services"],
            ["Portfolio", "#portfolio"],
            ["Experience", "#experience"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <li key={label}>
              <a 
                href={href} 
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById(href.substring(1));
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-white/40 hover:text-red transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="eyebrow mb-6 text-[10px]">Location</h4>
        <ul className="space-y-4 text-sm text-white/50">
          <li className="flex gap-3">
            <MapPin className="h-4 w-4 text-red mt-0.5 shrink-0" />
            Kigali, Rwanda
          </li>
          <li className="flex gap-3">
            <Mail className="h-4 w-4 text-red mt-0.5 shrink-0" />
            Deestudios250@gmail.com
          </li>
          <li className="flex gap-3">
            <Phone className="h-4 w-4 text-red mt-0.5 shrink-0" />
            +250 783 850 464
          </li>
        </ul>
      </div>

      <div>
        <h4 className="eyebrow mb-6 text-[10px]">The Goal</h4>
        <p className="text-sm text-white/50 mb-6 italic">
          "Real work, Clean sound, Strong visuals"
        </p>
        <div className="p-4 border border-white/5 bg-white/[0.02]">
          <p className="text-[10px] text-white/30 uppercase tracking-widest leading-loose">
            Founded by DUSHIME Emmanuel Shalom. Dedicated to the craft of professional sonic storytelling.
          </p>
        </div>
      </div>
    </div>
    <div className="border-t border-white/5">
      <div className="container-tight py-8 flex flex-col md:flex-row gap-4 md:items-center md:justify-between text-[10px] font-bold tracking-[0.2em] text-white/20 uppercase">
        <p>© {new Date().getFullYear()} DES Studios — Kigali, Rwanda</p>
        <p className="text-white/10 tracking-[0.5em]">CAPTURING SOUND. CREATING VISION.</p>
      </div>
    </div>
  </footer>
);
