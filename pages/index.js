import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/api'
import Head from 'next/head'
import {SITE_DOMAIN, SITE_TITLE_TAB, SITE_AUTHOR, SITE_DESCRIPTION} from '../lib/constants'

export default function Index({ preview, allPosts }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>{SITE_TITLE_TAB}</title>
          <meta name="author" content={SITE_AUTHOR} />
          <meta name="description" content={SITE_DESCRIPTION} />
          <meta itemProp="description" content={SITE_DESCRIPTION} />
          <meta property="og:description" content={SITE_DESCRIPTION} />
          <meta property="twitter:description" content={SITE_DESCRIPTION} />
          <meta property="twitter:image:alt" content={SITE_TITLE_TAB} />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:title" content={SITE_TITLE_TAB} />
          <meta property="og:image:alt" content={SITE_TITLE_TAB} />
          <meta property="og:site_name" content={SITE_TITLE_TAB} />
          <meta property="og:title" content={SITE_TITLE_TAB} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={SITE_DOMAIN} />
          <meta property="twitter:image" content="https://calakoche.com/images/social_share.jpg" />
          <meta property="og:image" content="https://calakoche.com/images/social_share.jpg" />
          <meta property="og:image:width" content="400" />
          <meta property="og:image:height" content="400" />
          <link rel="canonical" href={SITE_DOMAIN} />
        </Head>
        <div className="section-space"></div>
        <Container>
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
              tag={heroPost.tag}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview)
  return {
    props: { preview, allPosts },
  }
}
