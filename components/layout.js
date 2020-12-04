import Footer from '../components/footer'
import Meta from '../components/meta'
import Header from '../components/header'
import Cookies from '../components/cookies'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <Header />
      <div className="main">
        <main>{children}</main>
        <div className="section-space"></div>
      </div>
      <Footer />
      <Cookies />
    </>
  )
}
