import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Gallery } from "@/components/site/Gallery";
import { Testimonials } from "@/components/site/Testimonials";
import warehouse from "@/assets/gallery-warehouse.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "المعرض — صور أعمال الساحل الشمالي" },
      { name: "description", content: "اطّلع على صور من مخازننا، فرقنا، شاحناتنا، والمكيفات المستعملة التي اشتريناها داخل الكويت." },
      { property: "og:title", content: "معرض أعمال الساحل الشمالي" },
      { property: "og:description", content: "صور حقيقية من واقع عملنا في شراء المكيفات المستعملة." },
      { property: "og:image", content: warehouse },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="معرض الأعمال"
        title="من واقع"
        highlight="عملنا اليومي"
        desc="مخازن مجهزة، فرق متخصصة، وأسطول نقل احترافي يخدم جميع مناطق الكويت."
        image={warehouse}
      />
      <Gallery />
      <Testimonials />
    </>
  );
}