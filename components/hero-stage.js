import Link from 'next/link'

export default function HeroStage({
  title,
  coverImage,
  excerpt,
  slug,
  tag,
}) {
  return (
      <div className="container">
        <div className="features-4">
          <div className="row">
            <div className="col-md-8 ml-auto mr-auto text-center">
              <h2 className="title">QUIDBE: LLAMADAS DE ENSUEÑO</h2>
              <h5 className="description">Simula una llamada y felicita o corrige a tus peques de una manera fácil y segura. Menos estrés para ti, más inspiración para ellos.</h5>
            </div>
          </div>
        </div>
        <div className="features-3">
          <div className="row">
              <div className="col-md-6">
                <div className="phone-container">
                  <img src="./assets/img/sections/iphone.png" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="info info-horizontal">
                  <div className="icon icon-primary">
                    <i className="material-icons">extension</i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">Hundreds of Components</h4>
                    <p>The moment you use Material Kit, you know you’ve never felt anything like it. With a single use, this powerfull UI Kit lets you do more than ever before. </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-primary">
                    <i className="material-icons">child_friendly</i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">Easy to Use</h4>
                    <p>Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.</p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-primary">
                    <i className="material-icons">watch_later</i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">Fast Prototyping</h4>
                    <p>Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
  )
}
