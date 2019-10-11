import React from 'react';
import HeaderTitle from '../../components/Header/Header'
import MenuIzq from '../../components/MenuIzq/MenuIzq'
import '../Pages.css'
import ContenedorDer from '../../components/contenedorDer/contenedorDer';
import Contenido from '../../components/Contenido/contenido';
import imgLap from '../../Img/conflicto.png'


const RemediosCo = props => {
    return (
        <section className="preventMain">
            <div className="page main">
                <MenuIzq
                    href1="#antidumping"
                    href2="#antisubvenciones"
                    href3="#salvaguardias"
                    href4="#examenes-vigilancia"
                    href5="#revisiones-anuales"
                    href6="#antielusion"
                    href7="#cobertura"
                    // MenuPq1="/RemediosComerciales/Anti-Dumping"
                    contenidoP1={props.data.remedios.antidumping.h1}
                    // MenuPq2="/RemediosComerciales/Anti-Subvenciones"
                    contenidoP2={props.data.remedios.subvenciones.h1}
                    // MenuPq3="/RemediosComerciales/Salvaguardias"
                    contenidoP3={props.data.remedios.salvaguardias.h1}
                    // MenuPq4="/RemediosComerciales/Examenes-Vigilancia"
                    contenidoP4={props.data.remedios.examenes.h1}
                    // MenuPq5="/RemediosComerciales/Revisiones-Anuales"
                    contenidoP5={props.data.remedios.reviciones.h1}
                    // MenuPq6="/RemediosComerciales/Anti-elusion"
                    contenidoP6={props.data.remedios.elusion.h1}
                    // MenuPq7="/RemediosComerciales/Cobertura"
                    contenidoP7={props.data.remedios.cobertura.h1}
                    display8="none"
                    imgMenuIzq={imgLap}
                />

                <section className="seccionCentro">
                    <HeaderTitle data={props.data}
                        title={props.data.remedios.title}
                    />
                    <HeaderTitle
                        id="antidumping"
                        data={props.data}
                        title2={props.data.remedios.antidumping.h1}
                    />
                    <Contenido
                        data={props.data.industrias.agropecuario.h1}
                        parrafoDos={props.data.remedios.antidumping.p1}
                        parrafoTres={props.data.remedios.antidumping.p2}
                        parrafoCuatro={props.data.remedios.antidumping.p3}
                    />
                    <HeaderTitle
                        id="antisubvenciones"
                        data={props.data}
                        title2={props.data.remedios.subvenciones.h1}
                    />
                    <Contenido
                        data={props.data.industrias.agropecuario.h1}
                        parrafoDos={props.data.remedios.subvenciones.p1}
                        parrafoTres={props.data.remedios.subvenciones.p2}
                    />
                    <HeaderTitle
                        id="salvaguardias"
                        data={props.data}
                        title2={props.data.remedios.salvaguardias.h1}
                    />
                    <Contenido
                        data={props.data.industrias.agropecuario.h1}
                        parrafoDos={props.data.remedios.salvaguardias.p1}
                        parrafoTres={props.data.remedios.salvaguardias.p2}
                    />
                    <HeaderTitle
                        id="examenes-vigilancia"
                        data={props.data}
                        title2={props.data.remedios.examenes.h1}
                    />
                    <Contenido
                        data={props.data.industrias.agropecuario.h1}
                        parrafoDos={props.data.remedios.examenes.p1}
                        parrafoTres={props.data.remedios.examenes.p2}
                    />
                    <HeaderTitle
                        id="revisiones-anuales"
                        data={props.data}
                        title2={props.data.remedios.reviciones.h1}
                    />
                    <Contenido
                        data={props.data.industrias.agropecuario.h1}
                        parrafoDos={props.data.remedios.reviciones.p1}
                    />
                    <HeaderTitle
                        id="antielusiones"
                        data={props.data}
                        title2={props.data.remedios.elusion.h1}
                    />
                    <Contenido
                        data={props.data.industrias.agropecuario.h1}
                        parrafoDos={props.data.remedios.elusion.p1}
                    />
                    <HeaderTitle
                        id="cobertura"
                        data={props.data}
                        title2={props.data.remedios.cobertura.h1}
                    />
                    <Contenido
                        data={props.data.industrias.agropecuario.h1}
                        parrafoDos={props.data.remedios.cobertura.p1}
                    />
                </section>
                <ContenedorDer/>
            </div>
        </section>

    );

}

export default RemediosCo;