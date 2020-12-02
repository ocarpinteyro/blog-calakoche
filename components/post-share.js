import { SITE_DOMAIN } from "../lib/constants";

export default function PostShare({ post }) {
    return (
        <div className="section section-blog-info">
            <div className="col-md-8 ml-auto mr-auto">
                Comparte en:{"  "}
                <a
                    href={`https://www.facebook.com/dialog/share?display=popup&href=${SITE_DOMAIN}/post/${post.slug}`}
                    className="btn btn-social btn-fill btn-facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fa fa-facebook"></i>
                </a>
                {"  "}
                <a
                    href={`https://twitter.com/intent/tweet?url=${SITE_DOMAIN}/post/${post.slug}&text=${post.title}`}
                    className="btn btn-social btn-fill btn-twitter"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fa fa-twitter"></i>
                </a>
            </div>
        </div>
    );
}
