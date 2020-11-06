import Link from 'next/link'

export default function HeroPost({
  title,
  coverImage,
  excerpt,
  slug,
  tag,
}) {
  return (
    <div className="text-center">
      <div className="col-md-8 ml-auto mr-auto">
        <div className="card card-plain card-blog">
            <div className="card-header card-header-image">
              <Link as={`/posts/${slug}`} href="/posts/[slug]">
                <a>
                  <img className="img img-raised" src={coverImage.url} />
                </a>
              </Link>
            </div>
          <div className="card-body">
            <h6 className="card-category text-info">{tag.name}</h6>
            <h3 className="card-title">
            <Link as={`/posts/${slug}`} href="/posts/[slug]"><a>{title}</a></Link>
            </h3>
            <h5 className="card-description">
              {excerpt}
            </h5>
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="btn btn-primary btn-round">Leer más</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
