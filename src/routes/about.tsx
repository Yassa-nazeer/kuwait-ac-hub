import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ShieldCheck, Award, Users, Sparkles } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import teamImg from "@/assets/about-team.jpg";
import scrapImg from "@/assets/about-scrap.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "من نحن — الساحل الشمالي للمكيفات المستعملة" },
      { name: "description", content: "تعرّف على الساحل الشمالي، الشركة الرائدة في الكويت لشراء المكيفات المستعملة وسكراب التكييف منذ سنوات طويلة من الخبرة والثقة." },
      { property: "og:title", content: "من نحن — الساحل الشمالي" },
      { property: "og:description", content: "خبرة، شفافية، وأعلى الأسعار في الكويت." },
      { property: "og:image", content: teamImg },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  { icon: ShieldCheck, t: "الثقة والشفافية", d: "أسعار واضحة بدون مفاجآت ومعاملة محترمة لكل عميل." },
  { icon: Award, t: "خبرة طويلة", d: "أكثر من 10 سنوات في سوق المكيفات المستعملة بالكويت." },
  { icon: Users, t: "فريق محترف", d: "فنيون مدربون على أعلى مستوى لفك ونقل المكيفات بأمان." },
  { icon: Sparkles, t: "أعلى الأسعار", d: "نقدّم لك أفضل سعر فوري في السوق الكويتي." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="من نحن"
        title="الساحل الشمالي"
        highlight="ثقة الكويت منذ سنوات"
        desc="شركة الساحل الشمالي متخصصة في شراء جميع أنواع المكيفات المستعملة وسكراب التكييف داخل دولة الكويت. نقدم خدمة احترافية، تقييم فوري، وفك ونقل مجاني لجميع المناطق."
        image={teamImg}
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div initial={{opacity:0,x:30}} whileInView={{opacity:1,x:0}} viewport={{once:true}}>
              <div className="glass-strong rounded-3xl p-3 shadow-elegant">
                <img src={scrapImg} alt="سكراب التكييف" loading="lazy" width={1280} height={896} className="rounded-2xl w-full h-auto" />
              </div>
            </motion.div>
            <motion.div initial={{opacity:0,x:-30}} whileInView={{opacity:1,x:0}} viewport={{once:true}}>
              <div className="inline-block glass rounded-full px-4 py-1.5 text-xs font-bold text-accent mb-4">قصتنا</div>
              <h2 className="text-3xl md:text-4xl font-black mb-5">رواد سوق <span className="text-gradient">المكيفات المستعملة</span> في الكويت</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                بدأنا رحلتنا بهدف بسيط: تقديم خدمة شراء مكيفات مستعملة موثوقة وسريعة لأهل الكويت. اليوم، نملك فريق متكامل من الفنيين والمقيّمين ومخازن مجهزة لاستقبال كميات كبيرة.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                نشتري كل شيء — من مكيف الشباك القديم إلى وحدات التكييف المركزي والسكراب — وندفع نقداً في نفس اللحظة.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-3">قيمنا <span className="text-gradient">الأساسية</span></h2>
            <p className="text-muted-foreground">المبادئ التي نعمل بها مع كل عميل.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v,i) => (
              <motion.div key={v.t} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.08}} className="glass-strong rounded-3xl p-6 text-center shadow-card hover:-translate-y-1 transition-all">
                <div className="w-14 h-14 mx-auto rounded-2xl gradient-primary grid place-items-center shadow-glow mb-4">
                  <v.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-extrabold text-foreground mb-2">{v.t}</h3>
                <p className="text-sm text-muted-foreground">{v.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}