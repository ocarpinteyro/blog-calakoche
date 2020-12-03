import { SITE_LOGO, SITE_DOMAIN } from '../lib/constants'

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
            "datePublished":"${post.date}",
            "dateModified":"${post.dateUpdate}",
            "description":"${post.excerpt}",
            "headline":"${post.title}",
            "thumbnailUrl":"https:${post.coverImage.url}",
            "image":"https:${post.coverImage.url}",
            "url":"${SITE_DOMAIN}/post/${post.slug}",
            "mainEntityOfPage":"${SITE_DOMAIN}/post/${post.slug}",
            "publisher":{
              "@type":"Organization",
              "name":"calakoche.com",
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