import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "./ui/button";

const links = [
  { to: "home", label: "Home" },
  { to: "about", label: "About" },
  { to: "services", label: "Services" },
  { to: "portfolio", label: "Portfolio" },
  { to: "experience", label: "Experience" },
  { to: "contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = links.map(l => document.getElementById(l.to));
      const scrollPos = window.scrollY + 100;
      
      sections.forEach(section => {
        if (section && scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
          setActiveSection(section.id);
        }
      });
    };
    
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || open ? "bg-black/95 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="container-tight flex items-center justify-between h-24">
        <div onClick={() => scrollTo("home")} className="cursor-pointer">
          <Logo />
        </div>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <button
              key={l.to}
              onClick={() => scrollTo(l.to)}
              className={`text-[11px] font-bold uppercase tracking-[0.3em] transition-all duration-300 hover:text-red ${
                activeSection === l.to ? "text-red" : "text-white/70"
              }`}
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Button 
            onClick={() => scrollTo("contact")}
            variant="ghost" 
            className="text-white hover:text-red transition-colors font-bold uppercase tracking-widest text-[10px]"
          >
            Get In Touch
          </Button>
        </div>

        <button
          className="lg:hidden text-white p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/5 bg-black/98 backdrop-blur-2xl animate-fade">
          <nav className="container-tight py-10 flex flex-col gap-6">
            {links.map((l) => (
              <button
                key={l.to}
                onClick={() => scrollTo(l.to)}
                className={`text-left text-lg font-bold uppercase tracking-[0.25em] border-b border-white/5 pb-4 ${
                  activeSection === l.to ? "text-red" : "text-white/60"
                }`}
              >
                {l.label}
              </button>
            ))}
            <div className="pt-6">
              <Button 
                onClick={() => scrollTo("contact")}
                className="w-full bg-red hover:bg-red-deep text-white font-black"
              >
                BOOK NOW
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
