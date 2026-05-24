import { motion } from "motion/react";

export function PageHero({ eyebrow, title, highlight, desc, image }: { eyebrow: string; title: string; highlight?: string; desc: string; image: string }) {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -right-32 w-[420px] h-[420px] rounded-full bg-accent/25 blur-3xl animate-blob" />
        <div className="absolute bottom-0 -left-24 w-[360px] h-[360px] rounded-full bg-primary/25 blur-3xl animate-blob" style={{ animationDelay: "4s" }} />
      </div>
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-center lg:text-right">
            <div className="inline-block glass rounded-full px-4 py-1.5 text-xs font-bold text-accent mb-4">{eyebrow}</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-5">
              {title} {highlight && <span className="text-gradient">{highlight}</span>}
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">{desc}</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }} className="relative">
            <div className="absolute -inset-6 bg-gradient-to-tr from-primary/30 to-accent/30 blur-3xl rounded-full" />
            <div className="relative glass-strong rounded-[2rem] p-3 shadow-elegant">
              <img src={image} alt={title} loading="lazy" width={1280} height={896} className="rounded-3xl w-full h-auto object-cover aspect-[4/3]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}