import React from 'react';
import Contenido from '../../components/Contenido/contenido';
import MenuIzq from '../../components/MenuIzq/MenuIzq'
import ContenedorDer from '../../components/contenedorDer/contenedorDer';
import HeaderTitle from '../../components/Header/Header';
import imgLap from '../../Img/disputas.png'


const DisputasComerciales = props => {
    return (
        <section className="preventMain">
            <div className="page main">
                <MenuIzq
                    href1="#panel-tlc"
                    href2="#panel-omc"
                    MenuPq1="/DisputasComerciales/Planes-TLC"
                    contenidoP1={props.data.disputas.panelesTLC.h1}
                    MenuPq2="/DisputasComerciales/Planes-OMC"
                    contenidoP2={props.data.disputas.panelesOMC.h1}
                    display3="none"
                    display4="none"
                    display5="none"
                    display6="none"
                    display7="none"
                    display8="none"
                    imgMenuIzq={imgLap}
                />
                <section className="seccionCentro">
                    <HeaderTitle
                        data={props.data}
                        title={props.data.disputas.title}
                    />
                    <HeaderTitle
                        id="panel-tlc"
                        data={props.data}
                        title2={props.data.disputas.panelesTLC.h1}
                    />
                    <Contenido
                        data={props.data.industrias.agropecuario.h1}
                        parrafoDos={props.data.disputas.panelesTLC.p1}
                    />
                    <HeaderTitle
                        id="panel-omc"
                        data={props.data}
                        title2={props.data.disputas.panelesOMC.h1}
                    />
                    <Contenido
                        data={props.data.industrias.agropecuario.h1}
                        parrafoDos={props.data.disputas.panelesOMC.p1}
                    />
                </section>
                <ContenedorDer  data={props.data}/>
            </div>
        </section>

    );

}

export default DisputasComerciales;