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
                <p>(55) 9171-1027/52</p>
                <a href="mailto:trez@t-rezconsulting.com">trez@t-rezconsulting.com</a>
            </section>
            <section className="direccion">
                <center>
                    <p>Torre Siglum Insurgentes Sur #1898 Piso 14 Despacho 1421</p>
                </center>
                <p>Col. Florida 01020 CDMX, México</p>
            </section>
        </footer>

    )
}

export default FooterResponsive;