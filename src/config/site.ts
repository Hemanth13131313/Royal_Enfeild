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
  city:        'Hyderabad',
  tagline:     'Ride the thump. Own the road.',

  // Contact
  phone:       '+91 90000 12345',
  email:       'ride@heritagemotors.in',
  whatsapp:    'https://wa.me/919000012345',

  // Address (array = two-line address block)
  address:     ['Plot 12, Road No. 36, Jubilee Hills', 'Hyderabad, Telangana 500033'],

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
