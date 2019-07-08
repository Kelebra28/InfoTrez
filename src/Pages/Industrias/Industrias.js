import React from 'react';
import Contenido from '../../components/Contenido/contenido';
import MenuIzq from '../../components/MenuIzq/MenuIzq'

const Industrias = props => {
    return (
        <div className="page">
        <MenuIzq
            MenuPq1="/Industrias/Agropecuario"
            contenidoP1= {props.data.industrias.menu.p1}
            MenuPq2="/Industrias/Manufacturero"
            contenidoP2={props.data.industrias.menu.p2}
            MenuPq3="/Industrias/Manufacturero"
            contenidoP3={props.data.industrias.menu.p3}
            display4="none"
            display5="none"
            display6="none"
            display7="none"
            display8="none"
         />
        <section className="areaTextContainer">
          
        </section>
    </div>
    );

}

export default Industrias;