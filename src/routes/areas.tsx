import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Areas } from "@/components/site/Areas";
import truck from "@/assets/gallery-truck.jpg";

export const Route = createFileRoute("/areas")({
  head: () => ({
    meta: [
      { title: "مناطق التغطية — جميع محافظات الكويت" },
      { name: "description", content: "الساحل الشمالي يخدم جميع مناطق الكويت: العاصمة، حولي، الفروانية، الأحمدي، الجهراء، مبارك الكبير." },
      { property: "og:title", content: "مناطق التغطية — الساحل الشمالي" },
      { property: "og:description", content: "تغطية شاملة لكل محافظات الكويت." },
      { property: "og:image", content: truck },
    ],
    links: [{ rel: "canonical", href: "/areas" }],
  }),
  component: AreasPage,
});

function AreasPage() {
  return (
    <>
      <PageHero
        eyebrow="مناطق التغطية"
        title="نخدمكم في"
        highlight="كل الكويت"
        desc="فرق متعددة موزعة على كل المحافظات لخدمتك خلال 30 دقيقة من اتصالك."
        image={truck}
      />
      <Areas />
    </>
  );
}