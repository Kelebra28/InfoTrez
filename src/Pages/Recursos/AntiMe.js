import React from 'react';
import Contenido from '../../components/Contenido/contenido';
import MenuIzq from '../../components/MenuIzq/MenuIzq'
import HeaderTitle from '../../components/Header/Header'

const AntiMe = props => {
    return (
        <div className="page">
            <MenuIzq
                MenuPq1="/Recursos/Legislacion-OMC"
                contenidoP1={props.data.recursos.menu.p1}
                MenuPq2="/Recursos/Antidumping-Mexico"
                contenidoP2={props.data.recursos.menu.p2}
                MenuPq3="/Recursos/Antidumping-USA"
                contenidoP3={props.data.recursos.menu.p3}
                MenuPq4="/Recursos/Estadisticas-Comerciales"
                contenidoP4={props.data.recursos.menu.p4}
                MenuPq5="/Recursos/Otros-Sitios"
                contenidoP5={props.data.recursos.menu.p5}
                display6="none"
                display7="none"
                display8="none"
            />
            <section className="seccionCentro">
                <HeaderTitle data={props.data}
                    title={props.data.recursos.antidumping.h1}
                />
                <Contenido data={props.data}
                    // parrafo={props.data.recursos.antidumping.h1}
                    parrafoDos={props.data.recursos.antidumping.p1}
                    parrafoTres={props.data.recursos.antidumping.p2}
                    parrafoCuatro={props.data.recursos.antidumping.p3}
                />
            </section>
        </div>
    );

}

export default AntiMe;