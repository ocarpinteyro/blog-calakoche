import Container from "../components/container";
import Layout from "../components/layout";
import Head from "next/head";
import {
    SITE_DOMAIN,
    SITE_TITLE,
    SITE_AUTHOR,
    SITE_DESCRIPTION,
    SITE_OG_IMAGE,
} from "../lib/constants";

export default function AvisoPrivacidad() {
    const PAGE_TITLE = `Aviso de privacidad | ${SITE_TITLE}`;
    return (
        <>
            <Layout>
                <Head>
                    <title>{PAGE_TITLE}</title>
                    <meta name="author" content={SITE_AUTHOR} />
                    <meta name="description" content={SITE_DESCRIPTION} />
                    <meta itemProp="description" content={SITE_DESCRIPTION} />
                    <meta property="og:description" content={SITE_DESCRIPTION} />
                    <meta property="twitter:description" content={SITE_DESCRIPTION} />
                    <meta property="twitter:image:alt" content={PAGE_TITLE} />
                    <meta property="twitter:card" content="summary_large_image" />
                    <meta property="twitter:title" content={PAGE_TITLE} />
                    <meta property="og:image:alt" content={PAGE_TITLE} />
                    <meta property="og:site_name" content={PAGE_TITLE} />
                    <meta property="og:title" content={PAGE_TITLE} />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://www.calakoche.com" />
                    <meta property="twitter:image" content={SITE_OG_IMAGE} />
                    <meta property="og:image" content={SITE_OG_IMAGE} />
                    <meta property="og:image:width" content="400" />
                    <meta property="og:image:height" content="400" />
                    <link rel="canonical" href={`${SITE_DOMAIN}/aviso-de-privacidad`} />
                </Head>
                <div className="section-space"></div>
                <Container>
                    <article>
                        <h1 className="title">Aviso de Privacidad</h1>

                        <p>
                            El presente Aviso de Privacidad establece los términos en que Calakoche
                            usa y protege la información que es proporcionada por sus usuarios al
                            momento de utilizar su sitio web. Esta compañía está comprometida con la
                            seguridad de los datos de sus usuarios. Cuando le pedimos llenar los
                            campos de información personal con la cual usted pueda ser identificado,
                            lo hacemos asegurando que sólo se empleará de acuerdo con los términos
                            de este documento. Sin embargo este Aviso de Privacidad puede cambiar
                            con el tiempo o ser actualizada por lo que le recomendamos y enfatizamos
                            revisar continuamente esta página para asegurarse que está de acuerdo
                            con dichos cambios.
                        </p>

                        <h4 className="title">Información que es recogida</h4>

                        <p>
                            Nuestro sitio web podrá recoger información personal por ejemplo:
                            Nombre, información de contacto como su dirección de correo electrónica
                            e información demográfica. Así mismo cuando sea necesario podrá ser
                            requerida información específica para procesar algún pedido o realizar
                            una entrega o facturación.
                        </p>

                        <h4 className="title">Uso de la información recogida</h4>

                        <p>
                            Nuestro sitio web emplea la información con el fin de proporcionar el
                            mejor servicio posible, particularmente para mantener un registro de
                            usuarios, de pedidos en caso que aplique, y mejorar nuestros productos y
                            servicios. Es posible que sean enviados correos electrónicos
                            periódicamente a través de nuestro sitio con ofertas especiales, nuevos
                            productos y otra información publicitaria que consideremos relevante
                            para usted o que pueda brindarle algún beneficio, estos correos
                            electrónicos serán enviados a la dirección que usted proporcione y
                            podrán ser cancelados en cualquier momento.
                        </p>
                        <p>
                            Calakoche está altamente comprometido para cumplir con el compromiso de
                            mantener su información segura. Usamos los sistemas más avanzados y los
                            actualizamos constantemente para asegurarnos que no exista ningún acceso
                            no autorizado.
                        </p>

                        <h4 className="title" id="cookies">
                            Cookies
                        </h4>

                        <p>
                            Una cookie se refiere a un fichero que es enviado con la finalidad de
                            solicitar permiso para almacenarse en su ordenador, al aceptar dicho
                            fichero se crea y la cookie sirve entonces para tener información
                            respecto al tráfico web, y también facilita las futuras visitas a una
                            web recurrente. Otra función que tienen las cookies es que con ellas las
                            web pueden reconocerte individualmente y por tanto brindarte el mejor
                            servicio personalizado de su web.
                        </p>
                        <p>
                            Nuestro sitio web emplea las cookies para poder identificar las páginas
                            que son visitadas y su frecuencia. Esta información es empleada
                            únicamente para análisis estadístico y después la información se elimina
                            de forma permanente. Usted puede eliminar las cookies en cualquier
                            momento desde su ordenador. Sin embargo las cookies ayudan a
                            proporcionar un mejor servicio de los sitios web, estás no dan acceso a
                            información de su ordenador ni de usted, a menos de que usted así lo
                            quiera y la proporcione directamente. Usted puede aceptar o negar el uso
                            de cookies, sin embargo la mayoría de navegadores aceptan cookies
                            automáticamente pues sirve para tener un mejor servicio web. También
                            usted puede cambiar la configuración de su ordenador para declinar las
                            cookies. Si se declinan es posible que no pueda utilizar algunos de
                            nuestros servicios.
                        </p>

                        <h4 className="title">Enlaces a Terceros</h4>

                        <p>
                            Este sitio web pudiera contener enlaces a otros sitios que pudieran ser
                            de su interés. Una vez que usted de clic en estos enlaces y abandone
                            nuestra página, ya no tenemos control sobre al sitio al que es
                            redirigido y por lo tanto no somos responsables de los términos o
                            privacidad ni de la protección de sus datos en esos otros sitios
                            terceros. Dichos sitios están sujetos a sus propias políticas de
                            privacidad por lo cual es recomendable que los consulte para confirmar
                            que usted está de acuerdo con estas.
                        </p>

                        <h4 className="title">Control de su información personal</h4>

                        <p>
                            En cualquier momento usted puede restringir la recopilación o el uso de
                            la información personal que es proporcionada a nuestro sitio web. Cada
                            vez que se le solicite rellenar un formulario, como el de alta de
                            usuario, puede marcar o desmarcar la opción de recibir información por
                            correo electrónico. En caso de que haya marcado la opción de recibir
                            nuestro boletín o publicidad usted puede cancelarla en cualquier
                            momento.
                        </p>
                        <p>
                            Esta compañía no venderá, cederá ni distribuirá la información personal
                            que es recopilada sin su consentimiento, salvo que sea requerido por un
                            juez con un orden judicial.
                        </p>
                        <p>
                            Calakoche se reserva el derecho de cambiar los términos del presente
                            Aviso de Privacidad en cualquier momento.
                        </p>
                        <p>
                            La última fecha de actualización del presente aviso es del 1 de
                            noviembre de 2019.
                        </p>
                    </article>
                </Container>
            </Layout>
        </>
    );
}
