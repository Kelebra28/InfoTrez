// @ts-nocheck

import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// @ts-ignore
import Rlogo from '../../assents/logo.png'
// @ts-ignore
import Search from '../../assents/search.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Style.css'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import AutoComplete from '../AutoComplete/AutoComplete';



export default class CustomNav extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: true
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    handleClick = (e) => {
        this.setState({
            isOpen: true
        });


    }

    render() {
        return (
            <div>
                <div className="d-block d-md-none" style={{ zIndex: 99999 }}>

                    <Navbar style={{ backgroundColor: "#fff" }} light expand="md">
                        <section className="nav-header" style={{ zIndex: 99999 }}>
                            <div className="nav-logo">
                                <Link to="/"><img src={Rlogo} alt="logo T-REZ" style={{ width: "4em" }} onClick={this.handleClick} /></Link>
                            </div>
                        </section>
                        {/* <NavbarToggler onClick={this.toggle}  style={{zIndex:99999}}/> */}
                        <div className="nav-btn dots" onClick={this.toggle} style={{ zIndex: 99999, position: "absolute", top: "2em", right: "3em" }}>
                            <label htmlFor="nav-check" className="dot" />
                        </div>
                        <Collapse isOpen={!this.state.isOpen} navbar style={{ zIndex: 99999 }}>
                            <Nav className="ml-auto" navbar style={{ zIndex: 99999 }}>
                                <section className="nav-links" style={{ zIndex: 99999 }}>
                                    <article className="linksPrincipales">
                                        <Link to="/nosotros" onClick={this.handleClick}>Nosotros</Link>
                                        <Link to="/Socias/LERT" onClick={this.handleClick}>Socias</Link>
                                        <Link to="/servicios" onClick={this.handleClick}>Servicios</Link>
                                        <Link to="/industrias" onClick={this.handleClick}>Industrias</Link>
                                        {/* <Link to="/presencia">Presencia</Link> */}
                                        <Link to="/recursos" onClick={this.handleClick}>Recursos</Link>
                                        <Link to="/contacto" onClick={this.handleClick}>Contacto</Link>
                                    </article>
                                </section>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </div>
                <div className="preventHeader">
                    <header className="nav" >
                        {/* <input type="checkbox" id="nav-check" /> */}
                        <section className="nav-header d-none d-md-block">
                            <div className="nav-logo">
                                <Link to="/"><img src={Rlogo} alt="logo T-REZ" /></Link>
                            </div>
                        </section>
                        {/* <div className="nav-btn dots" onClick={this.toggle}>
                            <label htmlFor="nav-check" className="dot" />
                        </div> */}
                        <section className="nav-links">
                            <article className="linksPrincipales">
                                <Link to="/nosotros">Nosotros</Link>
                                <Link to="/Socias/LERT">Socias</Link>
                                <Link to="/servicios">Servicios</Link>
                                <Link to="/industrias">Industrias</Link>
                                {/* <Link to="/presencia">Presencia</Link> */}
                                <Link to="/recursos">Recursos</Link>
                                <Link to="/contacto">Contacto</Link>
                            </article>
                        </section>
                        <section className="buscarylinks">
                            <article className="groupinput">
                               <AutoComplete/>
                                {/* <img src={Search} alt="img search" style={{zIndex: "999"}}/> */}
                            </article>
                            <a href="https://es.linkedin.com/company/t-rezconsulting" target="_blank">
                                <FontAwesomeIcon icon={['fab', 'linkedin-in']} size="2x" />
                            </a>
                            <a href="https://twitter.com/t_rezconsulting"  target="_blank">
                                <FontAwesomeIcon icon={['fab', 'twitter']} size="2x" />
                            </a>
                            <Link to="/ComingSoon">
                                {/* <FontAwesomeIcon icon={['far', 'file-pdf']} />    */}
                                <FontAwesomeIcon icon="blog" size="2x" />
                            </Link>
                        </section>
                        <hr className="hrNavLinks" />
                        <section className="containerSec">
                            <article className="linksSecundarios">
                                <Link to="/Servicios/RemediosC">Remedios Comerciales</Link>
                                <Link to="/DisputasComerciales">Disputas Comerciales</Link>
                                <Link to="/LitigiosAntidumping/">Litigios Antidumping</Link>
                                <Link to="/EconomiaLitigios/">Economía-Litigios</Link>
                                <Link to="/MonitoreoEstrategico/">Monitoreo Estratégico</Link>
                                <Link to="/Mx-USA-TradePlanning/">Mx-USA Trade Planning</Link>
                            </article>
                        </section>
                    </header>
                </div>

            </div>
        );
    }
}