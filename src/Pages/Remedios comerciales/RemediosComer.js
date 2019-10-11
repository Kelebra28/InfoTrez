import React from 'react';
import Contenido from '../../components/Contenido/contenido';
import MenuIzq from '../../components/MenuIzq/MenuIzq';
import HeaderTitle from '../../components/Header/Header'
import ContenedorDer from '../../components/contenedorDer/contenedorDer';
import imgLap from '../../Img/conflicto.png'

const RemediosComerciales = props => {
    return (
        <section className="preventMain">
            <div className="page main">
                <section className="areaTextContainer">
                    <MenuIzq 
                        data={props.data}
                        contenidoP1={props.data.remedios.title}
                        contenidoP2={props.data.remedios.antidumping.h1}
                        contenidoP3={props.data.remedios.subvenciones.h1}
                        contenidoP4={props.data.remedios.salvaguardias.h1}
                        contenidoP5={props.data.remedios.examenes.h1}
                        contenidoP6={props.data.remedios.reviciones.h1} 
                        contenidoP7={props.data.remedios.elusion.h1}
                        contenidoP8={props.data.remedios.cobertura.h1}
                        imgMenuIzq={imgLap}
                    />
                    <section className="seccionCentro">
                        <HeaderTitle data={props.data}
                            title={props.data.remedios.title}
                        />
                        <Contenido
                        data={props.data.industrias.agropecuario.h1}
                        // parrafo={props.data.industrias.agropecuario.h1}
                        parrafoDos={props.data.industrias.agropecuario.p1}
                        parrafoTres={props.data.industrias.agropecuario.p2}
                    />
                    </section>
                </section>
            </div>
            <ContenedorDer/>
        </section>

    );

}

export default RemediosComerciales;