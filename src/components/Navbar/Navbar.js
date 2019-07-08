import React from 'react';
import Rlogo from '../../assents/logo.png'
import Search from '../../assents/search.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Style.css'

const Navbar = () => {
    return (
        <div className="preventHeader">
            <header className="nav">
                <input type="checkbox" name="" id="nav-check"/>
                <section className="nav-header">
                    <div className="nav-logo">
                        <a href="/Nosotros"><img src={Rlogo} alt=""/></a>
                    </div>
                </section>
                <div className="nav-btn dots">
                    <label htmlFor="nav-check" className="dot"></label>
                </div>
                <section className="nav-links">
                    <article className="linksPrincipales">
                        <a href="/Nosotros">Nosotros</a>
                        <a href="/Socias">Socias</a>
                        <a href="/Servicios">Servicios</a>
                        <a href="/Industrias">Industrias</a>
                        {/* <a href="/Presencia">Presencia</a> */}
                        <a href="/Recursos">Recursos</a>
                        <a href="/Contacto">Contacto</a>
                    </article>
                </section>
                <section className="buscarylinks">
                    <article className="groupinput">
                        <input type="text"/>
                        <img src={Search} alt=""/>
                    </article>
                    <a href="" className="fab fa-linkedin-in fa-2x" target="_blank"><FontAwesomeIcon icon={['fab', 'linkedin-in']} /></a>
                    <a href=""><FontAwesomeIcon className="fab fa-twitter fa-2x" icon={['fab', 'twitter']} /></a>
                    <a href=""><FontAwesomeIcon className="fab fa-blogger-b fa-2x" icon={['fab', 'blogger-b']} /></a>
                </section>
                <hr className="hrNavLinks"/>
                <section className="containerSec">
                    <article className="linksSecundarios">
                        <a href="/Servicios/RemediosC">Remedios Comerciales</a>
                        <a href="/DisputasComerciales/">Disputas Comerciales</a>
                        <a href="/LitigiosAntidumping">Litigios Antidumping</a>
                        <a href="/EconomiaLitigios/">Economía-Litigios</a>
                        <a href="/MonitoreoEstrategico/">Monitoreos Estratégico</a>
                        <a href="/Mx-USA-TradePlanning">Mx-USA Trade Planning</a>
                    </article>
                </section>
            </header>
        </div>
    )
}

export default Navbar;