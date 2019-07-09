import React from 'react';
import Contenido from '../../components/Contenido/contenido';
import MenuIzq from '../../components/MenuIzq/MenuIzq'

const Margenes = props => {
    return (
        <div className="page">
        <MenuIzq
         MenuPq1="/EconomiaLitigios/Analisis-Importaciones"
         contenidoP1= {props.data.economia.menu.p1}
         MenuPq2="/EconomiaLitigios/Margenes-Dumping"
         contenidoP2={props.data.economia.menu.p2}
         MenuPq3="/EconomiaLitigios/Dano-Industria"
         contenidoP3={props.data.economia.menu.p3}
         MenuPq4="/EconomiaLitigios/Calculo-Subvenciones"
         contenidoP4={props.data.economia.menu.p4}
         MenuPq5="/EconomiaLitigios/Verificaciones"
         contenidoP5={props.data.economia.menu.p5}
         display6="none"
         display7="none"
         display8="none"
         />
      <section className="areaTextContainer">
         <Contenido data={props.data}
             parrafo={props.data.economia.margenes.h1}
             parrafoDos={props.data.economia.margenes.p1}
             />
         </section>
     </div>
    );

}

export default Margenes;