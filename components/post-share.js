import { SITE_DOMAIN } from "../lib/constants";

export default function PostShare({ post }) {
    const textWhatsapp = encodeURIComponent(`${post.title} ${SITE_DOMAIN}/posts/${post.slug}`);
    const textTwitter = encodeURIComponent(post.title);
    return (
        <div className="section section-blog-info share-btns">
            <div className="col-md-8 ml-auto mr-auto">
                ❤️ Comparte en:{"  "}
                <a
                    href={`https://www.facebook.com/sharer.php?u=${SITE_DOMAIN}/posts/${post.slug}`}
                    className="btn btn-social btn-fill btn-facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Comparte en Facebook"
                    aria-label="Comparte en Facebook"
                >
                    <i className="fa fa-facebook"></i>
                </a>
                {"  "}
                <a
                    href={`https://twitter.com/intent/tweet?url=${SITE_DOMAIN}/posts/${post.slug}&text=${textTwitter}`}
                    className="btn btn-social btn-fill btn-twitter"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Comparte en Twitter"
                    aria-label="Comparte en Twitter"
                >
                    <i className="fa fa-twitter"></i>
                </a>
                {"  "}
                <a
                    href={`whatsapp://send?text=${textWhatsapp}`}
                    className="btn btn-social btn-fill btn-whatsapp"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Comparte por Whatsapp"
                    aria-label="Comparte en Whatsapp"
                >
                    <i className="fa fa-whatsapp"></i>
                </a>
            </div>
        </div>
    );
}
