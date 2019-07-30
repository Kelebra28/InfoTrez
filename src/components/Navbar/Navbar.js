import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Rlogo from '../../assents/logo.png'
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

export default class CustomNav extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                {/* <div>
                    <Navbar color="light" light expand="md">
                        <NavbarBrand href="/">reactstrap</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="/components/">Components</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </div> */}
                <div className="preventHeader">
                    <header className="nav">
                        {/* <input type="checkbox" id="nav-check" /> */}
                        <section className="nav-header">
                            <div className="nav-logo">
                                <a href="/"><img src={Rlogo} alt="logo T-REZ" /></a>
                            </div>
                        </section>
                        <div className="nav-btn dots">
                            <label htmlFor="nav-check" className="dot" />
                        </div>
                        <section className="nav-links">
                            <article className="linksPrincipales">
                                <a href="./nosotros">Nosotros</a>
                                <a href="./socias">Socias</a>
                                <a href="./servicios">Servicios</a>
                                <a href="./industrias">Industrias</a>
                                <a href="./presencia">Presencia</a>
                                <a href="./recursos">Recursos</a>
                                <a href="./contacto">Contacto</a>
                            </article>
                        </section>
                        <section className="buscarylinks">
                            <article className="groupinput">
                                <input type="text" />
                                <img src={Search} alt="img search" />
                            </article>
                            <a href="https://es.linkedin.com/company/t-rezconsulting" target="_blank"><i className="fab fa-linkedin-in fa-2x" /></a>
                            <a href><i className="fab fa-twitter fa-2x" /></a>
                            <a href><i className="fab fa-blogger-b fa-2x" /></a>
                        </section>
                        <hr className="hrNavLinks" />
                        <section className="containerSec">
                            <article className="linksSecundarios">
                                <a href="./pages/servicios.html">Remedios Comerciales</a>
                                <a href="./pages/services/controversiasComerciales.html">Disputas Comerciales</a>
                                <a href="./pages/services/litigiosAntidumping.html">Litigios Antidumping</a>
                                <a href="./pages/services/analisisEconomicos.html">Economía-Litigios</a>
                                <a href="./pages/services/monitoreoComercial.html">Monitoreo Estratégico</a>
                                <a href="./pages/services/tradePlanning.html">Mx-USA Trade Planning</a>
                            </article>
                        </section>
                    </header>
                </div>

            </div>
        );
    }
}