import { motion } from "motion/react";
import { ShoppingCart, Wrench, Snowflake, Truck, BadgeDollarSign, Clock } from "lucide-react";

const services = [
  { icon: ShoppingCart, title: "شراء مكيفات سبليت مستعملة", desc: "نشتري مكيفات السبليت المستعملة بجميع الأحجام والماركات بأعلى سعر فوري في الكويت." },
  { icon: Snowflake, title: "شراء مكيفات شباك مستعملة", desc: "نشتري مكيفات الشباك المستعملة سواء بحالة جيدة أو غير شغالة بأفضل الأسعار." },
  { icon: Wrench, title: "شراء مكيفات مركزي مستعملة", desc: "نشتري مكيفات التكييف المركزي والكاسيت والدكتد المستعملة بكميات كبيرة وصغيرة." },
  { icon: Truck, title: "فك ونقل مجاني", desc: "فريق محترف لفك المكيفات ونقلها مجاناً فور الاتفاق على السعر في جميع مناطق الكويت." },
  { icon: BadgeDollarSign, title: "تقييم فوري وأسعار شفافة", desc: "نقدّم لك تقييم سعر فوري عبر الواتساب أو المعاينة المجانية في موقعك." },
  { icon: Clock, title: "خدمة سريعة 24/7", desc: "نستجيب لطلبك في أسرع وقت ممكن — معاينة وشراء في نفس اليوم." },
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">نشتري <span className="text-gradient">جميع أنواع المكيفات</span> المستعملة</h2>
          <p className="text-muted-foreground text-lg md:text-xl">متخصصون في شراء المكيفات المستعملة بجميع أنواعها وأحجامها في جميع مناطق الكويت بأعلى الأسعار.</p>
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
