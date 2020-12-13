import { SITE_TITLE, SITE_LOGO, SITE_DOMAIN, SITE_DESCRIPTION } from '../lib/constants'

export default function StructuredDataSite() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `
          {
            "@context": "https://schema.org",
            "@id": "${SITE_DOMAIN}/#brand",
            "@type": "Brand",
            "logo": "${SITE_LOGO}",
            "name": "${SITE_TITLE}",
            "url": "${SITE_DOMAIN}",
            "sameAs": [
              "https://www.instagram.com/calakoche/", 
              "https://fb.com/calakoche/", 
              "https://www.twitter.com/calakoche/",
              "https://www.youtube.com/channel/UCLOLvdrbCpGDc3FKpLPK6LA/"
            ]
          }
          `,
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "${SITE_DOMAIN}/#website",
            "name": "${SITE_TITLE}",
            "url": "${SITE_DOMAIN}",
            "publisher": { 
              "@type": "Organization", 
              "@id": "${SITE_DOMAIN}/#publisher", 
              "name": "${SITE_TITLE}", 
              "logo": { 
                "@type": "ImageObject", 
                "url": "${SITE_LOGO}" 
              } 
            },
            "description": "${SITE_DESCRIPTION}"
          }
          `,
        }}
      />
    </>
  );
}