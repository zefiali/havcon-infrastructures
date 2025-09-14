/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://havconinfra.com", // 👈 non-www
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/admin/*", "/private/*"], // optional
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
};
