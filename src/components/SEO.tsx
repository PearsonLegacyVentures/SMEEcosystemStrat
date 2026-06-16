import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
}

export function SEO({ title, description }: SEOProps) {
  useEffect(() => {
    document.title = title;

    const upsertMeta = (name: string, content: string, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let tag = document.head.querySelector<HTMLMetaElement>(selector);
      if (!tag) {
        tag = document.createElement("meta");
        if (property) tag.setAttribute("property", name);
        else tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.content = content;
    };

    upsertMeta("description", description);
    upsertMeta("og:title", title, true);
    upsertMeta("og:description", description, true);
  }, [title, description]);

  return null;
}
