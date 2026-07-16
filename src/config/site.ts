// ============================================================
// config/site.ts — Royal Enfield Showroom
// Single source of truth for ALL dealership identity.
// Architecture §3: every contact/detail renders from here —
// never hardcode in components.
// TODO: Owner to supply real values before launch (memory.md §9)
// ============================================================

export const site = {
  dealerName:  'Heritage Motors',
  brandLine:   'Royal Enfield Showroom',
  city:        '{City}',                    // TODO: owner supplies
  tagline:     'Ride the thump. Own the road.',

  // Contact
  phone:       '+91 98XXX XXXXX',           // TODO: owner supplies
  email:       'hello@example.com',         // TODO: owner supplies
  whatsapp:    '',                           // TODO: owner supplies (wa.me deep link)

  // Address (array = two-line address block)
  address:     ['123 Main Road', '{City}, {State} {PIN}'],

  // Opening hours
  hours: [
    { days: 'Mon – Sat', time: '9:00 AM – 7:00 PM' },
    { days: 'Sunday',    time: '10:00 AM – 5:00 PM' },
  ],

  // Social links
  socials: {
    instagram: '#',
    facebook:  '#',
    youtube:   '#',
  },

  // Disclaimer (mandatory — prd.md S13 / rules.md §5)
  disclaimer:
    'Royal Enfield and model names are trademarks of Eicher Motors Ltd. ' +
    'This is an independent dealership website. ' +
    'Prices are indicative ex-showroom.',

  // Navigation
  nav: [
    { label: 'Bikes',        href: '/bikes' },
    { label: 'Accessories',  href: '/accessories' },
    { label: 'Service',      href: '/service' },
    { label: 'Contact',      href: '/contact' },
  ],
} as const;

export type Site = typeof site;
