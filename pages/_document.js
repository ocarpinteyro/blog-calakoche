import Document, { Html, Head, Main, NextScript } from "next/document";
import StructuredDataSite from "../components/structured-data-site";
import FirebaseAnalytics from "../components/firebase-analytics";
import FooterScripts from "../components/footer-scripts";

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="es-MX">
                <Head />
                <body>
                    <Main />
                    <NextScript />
                    <FooterScripts />
                    <FirebaseAnalytics />
                    <StructuredDataSite />
                </body>
            </Html>
        );
    }
}
