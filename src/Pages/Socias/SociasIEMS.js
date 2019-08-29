import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Contenido from '../../components/Contenido/contenido';
import HeaderTitle from '../../components/Header/Header'
import MenuIzq from '../../components/MenuIzq2/MenuIzq'
import ContenedorDer from '../../components/contenedorDer/contenedorDer';
import imgSocia from '../../Img/Itziar.png'
import './Socias.css'
import '../Pages.css'
import imgLap from '../../Img/planta.png'
import cv from '../../assents/cv-itziar.pdf'

const SociasIEMS = props => {
    return (
        <section className="preventMain">
            <div className="page main">
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

                <section className="seccionCentro">

                    <div className="d-block d-lg-none mb-3">
                        <Link className="item1" to="/Socias/LERT">Luz Elena Reyes De la Torre</Link>
                        <Link className="item1" to="/Socias/IEMS">Itziar Esparza Mejía</Link>
                    </div>

                    <HeaderTitle data={props.data}
                        title={props.data.socias.nombres.itzia}
                    />
                    <div className="contenedorProfesional flex-column flex-lg-row">
                        <img className="imgSocia" src={imgSocia} alt="" />
                        <div className="contactoProfesional mt-3 mt-lg-0">
                            <a href="https://www.google.com">
                                <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
                            </a>
                            <a href="mailto:iem@t-rezconsulting.com">iem@t-rezconsulting.com</a>
                            <a href={cv} target="_blank">
                                <FontAwesomeIcon icon={['far', 'file-pdf']} />
                            </a>
                        </div>
                    </div>
                    <Contenido data={props.data}
                        // parrafo={props.data.socias.Itziar.title}
                        parrafoDos={props.data.socias.Itziar.p1}
                        parrafoTres={props.data.socias.Itziar.p2}
                        parrafoCuatro={props.data.socias.Itziar.p3}
                        parrafoCinco={props.data.socias.Itziar.p4}
                        parrafoSeis={props.data.socias.Itziar.p5}
                    // parrafoSiete={props.data.socias.Itziar.p1}
                    // parrafoOcho={props.data.socias.Itziar.p1}
                    // parrafoNueve={props.data.socias.Itziar.p1}
                    />
                </section>
                <ContenedorDer />
            </div>
        </section>
    );

}

export default SociasIEMS;



