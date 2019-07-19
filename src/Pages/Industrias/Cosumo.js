import React from 'react';
import Contenido from '../../components/Contenido/contenido';
import MenuIzq from '../../components/MenuIzq/MenuIzq'
import HeaderTitle from '../../components/Header/Header'


const Consumo = props => {
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
                <div className="contenidoCentro">

                    <HeaderTitle data={props.data}
                        title={props.data.industrias.consumo.h1}
                    />
                    <Contenido data={props.data}
                        // parrafo={props.data.industrias.consumo.h1}
                        parrafoDos={props.data.industrias.consumo.p1}
                    />
                </div>
            </section>
        </div>
    );

}

export default Consumo;