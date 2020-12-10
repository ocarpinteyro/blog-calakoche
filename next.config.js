require("dotenv").config();

module.exports = {
    env: {
        NEXT_EXAMPLE_CMS_CONTENTFUL_SPACE_ID: process.env.NEXT_EXAMPLE_CMS_CONTENTFUL_SPACE_ID,
        NEXT_EXAMPLE_CMS_CONTENTFUL_ACCESS_TOKEN:
            process.env.NEXT_EXAMPLE_CMS_CONTENTFUL_ACCESS_TOKEN,
        NEXT_EXAMPLE_CMS_CONTENTFUL_PREVIEW_ACCESS_TOKEN:
            process.env.NEXT_EXAMPLE_CMS_CONTENTFUL_PREVIEW_ACCESS_TOKEN,
    },
    images: {
        domains: ["images.ctfassets.net"],
    },
    experimental: {
        amp: {
            skipValidation: true,
        },
    },
};
