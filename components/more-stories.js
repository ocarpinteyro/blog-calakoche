import PostPreview from '../components/post-preview'
import HeroPost from '../components/hero-post'
import date from './date'

export default function MoreStories({ posts }) {
  return (
    posts.map(post => (
      <HeroPost
        title={post.title}
        coverImage={post.coverImage}
        date={post.date}
        author={post.author}
        slug={post.slug}
        excerpt={post.excerpt}
        tag={post.tag}
        key={new Date()}
      />
    ))
  )
}
