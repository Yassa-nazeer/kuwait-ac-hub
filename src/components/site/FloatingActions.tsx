import { MessageCircle, Phone } from "lucide-react";

export function FloatingActions() {
  return (
    <>
      <a
        href="https://wa.me/96565954080"
        target="_blank"
        rel="noopener"
        aria-label="WhatsApp"
        className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-[var(--whatsapp)] grid place-items-center shadow-glow animate-glow-pulse hover:scale-110 transition-transform"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>
      <a
        href="tel:65954080"
        aria-label="Call"
        className="md:hidden fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full gradient-primary grid place-items-center shadow-glow hover:scale-110 transition-transform"
      >
        <Phone className="w-6 h-6 text-primary-foreground" />
      </a>
    </>
  );
}
