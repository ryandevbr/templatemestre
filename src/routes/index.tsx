import { createFileRoute } from "@tanstack/react-router";
import { Storefront } from "@/components/storefront";
import { STORE_CONFIG, isFashionNiche } from "@/config/store.config";

const pageTitle = `${STORE_CONFIG.name} | ${
  isFashionNiche() ? "Moda Feminina" : "Acessórios & Semijoias"
}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: pageTitle },
      { name: "description", content: STORE_CONFIG.hero.subtitle },
      { property: "og:title", content: pageTitle },
      { property: "og:description", content: STORE_CONFIG.hero.subtitle },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Storefront,
});
