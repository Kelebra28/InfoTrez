import React from 'react';
import Contenido from '../../components/Contenido/contenido';
import MenuIzq from '../../components/MenuIzq/MenuIzq'
import HeaderTitle from '../../components/Header/Header'

const Cuestionarios = props => {
    return (

        <div className="page">
            <MenuIzq
                MenuPq1="/Mx-USA-TradePlanning/Riesgo-Antidumpig"
                contenidoP1={props.data.tradepla.menu.p1}
                MenuPq2="/Mx-USA-TradePlanning/Cuestionarios"
                contenidoP2={props.data.tradepla.menu.p2}
                MenuPq3="/Mx-USA-TradePlanning/Verificaciones"
                contenidoP3={props.data.tradepla.menu.p3}
                display4="none"
                display5="none"
                display6="none"
                display7="none"
                display8="none"
            />
            <section className="seccionCentro">
                <div className="contenidoCentro">
                    <HeaderTitle data={props.data}
                        title={props.data.tradepla.cuestionarios.h1}
                    />
                    <Contenido data={props.data}
                        //  parrafo={props.data.tradepla.cuestionarios.h1}
                        parrafoDos={props.data.tradepla.cuestionarios.p1}
                    />
                </div>
            </section>
        </div>
    );


}

export default Cuestionarios;