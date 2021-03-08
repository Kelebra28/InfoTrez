import React from 'react';
import logoSoma from '../../assents/soma.png'
import './Style.css'



const Footer = () => {
    return (
        <div>
            <footer className="footerWeb">
                <section className="designedby">
                    <p>Designed by</p>
                    <img src={logoSoma} className="imgSoma" alt="Logo soma" />
                </section>
                <section className="direccion">
                    <center>
                        <p>Torre IZA BC Portal San Ángel Av. Revolución No. 1267 Piso 19 Ofc. A</p>
                    </center>
                    <p>Col. Alpes C.P. 01010 CDMX, Álvaro Obregón</p>
                </section>
                <section className="contacto">
                    <p> Conmutador: (55) 7698-0243‬ </p>
                    <p> Tel. Directo T-REZ: (55) 1246-0682‬ </p>
                    <a href="mailto:trez@t-rezconsulting.com">trez@t-rezconsulting.com</a>
                </section>
            </footer>
            <div id="fb-root"></div>
            {/* <footer className="footerResponisve">
                <section className="desingedby">
                    <p>Desinged by</p>
                    <img src={logoSoma} alt="Logo Soma"/>
                </section>
                <section className="contacto">
                    <p>(55) 9171-1027/52</p>
                    <a href="mailto:trez@t-rezconsulting.com">trez@t-rezconsulting.com</a>
                </section>
                <section className="direccion">
                <center>
                        <p>Torre Siglum Insurgentes Sur #1898, Piso 14 Despacho 1421</p>
                </center>
                <p>Col. Florida 01020 CDMX, México</p>
                </section>
            </footer> */}
        </div>
    )
}

export default Footer;