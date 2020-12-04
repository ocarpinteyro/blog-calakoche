import Link from "next/link";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <nav className="float-left">
                    <ul>
                        <li>
                            <Link as={`/`} href="/">
                                <a aria-label="Ir al inicio" title="Ir al inicio">
                                    Calakoche
                                </a>
                            </Link>
                        </li>
                        <li>
                            <a
                                aria-label="Ir a Quidbe"
                                href="https://quidbe.app"
                                className="nav-link"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Ir a Quidbe"
                                title="Ir a Quidbe"
                            >
                                Quidbe
                            </a>
                        </li>
                        <li>
                            <Link href="/aviso-de-privacidad">
                                <a aria-label="Aviso de privacidad" title="Aviso de privacidad">
                                    Aviso de privacidad
                                </a>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="copyright float-right">
                    © 2020, Calakoche. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
}
