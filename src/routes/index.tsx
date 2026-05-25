import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "الساحل الشمالي — شراء المكيفات المستعملة في الكويت" },
      { name: "description", content: "الساحل الشمالي: شراء جميع أنواع المكيفات المستعملة وسكراب التكييف في الكويت بأعلى الأسعار. فك ونقل مجاني. اتصل 65954080" },
      { "http-equiv": "refresh", content: "0; url=/index.html" } as any,
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    window.location.replace("/index.html");
  }, []);
  return null;
}
