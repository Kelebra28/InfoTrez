import React from 'react';
import Contenido from '../../components/Contenido/contenido';
import MenuIzq from '../../components/MenuIzq/MenuIzq'
import HeaderTitle from '../../components/Header/Header'


const Elusion = props => {
    return (
        <div className="page">
            <MenuIzq
                MenuPq1="/RemediosComerciales/Anti-Dumping"
                contenidoP1={props.data.remedios.antidumping.h1}
                MenuPq2="/RemediosComerciales/Anti-Subvenciones"
                contenidoP2={props.data.remedios.subvenciones.h1}
                MenuPq3="/RemediosComerciales/Salvaguardias"
                contenidoP3={props.data.remedios.salvaguardias.h1}
                MenuPq4="/RemediosComerciales/Examenes-Vigilancia"
                contenidoP4={props.data.remedios.examenes.h1}
                MenuPq5="/RemediosComerciales/Revisiones-Anuales"
                contenidoP5={props.data.remedios.reviciones.h1}
                MenuPq6="/RemediosComerciales/Anti-elusion"
                contenidoP6={props.data.remedios.elusion.h1}
                MenuPq7="/RemediosComerciales/Cobertura"
                contenidoP7={props.data.remedios.cobertura.h1}
                display8="none"
            />
            <section className="seccionCentro">
                <div className="contenidoCentro">

                    <HeaderTitle data={props.data}
                        title={props.data.remedios.elusion.h1}
                    />
                    <Contenido data={props.data}
                        //  parrafo={props.data.remedios.elusion.h1}
                        parrafoDos={props.data.remedios.elusion.p1}
                    />
                </div>
            </section>
        </div>
    );

}

export default Elusion;