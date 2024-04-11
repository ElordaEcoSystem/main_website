module.exports = [
  "strapi::logger",
  "strapi::errors",
  "strapi::security",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::query",
  // 'strapi::body',
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
  {
    name: "strapi::body",
    config: {
      formLimit: "1000mb", // modify form body
      jsonLimit: "1000mb", // modify JSON body
      textLimit: "1000mb", // modify text body
      formidable: {
        maxFileSize: 1024 * 1024 * 1024 * 1024, // multipart data, modify here limit of uploaded file size
      },
    },
  },
];
