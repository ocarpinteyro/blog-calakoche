import Document, { Html, Head, Main, NextScript } from 'next/document'
import StructuredDataSite from '../components/structured-data-site'
import FirebaseAnalytics from '../components/firebase-analytics'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons" />
          <link href="/assets/css/material-kit.css?v=2.2.0" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="/assets/js/core/jquery.min.js" type="text/javascript"></script>
          <script src="/assets/js/core/popper.min.js" type="text/javascript"></script>
          <script src="/assets/js/core/bootstrap-material-design.min.js" type="text/javascript"></script>
          <script src="/assets/js/plugins/moment.min.js"></script>
          <script src="/assets/js/plugins/bootstrap-datetimepicker.js" type="text/javascript"></script>
          <script src="/assets/js/plugins/nouislider.min.js" type="text/javascript"></script>
          <script src="/assets/js/plugins/bootstrap-tagsinput.js"></script>
          <script src="/assets/js/plugins/bootstrap-selectpicker.js" type="text/javascript"></script>
          <script src="/assets/js/plugins/jasny-bootstrap.min.js" type="text/javascript"></script>
          <script async defer src="https://buttons.github.io/buttons.js"></script>
          <script src="/assets/js/material-kit.js?v=2.2.0" type="text/javascript"></script>
          <FirebaseAnalytics />
          <StructuredDataSite />
        </body>
      </Html>
    )
  }
}
