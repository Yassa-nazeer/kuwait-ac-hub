import { motion } from "motion/react";
import { MapPin } from "lucide-react";

const areas = [
  { name: "حولي", desc: "تغطية كاملة لجميع مناطق محافظة حولي" },
  { name: "الفروانية", desc: "خدمة سريعة في كل أحياء الفروانية" },
  { name: "الجهراء", desc: "وصول مباشر لجميع مناطق الجهراء" },
  { name: "الأحمدي", desc: "فريق متخصص في محافظة الأحمدي" },
  { name: "العاصمة", desc: "تغطية كاملة لمدينة الكويت" },
  { name: "مبارك الكبير", desc: "خدمة مميزة في مبارك الكبير" },
];

export function Areas() {
  return (
    <section id="areas" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-block glass rounded-full px-4 py-1.5 text-xs font-bold text-accent mb-4">مناطق التغطية</div>
          <h2 className="text-4xl md:text-5xl font-black mb-4">نخدمكم في <span className="text-gradient">كل الكويت</span></h2>
          <p className="text-muted-foreground text-lg">تغطية شاملة لجميع محافظات ومناطق دولة الكويت بدون استثناء.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {areas.map((a, i) => (
            <motion.div
              key={a.name}
              initial={{opacity:0,y:30}}
              whileInView={{opacity:1,y:0}}
              viewport={{once:true}}
              transition={{delay:i*0.07}}
              className="group relative glass-strong rounded-3xl p-6 overflow-hidden hover:-translate-y-1 transition-all duration-500 shadow-card"
            >
              <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-accent/20 blur-2xl group-hover:bg-accent/40 transition-colors" />
              <div className="relative flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl gradient-primary grid place-items-center shadow-glow shrink-0">
                  <MapPin className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-foreground mb-1">{a.name}</h3>
                  <p className="text-sm text-muted-foreground">{a.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
