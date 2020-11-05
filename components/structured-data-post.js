import { SITE_LOGO, SITE_DOMAIN, SITE_DESCRIPTION } from '../lib/constants'

export default function StructuredData({ post }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `
          {
            "@context":"https://schema.org/",
            "@type":"NewsArticle",
            "author":["${post.author.name}"],
            "creator":["${post.author.name}"],
            "articleSection":"${post.tag.name}",
            "datePublished":"2020-11-03T08:54:54-06:00",
            "dateModified":"2020-11-03T15:04:29-06:00",
            "description":"${post.excerpt}",
            "headline":"${post.title}",
            "thumbnailUrl":"${post.coverImage.url}",
            "image":"${post.coverImage.url}",
            "url":"${SITE_DOMAIN}/${post.tag.slug}/${post.slug}",
            "mainEntityOfPage":"${SITE_DOMAIN}/${post.tag.slug}/${post.slug}",
            "publisher":{
              "@type":"Organization",
              "name":"blog.calakoche.com",
              "logo":{
                "@type":"ImageObject",
                "url":"${SITE_LOGO}",
                "height":400,
                "width":400
              }
            }
          }
          `,
        }}
      />
    </>
  );
}