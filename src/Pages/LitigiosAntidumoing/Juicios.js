import React from 'react';
import Contenido from '../../components/Contenido/contenido';
import MenuIzq from '../../components/MenuIzq/MenuIzq'
import HeaderTitle from '../../components/Header/Header'

const Juicios = props => {

    return (
        <div className="page">
            <MenuIzq
                MenuPq1="/LitigiosAntidumping/Recursos-Revocacion"
                contenidoP1={props.data.litigios.recursos.h1}
                MenuPq2="/LitigiosAntidumping/Juicios-Nualidad"
                contenidoP2={props.data.litigios.juicios.h1}
                MenuPq3="/LitigiosAntidumping/Amparos"
                contenidoP3={props.data.litigios.amparos.h1}
                MenuPq4="/LitigiosAntidumping/Peritajes"
                contenidoP4={props.data.litigios.peritajes.h1}
                display5="none"
                display6="none"
                display7="none"
                display8="none"
            />
            <section className="seccionCentro">
                <div className="contenidoCentro">
                    <HeaderTitle data={props.data}
                        title={props.data.litigios.juicios.h1}
                    />
                    <Contenido data={props.data}
                        parrafoDos={props.data.litigios.juicios.p1}
                    />
                </div>
            </section>
        </div>
    );

}

export default Juicios;