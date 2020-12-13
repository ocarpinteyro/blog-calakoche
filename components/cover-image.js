import cn from 'classnames'
import Link from 'next/link'

export default function CoverImage({ title, url, slug, tagslug }) {
  const image = (
    <img
      src={url}
      alt={title}
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
    />
  )
  return (
    <div className="-mx-5 sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title} title={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
