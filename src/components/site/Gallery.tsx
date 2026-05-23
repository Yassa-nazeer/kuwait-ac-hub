import { motion } from "motion/react";
import g1 from "@/assets/gallery-split.jpg";
import g2 from "@/assets/gallery-window.jpg";
import g3 from "@/assets/gallery-scrap.jpg";
import g4 from "@/assets/gallery-warehouse.jpg";
import g5 from "@/assets/gallery-tech.jpg";
import g6 from "@/assets/gallery-truck.jpg";

const items = [
  { src: g1, label: "مكيفات سبليت مستعملة", cls: "md:col-span-2 md:row-span-2" },
  { src: g3, label: "سكراب مكيفات", cls: "" },
  { src: g2, label: "مكيفات شباك", cls: "" },
  { src: g4, label: "مخازن المكيفات", cls: "md:col-span-2" },
  { src: g5, label: "فنيون محترفون", cls: "" },
  { src: g6, label: "شاحنات النقل", cls: "" },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-block glass rounded-full px-4 py-1.5 text-xs font-bold text-accent mb-4">معرض الأعمال</div>
          <h2 className="text-4xl md:text-5xl font-black mb-4">صور من <span className="text-gradient">واقع عملنا</span></h2>
          <p className="text-muted-foreground text-lg">مخازنا، فرقنا، شاحناتنا، ومنتجاتنا.</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-4">
          {items.map((it,i) => (
            <motion.div
              key={i}
              initial={{opacity:0, scale:0.95}}
              whileInView={{opacity:1, scale:1}}
              viewport={{once:true}}
              transition={{delay:i*0.08}}
              className={`group relative overflow-hidden rounded-3xl glass-strong shadow-card ${it.cls}`}
            >
              <img src={it.src} alt={it.label} loading="lazy" width={1024} height={1024} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-90" />
              <div className="absolute bottom-4 right-4 left-4">
                <div className="glass rounded-xl px-3 py-2 inline-block">
                  <span className="text-sm font-extrabold text-foreground">{it.label}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
