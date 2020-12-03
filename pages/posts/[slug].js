import { useRouter } from 'next/router'
import Head from 'next/head'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import PostShare from '../../components/post-share'
import MoreStories from '../../components/more-stories'
import PostHeader from '../../components/post-header'
import SectionSeparator from '../../components/section-separator'
import PostTitle from '../../components/post-title'
import Layout from '../../components/layout'
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api'
import StructuredDataPost from '../../components/structured-data-post'
import MetasArticle from '../../components/meta-articles'

export default function Post({ post, morePosts, preview }) {
  const router = useRouter()

  if (!router.isFallback && !post) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout preview={preview}>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <MetasArticle post={post} />
              <div className="section-space"></div>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                imageCoverSource={post.imageCoverSource}
                date={post.date}
                dateUpdate={post.dateUpdate}
                author={post.author}
                excerpt={post.excerpt}
                tag={post.tag}
              />
              <PostBody content={post.content} />
              <PostShare post={post} />
            </article>
            <SectionSeparator />
            {morePosts && morePosts.length > 0 && (
              <MoreStories posts={morePosts} />
            )}
            <StructuredDataPost post={post} />
          </>
        )}
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview)

  return {
    props: {
      preview,
      post: data?.post,
      morePosts: data?.morePosts,
    },
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()
  return {
    paths: allPosts?.map(({ slug }) => `/posts/${slug}`) || [],
    fallback: true,
  }
}
