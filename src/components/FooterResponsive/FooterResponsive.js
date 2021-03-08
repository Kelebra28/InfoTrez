import React from 'react'
import SomaLogo from '../../assents/soma.png'

const FooterResponsive = (props) => {
    return (
        <footer className="footerResponsive">
            <section className="designedby">
                <p>Designed By</p>
                <img src={SomaLogo} alt="logo soma" />
            </section>
            <section className="contacto">
                <p> Conmutador: (55) 557698-0243‬ </p>
                <p> Tel. Directo T-REZ: (55) 1246-0682‬ </p>
                <a href="mailto:trez@t-rezconsulting.com">trez@t-rezconsulting.com</a>
            </section>
            <section className="direccion">
                <center>
                    <p>Torre IZA BC Portal San Ángel Av. Revolución No. 1267 Piso 19 Ofc. A</p>
                </center>
                <p>Col. Alpes C.P. 01010 CDMX, Álvaro Obregón</p>
            </section>
        </footer>

    )
}

export default FooterResponsive;