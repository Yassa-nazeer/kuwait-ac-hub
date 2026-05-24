import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Contact } from "@/components/site/Contact";
import tech from "@/assets/gallery-tech.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "اتصل بنا — الساحل الشمالي 65954080" },
      { name: "description", content: "تواصل مع الساحل الشمالي على الرقم 65954080 أو عبر الواتساب للحصول على تقييم فوري لمكيفاتك المستعملة." },
      { property: "og:title", content: "اتصل بنا — الساحل الشمالي" },
      { property: "og:description", content: "رد فوري على مدار الساعة." },
      { property: "og:image", content: tech },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="تواصل معنا"
        title="احصل على"
        highlight="تقييم فوري"
        desc="فريقنا جاهز للرد على استفسارك خلال دقائق. اتصل مباشرة أو أرسل صور المكيفات عبر الواتساب."
        image={tech}
      />
      <Contact />
    </>
  );
}