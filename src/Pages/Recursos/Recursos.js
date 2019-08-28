import React from 'react';
import Contenido from '../../components/Contenido/contenido';
import HeaderTitle from '../../components/Header/Header'
import MenuIzq from '../../components/MenuIzq/MenuIzq'
import ContenedorDer from '../../components/contenedorDer/contenedorDer';
import imgPlanta from '../../Img/planta.png'

const Recursos = props => {
    return (
        <section className="preventMain">
            <div className="page main">
                <MenuIzq
                    href1="#legislacion"
                    href2="#antidumping"
                    href3="#antidumping2"
                    href4="#estadisticas-comerciales"
                    href5="#otros"
                    // MenuPq1="/Recursos/Legislacion-OMC"
                    contenidoP1={props.data.recursos.menu.p1}
                    // MenuPq2="/Recursos/Antidumping-Mexico"
                    contenidoP2={props.data.recursos.menu.p2}
                    // MenuPq3="/Recursos/Antidumping-USA"
                    contenidoP3={props.data.recursos.menu.p3}
                    // MenuPq4="/Recursos/Estadisticas-Comerciales"
                    contenidoP4={props.data.recursos.menu.p4}
                    // MenuPq5="/Recursos/Otros-Sitios"
                    contenidoP5={props.data.recursos.menu.p5}
                    display6="none"
                    display7="none"
                    display8="none"
                    imgMenuIzq={imgPlanta}
                />
                <section className="seccionCentro">
                    <HeaderTitle
                        data={props.data}
                        title={props.data.recursos.title}
                    />
                    <HeaderTitle
                        id="legislacion"
                        data={props.data}
                        title2={props.data.recursos.menu.p1}
                    />
                    <Contenido
                        data={props.data.industrias.agropecuario.h1}
                        parrafoDos={props.data.recursos.legislacion.p1}
                        parrafoTres={props.data.recursos.legislacion.p2}
                        parrafoCuatro={props.data.recursos.legislacion.p3}
                    />
                    <HeaderTitle
                        id="antidumping"
                        data={props.data}
                        title2={props.data.recursos.menu.p2}
                    />
                    <Contenido
                        data={props.data.industrias.agropecuario.h1}
                        parrafoDos={props.data.recursos.antidumping.p1}
                        parrafoTres={props.data.recursos.antidumping.p2}
                        parrafoCuatro={props.data.recursos.antidumping.p3}
                    />
                    <HeaderTitle
                        id="antidumping2"
                        data={props.data}
                        title2={props.data.recursos.menu.p3}
                    />
                    <Contenido
                        data={props.data.industrias.agropecuario.h1}
                        parrafoDos={props.data.recursos.antidumpigEUA.p1}
                        parrafoTres={props.data.recursos.antidumpigEUA.p2}
                        parrafoCuatro={props.data.recursos.antidumpigEUA.p3}
                    />
                    <HeaderTitle
                        id="estadisticas-comerciales"
                        data={props.data}
                        title2={props.data.recursos.menu.p4}
                    />
                    <Contenido
                        data={props.data.industrias.agropecuario.h1}
                        parrafoDos={props.data.recursos.estadistica.p1}
                        parrafoTres={props.data.recursos.estadistica.p2}
                        parrafoCuatro={props.data.recursos.estadistica.p3}
                    />
                    <HeaderTitle
                        id="otros"
                        data={props.data}
                        title2={props.data.recursos.menu.p5}
                    />
                    <Contenido
                        data={props.data.industrias.agropecuario.h1}
                        // parrafo={props.data.industrias.agropecuario.h1}
                        parrafoDos={props.data.recursos.otros.p1}
                        parrafoTres={props.data.recursos.otros.p2}
                    />

                </section>
                <ContenedorDer />
            </div>
        </section>
    );

}

export default Recursos;