import { useEffect, useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { Link } from "@tanstack/react-router";

const links = [
  { to: "/", label: "الرئيسية" },
  { to: "/about", label: "من نحن" },
  { to: "/services", label: "خدماتنا" },
  { to: "/areas", label: "مناطق التغطية" },
  { to: "/gallery", label: "المعرض" },
  { to: "/contact", label: "اتصل بنا" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-2" : "py-4"}`}>
      <div className="container mx-auto px-4">
        <div className={`glass-strong rounded-2xl px-5 py-3 flex items-center justify-between shadow-card transition-all ${scrolled ? "scale-[0.99]" : ""}`}>
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl gradient-primary grid place-items-center shadow-glow">
              <span className="text-primary-foreground font-black text-lg">س</span>
            </div>
            <div className="hidden sm:block leading-tight">
              <div className="font-extrabold text-foreground text-sm">الساحل الشمالي</div>
              <div className="text-[11px] text-muted-foreground">المستعملة والسكراب</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map(l => (
              <Link key={l.to} to={l.to} activeOptions={{ exact: true }} activeProps={{ className: "text-foreground bg-white/10" }} className="px-4 py-2 rounded-lg text-sm font-semibold text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors">
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a href="tel:65954080" className="hidden sm:inline-flex items-center gap-2 gradient-primary text-primary-foreground px-4 py-2 rounded-xl text-sm font-bold hover:opacity-90 transition-opacity shadow-glow">
              <Phone className="w-4 h-4" />
              65954080
            </a>
            <button onClick={() => setOpen(!open)} className="lg:hidden p-2 rounded-lg glass" aria-label="menu">
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden mt-2 glass-strong rounded-2xl p-3 flex flex-col gap-1 animate-in fade-in slide-in-from-top-2">
            {links.map(l => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="px-4 py-3 rounded-lg text-sm font-semibold hover:bg-white/5">
                {l.label}
              </Link>
            ))}
            <a href="tel:65954080" className="mt-1 gradient-primary text-primary-foreground px-4 py-3 rounded-lg text-sm font-bold text-center">اتصل الآن: 65954080</a>
          </div>
        )}
      </div>
    </header>
  );
}
