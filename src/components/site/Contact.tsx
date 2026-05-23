import { motion } from "motion/react";
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";

const WHATSAPP_BASE = "https://wa.me/96565954080";

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-block glass rounded-full px-4 py-1.5 text-xs font-bold text-accent mb-4">تواصل معنا</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">احصل على <span className="text-gradient">تقييم فوري</span> الآن</h2>
          <p className="text-muted-foreground text-lg md:text-xl">تواصل معنا مباشرة عبر الاتصال أو الواتساب — رد فوري خلال دقائق.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <motion.a
            href="tel:65954080"
            initial={{opacity:0, y:20}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:true}}
            className="group glass-strong rounded-3xl p-8 md:p-10 shadow-elegant hover:-translate-y-2 transition-all duration-500 text-center"
          >
            <div className="w-20 h-20 mx-auto rounded-3xl gradient-primary grid place-items-center shadow-glow mb-5 group-hover:scale-110 transition-transform">
              <Phone className="w-10 h-10 text-primary-foreground" />
            </div>
            <div className="text-sm text-muted-foreground mb-1">اتصل بنا الآن</div>
            <div className="text-3xl md:text-4xl font-black text-gradient mb-2" dir="ltr">65954080</div>
            <div className="text-sm text-muted-foreground">رد فوري على مدار الساعة</div>
          </motion.a>

          <motion.a
            href={`${WHATSAPP_BASE}?text=${encodeURIComponent("مرحبا، أرغب ببيع مكيفات مستعملة")}`}
            target="_blank"
            rel="noopener"
            initial={{opacity:0, y:20}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:true}}
            transition={{delay:0.1}}
            className="group glass-strong rounded-3xl p-8 md:p-10 shadow-elegant hover:-translate-y-2 transition-all duration-500 text-center"
          >
            <div className="w-20 h-20 mx-auto rounded-3xl bg-[var(--whatsapp)] grid place-items-center shadow-glow mb-5 group-hover:scale-110 transition-transform">
              <MessageCircle className="w-10 h-10 text-white" />
            </div>
            <div className="text-sm text-muted-foreground mb-1">واتساب</div>
            <div className="text-3xl md:text-4xl font-black text-foreground mb-2">دردشة فورية</div>
            <div className="text-sm text-muted-foreground">أرسل صور المكيفات للتقييم الفوري</div>
          </motion.a>

          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="md:col-span-2 grid sm:grid-cols-2 gap-4">
            <div className="glass rounded-2xl p-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl glass grid place-items-center shrink-0"><MapPin className="w-6 h-6 text-accent" /></div>
              <div>
                <div className="text-xs text-muted-foreground">مناطق التغطية</div>
                <div className="text-base font-extrabold text-foreground">جميع مناطق الكويت</div>
              </div>
            </div>
            <div className="glass rounded-2xl p-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl glass grid place-items-center shrink-0"><Clock className="w-6 h-6 text-accent" /></div>
              <div>
                <div className="text-xs text-muted-foreground">أوقات العمل</div>
                <div className="text-base font-extrabold text-foreground">يومياً 24 ساعة</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
