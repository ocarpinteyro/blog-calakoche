var contentful = require("contentful");
var fs = require("fs");

var client = contentful.createClient({
    space: "6lpwgfudvrjj",
    accessToken: "6qGfNwnHirEh49wvxFupgSnT3QcMRQxXo6BJynXHlus",
});

var sitemapEntries = "";

client
    .getEntries({
        content_type: "post",
    })
    .then(function (entries) {
        entries.items.forEach(function (entry) {
            var dateValid = entry.fields.dateUpdate.split("T");
            if (entry.fields) {
                sitemapEntries += `
                        <url>
                            <loc>${`https://calakoche.com/post/${entry.fields.slug}`}</loc>
                            <lastmod>${dateValid[0]}</lastmod>
                        </url>
                    `;
            }
        });

        const sitemap = `<?xml version='1.0' encoding='UTF-8'?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">${sitemapEntries}</urlset>`;

        fs.writeFile("out/sitemap.xml", sitemap, function (err) {
            if (err) throw err;
            console.log("Sitemap.xml success!");
        });
    });
