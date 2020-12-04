import { Component } from "react";

export default class Cookies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fecha: new Date(),
            view: false,
        };
    }

    componentDidMount() {
        const verificar = document.cookie;
        const { view } = this.state;
        if (!verificar.includes("calakoche_cookies=1")) {
            this.setState({
                view: true,
            });
        }
    }

    addCookie = () => {
        this.setState({
            view: false,
        });
        const verificar = document.cookie;
        if (!verificar.includes("calakoche_cookies=1")) {
            const { fecha } = this.state;
            fecha.setMonth(fecha.getMonth() + 1);
            const expires = "expires=" + fecha.toGMTString();
            document.cookie = "calakoche_cookies=1;" + expires + ";path=/";
        }
    };

    render() {
        const { view } = this.state;
        const MOSTRAR = view ? (
            <div class="alert alert-info">
                <div class="container">
                    <div class="alert-icon">
                        <i class="material-icons">info_outline</i>
                    </div>
                    <button type="button" class="close" aria-label="Close" onClick={this.addCookie}>
                        <span aria-hidden="true">
                            <i class="material-icons">clear</i>
                        </span>
                    </button>
                    <b>USO DE COOKIES:</b> Este sitio utiliza cookies para ayudarnos a mejorar tu
                    experiencia. Al continuar navegando en él, estarás aceptando su uso. Podrás
                    deshabilitarlas accediendo a la configuración de tu navegador.
                </div>
            </div>
        ) : null;
        return MOSTRAR;
    }
}
