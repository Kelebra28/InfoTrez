import React from 'react';
import Contenido from '../../components/Contenido/contenido';
import MenuIzq from '../../components/MenuIzq/MenuIzq'
import HeaderTitle from '../../components/Header/Header'


const Manufacturero = props => {
    return (
        <div className="page">
            <MenuIzq
                MenuPq1="/Industrias/Agropecuario"
                contenidoP1={props.data.industrias.menu.p1}
                MenuPq2="/Industrias/Manufacturero"
                contenidoP2={props.data.industrias.menu.p2}
                MenuPq3="/Industrias/ConsumoFinal"
                contenidoP3={props.data.industrias.menu.p3}
                display4="none"
                display5="none"
                display6="none"
                display7="none"
                display8="none"
            />
            <section className="seccionCentro">
                <HeaderTitle data={props.data}
                    title={props.data.industrias.manufacturero.h1}
                />
                <Contenido data={props.data}
                    // parrafo={props.data.industrias.manufacturero.h1}
                    parrafoDos={props.data.industrias.manufacturero.p1}
                />
            </section>
        </div>
    );

}

export default Manufacturero;