import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
    <div className="container">
      <nav className="float-left">
        <ul>
          <li>
            <Link as={`/`} href="/">
              <a title="Ir al inicio">Calakoche</a>
            </Link>
          </li>
          <li>
              <a href="https://quidbe.app" className="nav-link" target="_blank" rel="noreferrer" aria-label="Ir a Quidbe">Quidbe</a>
          </li>
          <li>
            <Link as={`/aviso-de-privacidad/`} href="/">
              <a title="Aviso de privacidad">Aviso de privacidad</a>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="copyright float-right">
        © 2020, Calakoche. Todos los derechos reservados.
      </div>
    </div>
  </footer>
  )
}
