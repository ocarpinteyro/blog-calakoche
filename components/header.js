import Link from "next/link";

export default function Header() {
    return (
        <nav className="navbar bg-white fixed-top navbar-expand-lg bg-primary">
            <div className="container">
                <div className="navbar-translate">
                    <Link as={`/`} href="/">
                        <a className="navbar-brand" aria-label="Calakoche" title="Calakoche">
                            Calakoche
                        </a>
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="sr-only">Toggle navigation</span>
                        <span className="navbar-toggler-icon"></span>
                        <span className="navbar-toggler-icon"></span>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a
                                href="https://www.instagram.com/calakoche/"
                                className="nav-link"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Calakoche en Instagram"
                                title="Calakoche en Instagram"
                            >
                                <i className="fa fa-instagram"></i>
                                Instagram
                                <div className="ripple-container"></div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                href="https://www.twitter.com/calakoche/"
                                className="nav-link"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Calakoche en Twitter"
                                title="Calakoche en Twitter"
                            >
                                <i className="fa fa-twitter-square"></i>
                                Twitter
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                href="https://fb.com/calakoche/"
                                className="nav-link"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Calakoche en Facebook"
                                title="Calakoche en Facebook"
                            >
                                <i className="fa fa-facebook-square"></i>
                                Facebook
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
