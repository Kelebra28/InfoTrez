import React from 'react';
import Contenido from '../../components/Contenido/contenido';
import MenuIzq from '../../components/MenuIzq/MenuIzq'
import HeaderTitle from '../../components/Header/Header'
import ContenedorDer from '../../components/contenedorDer/contenedorDer';
import imgLap from '../../Img/estudios.png'

const Economia = props => {
    return (
        <section className="preventMain">
            <div className="page main">
                <MenuIzq
                    href1="#analisis"
                    href2="#margenes"
                    href3="#danio"
                    href4="#calculo"
                    href5="#verificaciones"
                    // MenuPq1="/EconomiaLitigios/Analisis-Importaciones"
                    contenidoP1={props.data.economia.menu.p1}
                    // MenuPq2="/EconomiaLitigios/Margenes-Dumping"
                    contenidoP2={props.data.economia.menu.p2}
                    // MenuPq3="/EconomiaLitigios/Dano-Industria"
                    contenidoP3={props.data.economia.menu.p3}
                    // MenuPq4="/EconomiaLitigios/Calculo-Subvenciones"
                    contenidoP4={props.data.economia.menu.p4}
                    // MenuPq5="/EconomiaLitigios/Verificaciones"
                    contenidoP5={props.data.economia.menu.p5}
                    display6="none"
                    display7="none"
                    display8="none"
                    imgMenuIzq={imgLap}
                />
                <section className="seccionCentro">
                    <HeaderTitle data={props.data}
                        title={props.data.economia.title}
                    />
                    <HeaderTitle
                        id="analisis"
                        data={props.data}
                        title2={props.data.economia.menu.p1}
                    />
                    <Contenido data={props.data}
                        //  parrafo={props.data.economia.analisis.h1}
                        parrafoDos={props.data.economia.analisis.p1}
                    />
                    <HeaderTitle
                        id="margenes"
                        data={props.data}
                        title2={props.data.economia.menu.p2}
                    />
                    <Contenido data={props.data}
                        parrafo={props.data.economia.margenes.h1}
                        parrafoDos={props.data.economia.margenes.p1}
                    />
                    <HeaderTitle
                        id="danio"
                        data={props.data}
                        title2={props.data.economia.menu.p3}
                    />
                    <Contenido data={props.data}
                        //  parrafo={props.data.economia.dano.h1}
                        parrafoDos={props.data.economia.dano.p1}
                    />
                    <HeaderTitle
                        id="calculo"
                        data={props.data}
                        title2={props.data.economia.menu.p4}
                    />
                    <Contenido data={props.data}
                        //  parrafo={props.data.economia.calculo.h1}
                        parrafoDos={props.data.economia.calculo.p1}
                    />
                    <HeaderTitle
                        id="verificaciones"
                        data={props.data}
                        title2={props.data.economia.menu.p5}
                    />
                    <Contenido data={props.data}
                        //  parrafo={props.data.economia.verificacion.h1}
                        parrafoDos={props.data.economia.verificacion.p1}
                    />
                </section>
                <ContenedorDer />
            </div>
        </section>

    );

}

export default Economia;