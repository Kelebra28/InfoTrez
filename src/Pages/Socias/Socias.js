import React from 'react';
import HeaderTitle from '../../components/Header/Header'
import MenuIzq from '../../components/MenuIzq/MenuIzq'
import ContenedorCen from '../../components/ContenedorCen/ContenedorCen'
import '../Pages.css'


const Socias = props => {
    return (
        <div className="page">
            <MenuIzq
                MenuPq1="/Socias/LERT"
                MenuPq2="/Socias/IEMS"
                contenidoP1={props.data.socias.nombres.luz}
                contenidoP2={props.data.socias.nombres.itzia}
                display3="none"
                display4="none"
                display5="none"
                display6="none"
                display7="none"
                display8="none"
            />
            <section className="seccionCentro">
                <HeaderTitle data={props.data}
                    title={props.data.socias.titleS}
                />
            </section>
        </div>
    );

}

export default Socias;