import React from 'react';
import HeaderTitle from '../../components/Header/Header'
import Contenido from '../../components/Contenido/contenido';
import './styles.css'
import MenuIzq from '../../components/MenuIzq/MenuIzq';
import ContenedorDer from '../../components/contenedorDer/contenedorDer';
import imgPlanta from '../../Img/mundo.png'
import nosotros from '../../Img/imgContacto.png'

const Nosotros = props => {
    return (
        <section className="preventMain">
            <div className="page Us main">
                <MenuIzq
                    display1="none"
                    display2="none"
                    display3="none"
                    display4="none"
                    display5="none"
                    display6="none"
                    display7="none"
                    display8="none"
                    imgMenuIzq={imgPlanta}
                    imgHeight="95%"
                />
                <section className="seccionCentro">
                    <HeaderTitle
                        data={props.data}
                        title={props.data.nosotros.title}
                    />
                    <Contenido data={props.data}
                        classUs="trezname"
                        displayUs="displayUs"
                        marginUs="marginUs"
                        // parrafo={props.data.nosotros.title}
                        parrafoDos={props.data.nosotros.consultig.title}
                        parrafoTres={props.data.nosotros.consultig.p}
                        parrafoCuatro={props.data.nosotros.trez1.title}
                        parrafoCinco={props.data.nosotros.trez1.p}
                        parrafoSeis={props.data.nosotros.trez2.title}
                        parrafoSiete={props.data.nosotros.trez2.p}
                    // parrafoOcho={props.data.socias.Itziar.p1}
                    // parrafoNueve={props.data.socias.Itziar.p1}
                    />
                    <img style={{width: "100%"}} src={nosotros} alt=""/>
                </section>
                <ContenedorDer />
            </div>
        </section>

    );

}

export default Nosotros;
