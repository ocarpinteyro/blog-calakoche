import Document, { Html, Head, Main, NextScript } from "next/document";
import StructuredDataSite from "../components/structured-data-site";
import FirebaseAnalytics from "../components/firebase-analytics";

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link
                        rel="stylesheet"
                        type="text/css"
                        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons"
                    />
                    <link
                        rel="stylesheet"
                        href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css"
                    ></link>
                    <link href="/assets/css/material-kit.css?v=2.2.0" rel="stylesheet" />
                    <link
                        rel="preconnect dns-prefetch"
                        href="https://www.google-analytics.com"
                        crossOrigin="true"
                    />
                    <script
                        async
                        src="https://www.googletagmanager.com/gtag/js?id=G-7L8D68ZK4J"
                    ></script>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-7L8D68ZK4J');
                    `,
                        }}
                    />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                        !function(f,b,e,v,n,t,s)
                        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                        n.queue=[];t=b.createElement(e);t.async=!0;
                        t.src=v;s=b.getElementsByTagName(e)[0];
                        s.parentNode.insertBefore(t,s)}(window,document,'script',
                        'https://connect.facebook.net/en_US/fbevents.js');
                        fbq('init', '392510324964684');
                        fbq('track', 'PageView');
                    `,
                        }}
                    />
                    <noscript>
                        <img
                            height="1"
                            width="1"
                            src="https://www.facebook.com/tr?id=392510324964684&ev=PageView&noscript=1"
                        />
                    </noscript>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <script src="/assets/js/core/jquery.min.js" type="text/javascript"></script>
                    <script src="/assets/js/core/popper.min.js" type="text/javascript"></script>
                    <script
                        src="/assets/js/core/bootstrap-material-design.min.js"
                        type="text/javascript"
                    ></script>
                    <script src="/assets/js/plugins/moment.min.js"></script>
                    <script
                        src="/assets/js/plugins/bootstrap-datetimepicker.js"
                        type="text/javascript"
                    ></script>
                    <script
                        src="/assets/js/plugins/nouislider.min.js"
                        type="text/javascript"
                    ></script>
                    <script src="/assets/js/plugins/bootstrap-tagsinput.js"></script>
                    <script
                        src="/assets/js/plugins/bootstrap-selectpicker.js"
                        type="text/javascript"
                    ></script>
                    <script
                        src="/assets/js/plugins/jasny-bootstrap.min.js"
                        type="text/javascript"
                    ></script>
                    <script async defer src="https://buttons.github.io/buttons.js"></script>
                    <script
                        src="/assets/js/material-kit.js?v=2.2.0"
                        type="text/javascript"
                    ></script>
                    <FirebaseAnalytics />
                    <StructuredDataSite />
                </body>
            </Html>
        );
    }
}
