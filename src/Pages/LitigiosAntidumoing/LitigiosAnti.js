import React from 'react';
import Contenido from '../../components/Contenido/contenido';
import MenuIzq from '../../components/MenuIzq/MenuIzq'
import HeaderTitle from '../../components/Header/Header'
import ContenedorDer from '../../components/contenedorDer/contenedorDer';
import imgLap from '../../Img/antidumpingok.png'


const LitigiosAnti = props => {
    return (
        <section className="preventMain">
            <div className="page main">
                <MenuIzq
                    href1="#recursos"
                    href2="#juicios"
                    href3="#amparos"
                    href4="#peritajes"
                    // MenuPq1="/LitigiosAntidumping/Recursos-Revocacion"
                    contenidoP1={props.data.litigios.recursos.h1}
                    // MenuPq2="/LitigiosAntidumping/Juicios-Nualidad"
                    contenidoP2={props.data.litigios.juicios.h1}
                    // MenuPq3="/LitigiosAntidumping/Amparos"
                    contenidoP3={props.data.litigios.amparos.h1}
                    // MenuPq4="/LitigiosAntidumping/Peritajes"
                    contenidoP4={props.data.litigios.peritajes.h1}
                    display5="none"
                    display6="none"
                    display7="none"
                    display8="none"
                    imgMenuIzq={imgLap}
                />
                <section className="seccionCentro">
                    <HeaderTitle data={props.data}
                        title={props.data.litigios.title}
                    />
                    <HeaderTitle
                        id="recursos"
                        data={props.data}
                        title2={props.data.litigios.recursos.h1}
                    />
                    <Contenido
                        data={props.data.industrias.agropecuario.h1}
                        parrafoDos={props.data.litigios.recursos.p1}
                    />
                    <HeaderTitle
                        id="juicios"
                        data={props.data}
                        title2={props.data.litigios.juicios.h1}
                    />
                    <Contenido
                        data={props.data.industrias.agropecuario.h1}
                        parrafoDos={props.data.litigios.juicios.p1}
                    />
                    <HeaderTitle
                        id="amparos"
                        data={props.data}
                        title2={props.data.litigios.amparos.h1}
                    />
                    <Contenido
                        data={props.data.industrias.agropecuario.h1}
                        parrafoDos={props.data.litigios.amparos.p1}
                    />
                    <HeaderTitle
                        id="peritajes"
                        data={props.data}
                        title2={props.data.litigios.peritajes.h1}
                    />
                    <Contenido
                        data={props.data.industrias.agropecuario.h1}
                        parrafoDos={props.data.litigios.peritajes.p1}
                    />
                </section>
                <ContenedorDer data={props.data}/>
            </div>
        </section>

    );

}

export default LitigiosAnti;