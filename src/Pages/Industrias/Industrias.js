import React from 'react';
import Contenido from '../../components/Contenido/contenido';
import MenuIzq from '../../components/MenuIzq/MenuIzq'
import HeaderTitle from '../../components/Header/Header'
import './Industrias.css'
import industrias from '../../Img/industrias.png'
import ContenedorDer from '../../components/contenedorDer/contenedorDer';

const Industrias = props => {
    return (
        <section className="preventMain">
            <div className="page main">
                <MenuIzq
                    // MenuPq1="/Industrias/Agropecuario"
                    href1="#agropecuario"
                    href2="#manufacturero"
                    href3="#industrias"
                    contenidoP1={props.data.industrias.menu.p1}
                    // MenuPq2="/Industrias/Manufacturero"
                    contenidoP2={props.data.industrias.menu.p2}
                    // MenuPq3="/Industrias/Manufacturero"
                    contenidoP3={props.data.industrias.menu.p3}
                    display4="none"
                    display5="none"
                    display6="none"
                    display7="none"
                    display8="none"
                    imgMenuIzq={industrias}
                />
                <section className="seccionCentro">
                    <HeaderTitle
                        
                        data={props.data}
                        title={props.data.industrias.title}
                    />
                    <HeaderTitle
                        id="agropecuario"
                        data={props.data}
                        title2={props.data.industrias.menu.p1}
                    />
                    <Contenido
                        data={props.data.industrias.agropecuario.h1}
                        // parrafo={props.data.industrias.agropecuario.h1}
                        parrafoDos={props.data.industrias.agropecuario.p1}
                        parrafoTres={props.data.industrias.agropecuario.p2}
                    />
                    <HeaderTitle
                        data={props.data}
                        id="manufacturero"
                        title2={props.data.industrias.menu.p2}
                    />
                    <Contenido data={props.data}
                        // parrafo={props.data.industrias.manufacturero.h1}
                        parrafoDos={props.data.industrias.manufacturero.p1}
                    />
                    <HeaderTitle
                        data={props.data}
                        id="industrias"
                        title2={props.data.industrias.menu.p3}
                    />
                    <Contenido data={props.data}
                        // parrafo={props.data.industrias.consumo.h1}
                        parrafoDos={props.data.industrias.consumo.p1}
                    />
                </section>
                <ContenedorDer data={props.data}/>
            </div>
        </section>
    );

}

export default Industrias;