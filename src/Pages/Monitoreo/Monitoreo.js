import React from 'react';
import Contenido from '../../components/Contenido/contenido';
import MenuIzq from '../../components/MenuIzq/MenuIzq'
import HeaderTitle from '../../components/Header/Header'
import ContenedorCen from '../../components/ContenedorCen/ContenedorCen'

const Monitoreo = props => {
    return (
        <div className="page">
        <MenuIzq
         MenuPq1="/MonitoreoEstrategico/Monitoreo-Precios"
         contenidoP1= {props.data.monitoreos.menu.p1}
         MenuPq2="/MonitoreoEstrategico/Alertas-Dumping"
         contenidoP2={props.data.monitoreos.menu.p2}
         display3="none"
         display4="none"
         display5="none"
         display6="none"
         display7="none"
         display8="none"
         />
      <section className="seccionCentro">
      <HeaderTitle data={props.data}
                title={props.data.monitoreos.title}
            />
         <Contenido data={props.data}
            //  parrafo={props.data.monitoreos.title}
             />
         </section>
     </div>
    );


}

export default Monitoreo;