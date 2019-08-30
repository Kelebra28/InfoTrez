import React from 'react';
import Contenido from '../../components/Contenido/contenido';
import MenuIzq from '../../components/MenuIzq/MenuIzq'
import HeaderTitle from '../../components/Header/Header'
import ContenedorDer from '../../components/contenedorDer/contenedorDer';
import imgLap from '../../Img/trade.png'

const MXUSA = props => {
    return (
        <section className="preventMain">
            <div className="page main">
                <MenuIzq
                    href1="#riesgo"
                    href2="#cuestionarios"
                    href3="#verificaciones"
                    // MenuPq1="/Mx-USA-TradePlanning/Riesgo-Antidumpig"
                    contenidoP1={props.data.tradepla.menu.p1}
                    // MenuPq2="/Mx-USA-TradePlanning/Cuestionarios"
                    contenidoP2={props.data.tradepla.menu.p2}
                    // MenuPq3="/Mx-USA-TradePlanning/Verificaciones"
                    contenidoP3={props.data.tradepla.menu.p3}
                    display4="none"
                    display5="none"
                    display6="none"
                    display7="none"
                    display8="none"
                    imgMenuIzq={imgLap}
                />
                <section className="seccionCentro">
                    <HeaderTitle data={props.data}
                        title={props.data.tradepla.title}
                    />
                    <HeaderTitle
                        id="riesgo"
                        data={props.data}
                        title2={props.data.tradepla.menu.p1}
                    />
                    <Contenido data={props.data}
                        //  parrafo={props.data.tradepla.riesgo.h1}
                        parrafoDos={props.data.tradepla.riesgo.p1}
                        parrafoTres={props.data.tradepla.riesgo.p2}
                    />
                    <HeaderTitle
                        id="cuestionarios"
                        data={props.data}
                        title2={props.data.tradepla.menu.p2}
                    />
                    <Contenido data={props.data}
                        //  parrafo={props.data.tradepla.cuestionarios.h1}
                        parrafoDos={props.data.tradepla.cuestionarios.p1}
                    />
                    <HeaderTitle
                        id="verificaciones"
                        data={props.data}
                        title2={props.data.tradepla.menu.p3}
                    />
                    <Contenido data={props.data}
                        parrafoDos={props.data.tradepla.verificaciones.p1}
                    />
                </section>
                <ContenedorDer/>
            </div>
        </section>

    );


}

export default MXUSA;