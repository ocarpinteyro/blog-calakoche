import Container from "../components/container";
import Head from "next/head";
import Layout from "../components/layout";
import Link from "next/link";

export default function Error() {
    return (
        <Layout>
            <Head>
                <title>Calakoche | Página no encontrada</title>
            </Head>
            <div className="section-space"></div>
            <div className="section-space"></div>
            <Container>
                <div className="text-center">
                    <h1 className="title">Página no encontrada</h1>
                    <p className="text-muted mb-5">
                        Lo sentimos, la página que buscas no se encuentra.
                    </p>
                    <Link href="/">
                        <a
                            className="btn btn-primary btn-round"
                            aria-label="Regresar al inicio"
                            title="Regresar al inicio"
                        >
                            Regresar al inicio
                        </a>
                    </Link>
                </div>
            </Container>
        </Layout>
    );
}
