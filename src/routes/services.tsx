import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Services } from "@/components/site/Services";
import { WhyUs } from "@/components/site/WhyUs";
import fleetImg from "@/assets/services-fleet.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "خدماتنا — شراء مكيفات سبليت وشباك ومركزي مستعمل" },
      { name: "description", content: "نشتري جميع أنواع المكيفات المستعملة في الكويت: سبليت، شباك، مركزي، كاسيت، دكتد. فك ونقل مجاني وأسعار فورية." },
      { property: "og:title", content: "خدمات الساحل الشمالي" },
      { property: "og:description", content: "كل أنواع المكيفات المستعملة — تقييم فوري وأسعار شفافة." },
      { property: "og:image", content: fleetImg },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="خدماتنا"
        title="نشتري كل أنواع"
        highlight="المكيفات المستعملة"
        desc="من مكيف الشباك إلى وحدات التكييف المركزي. تقييم فوري، فك ونقل مجاني، ودفع نقدي فوري في جميع مناطق الكويت."
        image={fleetImg}
      />
      <Services />
      <WhyUs />
    </>
  );
}