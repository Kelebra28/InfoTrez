import React from 'react';
import MenuIzq from '../../components/MenuIzq2/MenuIzq'
import HeaderTitle from '../../components/Header/Header'
import '../Pages.css'
import ContenedorDer from '../../components/contenedorDer/contenedorDer';
import imgPlanta from '../../Img/MONITOREO-ESTRATEGICO.png'
import CollapseCustom from '../../components/Collapse/collapse';

const Servicios = props => {
    return (
        <section className="preventMain">
            <div className="page main">
                <MenuIzq
                    MenuPq1="/Servicios/RemediosC"
                    contenidoP1={props.data.servicos.p1}
                    MenuPq2="/DisputasComerciales/"
                    contenidoP2={props.data.servicos.p2}
                    MenuPq3="/LitigiosAntidumping"
                    contenidoP3={props.data.servicos.p3}
                    MenuPq4="/EconomiaLitigios"
                    contenidoP4={props.data.servicos.p4}
                    MenuPq5="MonitoreoEstrategico/"
                    contenidoP5={props.data.servicos.p5}
                    MenuPq6="/Mx-USA-TradePlanning/"
                    contenidoP6={props.data.servicos.p6}
                    display7="none"
                    display8="none"
                    imgMenuIzq={imgPlanta}
                />
                <section className="seccionCentro">
                    <HeaderTitle data={props.data}
                        title={props.data.servicos.title}
                    />

                    {/* <p style={{margin: "0 1em"}}>{props.data.servicos.speech}</p> */}
                    <p>
                        T-REZ Consulting (T-REZ)  es  un  despacho  especializado  en  ”Remedios  Comerciales”  y solución de controversias internacionales. <br/> Ofrecemos a productores nacionales nuestros conocimientos especializados en derecho y economía   internacional   para   asesorarlos   en   todas   las   etapas   de   los   diversos procedimientos  en  contra  de  las  prácticas  de  dumping,  o  en  contra  de  la  competencia internacional   desleal   por   subvenciones   y   apoyos   de   sus   gobiernos   para   ganar inequitativamente   mercados   locales,   así   como   en   la   solución   de   controversias comerciales internacionales. <br/>  Nuestros servicios incluyen toda la amplia gama de servicios dentro de la especialidad de remedios  comerciales y de los mecanismos de solución de controversias internacionales: <br/> <br/> -Estudios  de  factibilidad  para  determinar  si  un  caso  de  presuntas  prácticas  desleales tiene  altas  probabilidades  de  éxito,  en  cuyo  caso  realiza  por  completo  los  estudios legales y económicos para integrar solicitudes de investigaciones  antidumping,  sobre subvenciones  o  de  medidas  de  salvaguarda  y  exámenes  quinquenales,  así  como procedimientos de elusión  de cuota y cobertura de producto; <br/> <br/> -Una vez presentadas las solicitudes formales ante la Secretaría de Economía, T-REZ se encarga  de  la  representación  legal  de  productores  nacionales  en  los  procedimientos legales ante dicha autoridad, o, en su caso, en juicios de nulidad. <br/> <br/> -Asesoramos a Gobiernos o productores nacionales en paneles comerciales bilaterales o en paneles ante la OMC. <br/> <br/> -Asesoramos  a  exportadores  al  mercado  de  los  EUA  en  denuncias  por  dumping  y realiza asesoría preventiva para una exitosa defensa ante posibles denuncias. <br/> <br/>
                         En  suma,  el  equipo  de    T-REZ  cuenta  con  experiencia  de  20  años  en  la  defensa  de industrias   nacionales   frente   a   las   prácticas   desleales   de   comercio   internacional, ofreciendo un servicio integral que incluye, además de los servicios legales, servicios de asesoría   económica   y   de   análisis   de   la   situación   financiera   de   la   industria. Adicionalmente,  ofrecemos  asesoría  y  representación  de  partes  en  la  defensa  en  los mecanismos de solución de controversias comerciales, ya sea en TLCAN o en la OMC.
                    </p>
                </section>
                <ContenedorDer />
            </div>
        </section>

    );

}

export default Servicios;