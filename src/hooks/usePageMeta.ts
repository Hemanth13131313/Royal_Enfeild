// ============================================================
// hooks/usePageMeta.ts — Royal Enfield Showroom
// Sets document.title + meta description per route.
// Architecture §8: no helmet lib, 6 routes only.
// ============================================================

import { useEffect } from 'react';
import { site } from '../config/site';

export function usePageMeta(title: string, description?: string) {
  useEffect(() => {
    document.title = `${title} | ${site.dealerName} — Royal Enfield`;

    if (description) {
      const metaDesc = document.querySelector<HTMLMetaElement>(
        'meta[name="description"]'
      );
      if (metaDesc) metaDesc.content = description;
    }
  }, [title, description]);
}
