import React from 'react';
import Contenido from '../../components/Contenido/contenido';
import MenuIzq from '../../components/MenuIzq/MenuIzq'


const PlanesOMC = props => {
    return (
        <div className="page">
           <MenuIzq
            MenuPq1="/DisputasComerciales/Planes-TLC"
            contenidoP1= {props.data.disputas.panelesTLC.h1}
            MenuPq2="/DisputasComerciales/Planes-OMC"
            contenidoP2={props.data.disputas.panelesOMC.h1}
            display3="none"
            display4="none"
            display5="none"
            display6="none"
            display7="none"
            display8="none"
         />
         <section className="areaTextContainer">
            <Contenido data={props.data}
                 parrafo={props.data.disputas.panelesOMC.h1}
                 parrafoDos={props.data.disputas.panelesOMC.p1}
            />
            </section>
        </div>
    );

}

export default PlanesOMC;