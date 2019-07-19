import React from 'react';
import Contenido from '../../components/Contenido/contenido';
import MenuIzq from '../../components/MenuIzq/MenuIzq'
import HeaderTitle from '../../components/Header/Header'

const DanoIn = props => {
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
      <section className="seccionCentro">
      <HeaderTitle data={props.data}
                title={props.data.economia.dano.h1}
            />
         <Contenido data={props.data}
            //  parrafo={props.data.economia.dano.h1}
             parrafoDos={props.data.economia.dano.p1}
             />
         </section>
     </div>
    );
}

export default DanoIn;