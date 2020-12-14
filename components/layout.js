import Footer from "../components/footer";
import Header from "../components/header";
import Cookies from "../components/cookies";
import Head from "next/head";
import { useAmp } from "next/amp";
import { SITE_TWITTER_OFICIAL, SITE_TITLE } from "../lib/constants";

export const config = { amp: "hybrid" };

export default function Layout({ preview, children }) {
    const isAmp = useAmp();
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="theme-color" content="#12151c" />
                <meta name="HandheldFriendly" content="True" />
                <meta name="MobileOptimized" content="320" />
                <meta name="generator" content="Calakoche" />
                <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png" />
                <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png" />
                <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png" />
                <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png" />
                <link
                    rel="apple-touch-icon"
                    sizes="114x114"
                    href="/favicon/apple-icon-114x114.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="120x120"
                    href="/favicon/apple-icon-120x120.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="144x144"
                    href="/favicon/apple-icon-144x144.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="152x152"
                    href="/favicon/apple-icon-152x152.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/favicon/apple-icon-180x180.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="192x192"
                    href="/favicon/android-icon-192x192.png"
                />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
                <meta name="msapplication-TileColor" content="#12151c" />
                <meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png" />
                <meta property="fb:pages" content="951620488359371" />
                <meta property="twitter:site" content={SITE_TWITTER_OFICIAL} />
                <meta property="og:site_name" content={SITE_TITLE} />
                <link rel="manifest" href="/favicon/site.webmanifest" />
                <link rel="shortcut icon" href="/favicon/favicon.ico" />
                <meta name="msapplication-TileColor" content="#12151c" />
                <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
                {isAmp ? (
                    <>
                        <link
                            rel="stylesheet"
                            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700"
                        />
                        <script
                            async
                            custom-element="amp-script"
                            src="https://cdn.ampproject.org/v0/amp-script-0.1.js"
                        ></script>
                    </>
                ) : (
                    <>
                        <meta
                            name="viewport"
                            content="width=device-width, initial-scale=1, shrink-to-fit=no"
                        />
                        <link
                            rel="stylesheet"
                            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons"
                        />
                        <link
                            rel="stylesheet"
                            href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css"
                        />
                        <link href="/assets/css/material-kit.min.css" rel="stylesheet" />
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
                        <noscript
                            dangerouslySetInnerHTML={{
                                __html: `
                            <img
                                height="1"
                                width="1"
                                src="https://www.facebook.com/tr?id=392510324964684&ev=PageView&noscript=1"
                                alt="FBP"
                            />`,
                            }}
                        />
                        <script
                            data-ad-client="ca-pub-2924864838906268"
                            async
                            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
                        ></script>
                    </>
                )}
            </Head>
            <Header />
            <div className="main">
                <main>{children}</main>
                <div className="section-space"></div>
            </div>
            <Footer />
            {isAmp ? (
                <>
                    <amp-pixel
                        src="https://www.facebook.com/tr?id=392510324964684&ev=PageView&noscript=1"
                        layout="nodisplay"
                    />

                    <amp-script src="https://www.gstatic.com/firebasejs/8.1.2/firebase-app.js" />
                    <amp-script src="https://www.gstatic.com/firebasejs/8.1.2/firebase-analytics.js" />
                    <amp-script script="firebase-config"></amp-script>
                    <script
                        id="firebase-config"
                        type="text/plain"
                        target="amp-script"
                        dangerouslySetInnerHTML={{
                            __html: `var firebaseConfig = {apiKey:"${process.env.apiKey}",${
                                process.env.authDomain === ""
                                    ? ""
                                    : `authDomain:"${process.env.authDomain}",`
                            }${
                                process.env.databaseURL === ""
                                    ? ""
                                    : `databaseURL:"${process.env.databaseURL}",`
                            }${
                                process.env.projectId === ""
                                    ? ""
                                    : `projectId:"${process.env.projectId}",`
                            }${
                                process.env.storageBucket === ""
                                    ? ""
                                    : `storageBucket:"${process.env.storageBucket}",`
                            }${
                                process.env.messagingSenderId === ""
                                    ? ""
                                    : `messagingSenderId:"${process.env.messagingSenderId}",`
                            }appId:"${process.env.appId}",measurementId:"${
                                process.env.measurementId
                            }"};firebase.initializeApp(firebaseConfig);firebase.analytics();`,
                        }}
                    />
                </>
            ) : null}
            <Cookies />
        </>
    );
}
