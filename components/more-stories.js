import HeroPost from '../components/hero-post'

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
        key={post.slug}
      />
    ))
  )
}
