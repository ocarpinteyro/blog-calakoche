import Link from 'next/link'
import Date from '../components/date'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  tag,
}) {
  return (
    <div className="card card-plain card-blog">
      <div className="row">
        <div className="col-md-4">
          <div className="card-header card-header-image">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a>
                <img className="img img-raised" src={`https:${coverImage.url}`} />
              </a>
            </Link>
            <div className="colored-shadow" style={{
              backgroundImage: `url(https:${coverImage.url})`, 
              opacity: 1
            }} />
          </div>
        </div>
        <div className="col-md-8">
          <h6 className="card-category text-info">{tag.name}</h6>
          <h3 className="card-title">
          <Link as={`/posts/${slug}`} href="/posts/[slug]"><a>{title}</a></Link>
          </h3>
          <p className="card-description">
          {excerpt}
          <Link as={`/posts/${slug}`} href="/posts/[slug]"><a>Leer más</a></Link>
          </p>
          <p className="author">
              por <b>{author.name}</b>, <Date dateString={date} />
            </p>
        </div>
      </div>
    </div>
  )
}
