import Head from 'next/head'
import { SITE_TITLE, SITE_DOMAIN } from '../lib/constants'

export default function Meta({post}) {
  return (
    <Head>
      <title>
        {post.title} | {post.tag.name} | {SITE_TITLE}
      </title>
      <meta name="author" content={post.author} />
      <meta name="description" content={post.excerpt} />
      <meta itemProp="description" content={post.excerpt} />
      <meta property="og:description" content={post.excerpt} />
      <meta property="twitter:description" content={post.excerpt} />
      <meta property="twitter:image:alt" content={post.title} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={post.title} />
      <meta property="og:image:alt" content={post.title} />
      <meta property="og:title" content={post.title} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={`${SITE_DOMAIN}/posts/${post.slug}`} />
      <meta property="twitter:image" content={`https:${post.coverImage.url}`} />
      <meta property="og:image" content={`https:${post.coverImage.url}`} />
      <link rel="canonical" href={`${SITE_DOMAIN}/posts/${post.slug}`} />
    </Head>
  )
}
