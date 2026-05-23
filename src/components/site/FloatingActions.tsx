import { MessageCircle, Phone } from "lucide-react";

export function FloatingActions() {
  return (
    <>
      <a
        href="https://wa.me/96565954080"
        target="_blank"
        rel="noopener"
        aria-label="WhatsApp"
        className="fixed bottom-6 left-6 z-50 w-16 h-16 md:w-[68px] md:h-[68px] rounded-full bg-[var(--whatsapp)] grid place-items-center shadow-glow animate-glow-pulse hover:scale-110 transition-transform"
      >
        <MessageCircle className="w-8 h-8 text-white" />
      </a>
      <a
        href="tel:65954080"
        aria-label="Call"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 md:w-[68px] md:h-[68px] rounded-full gradient-primary grid place-items-center shadow-glow animate-glow-pulse hover:scale-110 transition-transform"
      >
        <Phone className="w-7 h-7 text-primary-foreground" />
      </a>
    </>
  );
}
