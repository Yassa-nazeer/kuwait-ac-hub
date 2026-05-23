import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { useState } from "react";

const reviews = [
  { n: "أبو محمد", a: "حولي", t: "خدمة ممتازة وأسعار ما تنلاقي مثلها بالكويت. اشتروا مني المكيفات بنفس اليوم وبسعر ممتاز." },
  { n: "خالد العتيبي", a: "الفروانية", t: "فريق محترف جداً، حضروا في الوقت المحدد وفكوا المكيفات بكل احتراف. أنصح بهم." },
  { n: "أم عبدالله", a: "العاصمة", t: "تعاملت معهم لشراء مكيف مستعمل بحالة ممتازة، شغال زي الجديد والسعر ممتاز." },
  { n: "فهد الرشيدي", a: "الأحمدي", t: "اشتروا مني سكراب التكييف القديم وأعطوني سعر فوق المتوقع. صراحة شغل نظيف." },
  { n: "بدر العنزي", a: "الجهراء", t: "سرعة في الرد وشغل احترافي. صيانة مكيف البيت صارت أحسن بكثير بعدهم." },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const r = reviews[i];
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-block glass rounded-full px-4 py-1.5 text-xs font-bold text-accent mb-4">آراء العملاء</div>
          <h2 className="text-4xl md:text-5xl font-black mb-4">ماذا يقول <span className="text-gradient">عملاؤنا</span></h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div key={i} initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} className="glass-strong rounded-3xl p-10 shadow-elegant relative">
            <Quote className="absolute top-6 left-6 w-12 h-12 text-accent/30" />
            <div className="flex gap-1 mb-5 justify-center">
              {Array.from({length:5}).map((_,k) => <Star key={k} className="w-5 h-5 fill-accent text-accent" />)}
            </div>
            <p className="text-xl md:text-2xl text-foreground leading-relaxed text-center font-medium mb-6">"{r.t}"</p>
            <div className="text-center">
              <div className="font-extrabold text-lg text-gradient">{r.n}</div>
              <div className="text-sm text-muted-foreground">{r.a}</div>
            </div>
          </motion.div>

          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_,k) => (
              <button
                key={k}
                onClick={() => setI(k)}
                aria-label={`مراجعة ${k+1}`}
                className={`h-2 rounded-full transition-all ${k===i ? "w-10 gradient-primary" : "w-2 bg-white/20"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
