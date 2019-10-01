import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import HeaderTitle from '../../components/Header/Header'
import MenuIzq from '../../components/MenuIzq2/MenuIzq'
import ContenedorDer from '../../components/contenedorDer/contenedorDer';
import Contenido from '../../components/Contenido/contenido';
import imgSocia from '../../Img/Layer2.png'
import imgLap from '../../Img/lapcafe.jpg'
import './Socias.css'
import '../Pages.css'
import cv from '../../assents/cv-luz.pdf'

const SociasLert = props => {
    return (
        <section className="preventMain">
            <div className="page main" >
                <MenuIzq
                    MenuPq1="/Socias/LERT"
                    MenuPq2="/Socias/IEMS"
                    contenidoP1={props.data.socias.nombres.luz}
                    contenidoP2={props.data.socias.nombres.itzia}
                    display3="none"
                    display4="none"
                    display5="none"
                    display6="none"
                    display7="none"
                    display8="none"
                    imgMenuIzq={imgLap}
                />
                <section className="seccionCentro d-flex flex-column flex-lg-row">
                    <div className="d-block d-lg-none mb-3">
                        <Link className="item1" to="/Socias/LERT">Luz Elena Reyes De la Torre</Link>
                        <Link className="item1" to="/Socias/IEMS">Itziar Esparza Mejía</Link>
                    </div>
                    <div className="contenedorProfesional d-flex flex-column">
                        <img className="imgSocia" src={imgSocia} alt="" />
                        <div className="contactoProfesional mt-3">
                            <a href="">
                                <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
                            </a>
                            <a href="mailto:ler@t-rezconsulting.com">ler@t-rezconsulting.com</a>
                            <a href={cv} target="_blank">
                                <FontAwesomeIcon icon={['far', 'file-pdf']} />
                            </a>
                        </div>
                    </div>
                    <div className="p-0 px-lg-3">
                        <HeaderTitle
                            data={props.data}
                            title={props.data.socias.nombres.luz}
                        />
                        <Contenido
                            data={props.data}
                            parrafo={props.data.socias.Itziar.p1}
                            parrafoDos={props.data.socias.Luz.p2}
                            parrafoTres={props.data.socias.Luz.p3}
                            parrafoCuatro={props.data.socias.Luz.p4}
                            parrafoCinco={props.data.socias.Luz.p5}
                            parrafoSeis={props.data.socias.Luz.p6}
                            parrafoSiete={props.data.socias.Luz.p7}
                            parrafoOcho={props.data.socias.Luz.p8}
                        // parrafoNueve={props.data.socias.Luz.p1}
                        />
                    </div>

                </section>
                <ContenedorDer />
            </div>
        </section>

    );

}

export default SociasLert; 