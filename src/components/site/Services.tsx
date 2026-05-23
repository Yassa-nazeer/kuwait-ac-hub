import { motion } from "motion/react";
import { ShoppingCart, Recycle, Tag, Wrench, Sparkles, Snowflake } from "lucide-react";

const services = [
  { icon: ShoppingCart, title: "شراء مكيفات مستعملة", desc: "نشتري جميع أنواع وأحجام المكيفات المستعملة بأعلى الأسعار في الكويت." },
  { icon: Recycle, title: "شراء سكراب المكيفات", desc: "نشتري سكراب التكييف المركزي والشباك والسبليت بأفضل الأسعار اليومية." },
  { icon: Tag, title: "بيع مكيفات مستعملة", desc: "مكيفات مستعملة بحالة ممتازة مع ضمان التشغيل وأسعار تناسب الجميع." },
  { icon: Wrench, title: "فك ونقل المكيفات", desc: "فريق محترف لفك ونقل المكيفات بجميع أنواعها بسرعة وأمان تام." },
  { icon: Sparkles, title: "صيانة وتنظيف المكيفات", desc: "صيانة شاملة وتنظيف عميق لضمان كفاءة التبريد وعمر أطول للجهاز." },
  { icon: Snowflake, title: "سبليت • شباك • مركزي", desc: "نتعامل مع جميع الأنواع: السبليت، الشباك، المركزي، الكاسيت والدكتد." },
];

export function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-block glass rounded-full px-4 py-1.5 text-xs font-bold text-accent mb-4">خدماتنا</div>
          <h2 className="text-4xl md:text-5xl font-black mb-4">حلول متكاملة <span className="text-gradient">للمكيفات والسكراب</span></h2>
          <p className="text-muted-foreground text-lg">خدمة احترافية شاملة من الشراء والبيع إلى الفك والنقل والصيانة في جميع مناطق الكويت.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative glass-strong rounded-3xl p-7 shadow-card hover:-translate-y-2 transition-all duration-500"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/10 group-hover:to-accent/10 transition-all" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl gradient-primary grid place-items-center shadow-glow mb-5 group-hover:scale-110 transition-transform">
                  <s.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-extrabold mb-2 text-foreground">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
