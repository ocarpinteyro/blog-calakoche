import Link from "next/link";
import { useAmp } from "next/amp";

export const config = { amp: 'hybrid' };

export default function HeroPost({ title, coverImage, excerpt, slug, tag }) {
    const isAmp = useAmp();
    return (
        <div className="text-center">
            <div className="col-md-8 ml-auto mr-auto">
                <div className="card card-plain card-blog">
                    <div className="card-header card-header-image">
                        <Link as={`/posts/${slug}`} href="/posts/[slug]">
                            <a>
                                {isAmp ? (
                                    <amp-img
                                        width="720"
                                        height="405"
                                        src={`https:${coverImage.url}`}
                                        alt={title}
                                        layout="responsive"
                                    />
                                ) : (
                                    <img
                                        className="img img-raised"
                                        src={`https:${coverImage.url}`}
                                        alt={title}
                                    />
                                )}
                            </a>
                        </Link>
                    </div>
                    <div className="card-body">
                        <span className="h6 card-category text-info">{tag.name}</span>
                        <h3 className="card-title">
                            <Link as={`/posts/${slug}`} href="/posts/[slug]">
                                <a aria-label={title} title={title}>
                                    {title}
                                </a>
                            </Link>
                        </h3>
                        <h4 className="h5 card-description">{excerpt}</h4>
                        <Link as={`/posts/${slug}`} href="/posts/[slug]">
                            <a
                                className="btn btn-primary btn-round"
                                aria-label="Leer más"
                                title="Leer más"
                            >
                                Leer más
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
