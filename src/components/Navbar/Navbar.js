import React from 'react';
import {BrowserRouter as Router,Route, Link} from 'react-router-dom'
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
                        <Link to="/"><img src={Rlogo} alt=""/></Link>
                    </div>
                </section>
                <div className="nav-btn dots">
                    <label htmlFor="nav-check" className="dot"></label>
                </div>
                <section className="nav-links">
                    <article className="linksPrincipales">
                        <Link to="/Nosotros">Nosotros</Link>
                        <Link to="/Socias">Socias</Link>
                        <Link to="/Servicios">Servicios</Link>
                        <Link to="/Industrias">Industrias</Link>
                        {/* <Link to="/Presencia">Presencia</Link> */}
                        <Link to="/Recursos">Recursos</Link>
                        <Link to="/Contacto">Contacto</Link>
                    </article>
                </section>
                <section className="buscarylinks">
                    <article className="groupinput">
                        <input type="text"/>
                        <img src={Search} alt=""/>
                    </article>
                    <Link to="" className="fab fa-linkedin-in fa-2x" target="_blank"><FontAwesomeIcon icon={['fab', 'linkedin-in']} /></Link>
                    <Link to=""><FontAwesomeIcon className="fab fa-twitter fa-2x" icon={['fab', 'twitter']} /></Link>
                    <Link to=""><FontAwesomeIcon className="fab fa-blogger-b fa-2x" icon={['fab', 'blogger-b']} /></Link>
                </section>
                <hr className="hrNavLinks"/>
                <section className="containerSec">
                    <article className="linksSecundarios">
                        <Link to="/Servicios/RemediosC">Remedios Comerciales</Link>
                        <Link to="/DisputasComerciales/">Disputas Comerciales</Link>
                        <Link to="/LitigiosAntidumping">Litigios Antidumping</Link>
                        <Link to="/EconomiaLitigios/">Economía-Litigios</Link>
                        <Link to="/MonitoreoEstrategico/">Monitoreos Estratégico</Link>
                        <Link to="/Mx-USA-TradePlanning">Mx-USA Trade Planning</Link>
                    </article>
                </section>
            </header>
        </div>
    )
}

export default Navbar;