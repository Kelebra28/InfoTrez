import React from 'react';
import Contenido from '../../components/Contenido/contenido';
import HeaderTitle from '../../components/Header/Header'
import MenuIzq from '../../components/MenuIzq/MenuIzq'
import ContenedorDer from '../../components/contenedorDer/contenedorDer';
import imgPlanta from '../../Img/recursos.png'

const Recursos = props => {
    return (
        <section className="preventMain">
            <div className="page main">
                <MenuIzq
                    href1="#legislacion"
                    href2="#antidumping"
                    href3="#antidumping2"
                    href4="#estadisticas-comerciales"
                    href5="#otros"
                    // MenuPq1="/Recursos/Legislacion-OMC"
                    contenidoP1={props.data.recursos.menu.p1}
                    // MenuPq2="/Recursos/Antidumping-Mexico"
                    contenidoP2={props.data.recursos.menu.p2}
                    // MenuPq3="/Recursos/Antidumping-USA"
                    contenidoP3={props.data.recursos.menu.p3}
                    // MenuPq4="/Recursos/Estadisticas-Comerciales"
                    contenidoP4={props.data.recursos.menu.p4}
                    // MenuPq5="/Recursos/Otros-Sitios"
                    contenidoP5={props.data.recursos.menu.p5}
                    display6="none"
                    display7="none"
                    display8="none"
                    imgMenuIzq={imgPlanta}
                />
                <section className="seccionCentro">
                    <HeaderTitle
                        data={props.data}
                        title={props.data.recursos.title}
                    />
                    <HeaderTitle
                        id="legislacion"
                        data={props.data}
                        title2={props.data.recursos.menu.p1}
                    />
                    <Contenido 
                        data={props.data.industrias.agropecuario.h1}
                        parrafoDos={props.data.recursos.legislacion.p1}
                        parrafoTres={props.data.recursos.legislacion.p2}
                        parrafoCuatro={props.data.recursos.legislacion.p3}
                        parrafoCinco={props.data.recursos.legislacion.p4}
                        href="https://www.wto.org/spanish/docs_s/legal_s/19-adp_01_s.htm"
                        href2="https://www.wto.org/spanish/docs_s/legal_s/25-safeg_s.htm"
                        href3="https://www.wto.org/spanish/docs_s/legal_s/24-scm_01_s.htm"
                        href4="https://www.wto.org/spanish/tratop_s/dispu_s/dispu_s.htm"
                        Underline="underline"
                    />
                    <HeaderTitle
                        id="antidumping"
                        data={props.data}
                        title2={props.data.recursos.menu.p2}
                    />
                    <Contenido
                        data={props.data.industrias.agropecuario.h1}
                        parrafoDos={props.data.recursos.antidumping.p1}
                        parrafoTres={props.data.recursos.antidumping.p2}
                        parrafoCuatro={props.data.recursos.antidumping.p3}
                        parrafoCinco={props.data.recursos.antidumping.p4}
                        parrafoSeis={props.data.recursos.antidumping.p5}
                        href="http://www.diputados.gob.mx/LeyesBiblio/pdf/28.pdf"
                        href2="http://www.diputados.gob.mx/LeyesBiblio/regley/Reg_LCE.pdf"
                        href3=" https://www.dof.gob.mx/"
                        href4=" https://www.gob.mx/se/acciones-y-programas/industria-y-comercio-unidad-de-practicas-comerciales-internacionales-upci"
                        href5="http://www.ccpci.economia.gob.mx/swb/es/ccpci"
                        Underline="underline"
                    />
                    <HeaderTitle
                        id="antidumping2"
                        data={props.data}
                        title2={props.data.recursos.menu.p3}
                    />
                    <Contenido
                        data={props.data.industrias.agropecuario.h1}
                        parrafoDos={props.data.recursos.antidumpigEUA.p1}
                        parrafoTres={props.data.recursos.antidumpigEUA.p2}
                        parrafoCuatro={props.data.recursos.antidumpigEUA.p3}
                        href="https://www.commerce.gov/tags/antidumping-ad"
                        href2="https://www.usitc.gov/"
                        href3=" https://www.federalregister.gov/"
                        Underline="underline"
                    />
                    <HeaderTitle
                        id="estadisticas-comerciales"
                        data={props.data}
                        title2={props.data.recursos.menu.p4}
                    />
                    <Contenido
                        data={props.data.industrias.agropecuario.h1}
                        parrafoDos={props.data.recursos.estadistica.p1}
                        parrafoTres={props.data.recursos.estadistica.p2}
                        parrafoCuatro={props.data.recursos.estadistica.p3}
                        href="http://www.siicex.gob.mx/portalSiicex/SICETECA/Decretos/Arancel/Tigie/tigiex.htm"
                        href2="http://www.economia-snci.gob.mx/"
                        href3="http://www.intracen.org/itc/market-info-tools/trade-statistics/"
                        Underline="underline"
                    />
                    <HeaderTitle
                        id="otros"
                        data={props.data}
                        title2={props.data.recursos.menu.p5}
                    />
                    <Contenido
                        data={props.data.industrias.agropecuario.h1}
                        // parrafo={props.data.industrias.agropecuario.h1}
                        parrafoDos={props.data.recursos.otros.p1}
                        parrafoTres={props.data.recursos.otros.p2}
                        href="http://www.beta.inegi.org.mx/app/tigie"
                        href2="http://worldtradelaw.net"
                        Underline="underline"
                    />

                </section>
                <ContenedorDer data={props.data}/>
            </div>
        </section>
    );

}

export default Recursos;