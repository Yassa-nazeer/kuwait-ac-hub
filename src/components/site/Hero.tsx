import { motion } from "motion/react";
import { Phone, MessageCircle, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero.jpg";

const WHATSAPP = "https://wa.me/96565954080?text=" + encodeURIComponent("مرحبا، أرغب ببيع مكيفات مستعملة والحصول على تقييم");

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-[480px] h-[480px] rounded-full bg-accent/30 blur-3xl animate-blob" />
        <div className="absolute bottom-0 -left-24 w-[420px] h-[420px] rounded-full bg-primary/30 blur-3xl animate-blob" style={{ animationDelay: "4s" }} />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-right"
          >
            <div className="inline-flex items-center gap-2 glass rounded-full px-5 py-2.5 mb-6">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-bold text-foreground">رقم 1 في الكويت لشراء المكيفات المستعملة</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.12] mb-6">
              نشتري{" "}
              <span className="text-gradient">المكيفات المستعملة</span>{" "}
              في الكويت بأعلى الأسعار
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              نشتري جميع أنواع وأحجام المكيفات المستعملة — سبليت، شباك، مركزي — بأسعار لا تُقارن. فك ونقل مجاني، ومعاينة فورية داخل جميع مناطق الكويت.
            </p>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <a href="tel:65954080" className="group inline-flex items-center gap-2 gradient-primary text-primary-foreground px-7 py-4 md:py-5 rounded-2xl font-bold text-base md:text-lg shadow-glow hover:scale-105 transition-transform">
                <Phone className="w-5 h-5" />
                اتصل الآن
              </a>
              <a href={WHATSAPP} target="_blank" rel="noopener" className="group inline-flex items-center gap-2 bg-[var(--whatsapp)] text-white px-7 py-4 md:py-5 rounded-2xl font-bold text-base md:text-lg hover:scale-105 transition-transform shadow-card">
                <MessageCircle className="w-5 h-5" />
                واتساب فوري
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
              {[
                { v: "+10", l: "سنوات خبرة" },
                { v: "24/7", l: "خدمة سريعة" },
                { v: "100%", l: "ضمان الجودة" },
              ].map(s => (
                <div key={s.l} className="glass rounded-2xl p-4 text-center">
                  <div className="text-2xl font-black text-gradient">{s.v}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-6 bg-gradient-to-tr from-primary/30 to-accent/30 blur-3xl rounded-full" />
            <div className="relative glass-strong rounded-[2rem] p-3 shadow-elegant animate-float">
              <img
                src={heroImg}
                alt="مكيفات مستعملة في الكويت - شراء وبيع وسكراب"
                width={1920}
                height={1080}
                className="rounded-3xl w-full h-auto"
              />
              <div className="absolute -bottom-4 -right-4 glass-strong rounded-2xl px-5 py-3 shadow-glow">
                <div className="text-xs text-muted-foreground">معاينة مجانية</div>
                <div className="text-sm font-extrabold text-foreground">خلال 30 دقيقة</div>
              </div>
              <div className="absolute -top-4 -left-4 glass-strong rounded-2xl px-5 py-3 shadow-glow">
                <div className="text-xs text-muted-foreground">أسعار</div>
                <div className="text-sm font-extrabold text-gradient">الأعلى في الكويت</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
