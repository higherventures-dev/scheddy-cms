// config/middlewares.ts

export default [
  'strapi::logger',
  'strapi::errors',

  // You can keep security before CORS
  'strapi::security',

  // Explicit CORS config
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: [
        'http://localhost:3000',              // local Next dev
        'https://scheddy-www.vercel.app',     // your marketing site on Vercel
        'https://scheddy.us',                 // custom domain (when you wire it up)
      ],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
      keepHeaderOnError: true,
    },
  },

  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
