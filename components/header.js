import Link from 'next/link'

export default function Header() {
  return (
    
    <nav className="navbar bg-white fixed-top navbar-expand-lg bg-primary">
      <div className="container">
        <div className="navbar-translate">
          <Link as={`/`} href="/">
            <a className="navbar-brand">Calakoche.Tu.Blog.</a>
          </Link>
        </div>
      </div>
    </nav>
  )
}
