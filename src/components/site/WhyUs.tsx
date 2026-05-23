import { motion, useInView, useMotionValue, animate } from "motion/react";
import { useEffect, useRef } from "react";
import { BadgeCheck, Clock, MapPin, Users, Eye } from "lucide-react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const mv = useMotionValue(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, to, { duration: 2, ease: "easeOut",
      onUpdate: (v) => { if (ref.current) ref.current.textContent = Math.floor(v).toLocaleString("ar-EG") + suffix; }
    });
    return controls.stop;
  }, [inView, to, suffix, mv]);
  return <span ref={ref}>0{suffix}</span>;
}

const stats = [
  { icon: BadgeCheck, value: 10000, suffix: "+", label: "عملية شراء وبيع" },
  { icon: Users, value: 5000, suffix: "+", label: "عميل سعيد" },
  { icon: Clock, value: 24, suffix: "/7", label: "خدمة متواصلة" },
  { icon: MapPin, value: 6, suffix: "", label: "مناطق التغطية" },
];

const reasons = [
  { icon: BadgeCheck, t: "أسعار ممتازة", d: "أعلى الأسعار في السوق الكويتي" },
  { icon: Clock, t: "خدمة سريعة", d: "وصول خلال 30 دقيقة" },
  { icon: MapPin, t: "جميع مناطق الكويت", d: "تغطية كاملة لكل المحافظات" },
  { icon: Users, t: "فريق محترف", d: "فنيون مدربون وخبرة طويلة" },
  { icon: Eye, t: "معاينة مجانية", d: "تقييم بدون أي رسوم" },
];

export function WhyUs() {
  return (
    <section id="why" className="py-24 relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="container mx-auto px-4">
        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-block glass rounded-full px-4 py-1.5 text-xs font-bold text-accent mb-4">لماذا نحن</div>
          <h2 className="text-4xl md:text-5xl font-black mb-4">الاختيار <span className="text-gradient">الأول</span> في الكويت</h2>
          <p className="text-muted-foreground text-lg">سنوات من الثقة والاحترافية في خدمة عملائنا الكرام.</p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((s,i) => (
            <motion.div key={s.label} initial={{opacity:0,scale:0.9}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} transition={{delay:i*0.1}} className="glass-strong rounded-3xl p-6 text-center shadow-card">
              <s.icon className="w-8 h-8 mx-auto mb-3 text-accent" />
              <div className="text-3xl md:text-4xl font-black text-gradient">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="text-xs md:text-sm text-muted-foreground mt-2 font-semibold">{s.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
          {reasons.map((r,i) => (
            <motion.div key={r.t} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.08}} className="glass rounded-2xl p-5 text-center hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 mx-auto rounded-xl gradient-primary grid place-items-center mb-3 shadow-glow">
                <r.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-extrabold text-foreground mb-1">{r.t}</h3>
              <p className="text-xs text-muted-foreground">{r.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
