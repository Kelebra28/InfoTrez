import React from 'react';
import Contenido from '../../components/Contenido/contenido';
import '../Pages.css'
import HeaderTitle from '../../components/Header/Header';

const DisputasC = props => {
    return (
        <div className="page">
            <section className="areaTextContainer">
                {/* <div data={props.data} nombreArea={props.data.socias.Luz.title} /> */}
                <HeaderTitle
                        id="agropecuario"
                        data={props.data}
                        title2={props.data.industrias.menu.p1}
                />
                <Contenido data={props.data}
                    parrafo={props.data.socias.Itziar.title}
                    parrafoDos={props.data.socias.Itziar.p1}
                    parrafoTres={props.data.socias.Itziar.p2}
                    parrafoCuatro={props.data.socias.Itziar.p3}
                    parrafoCinco={props.data.socias.Itziar.p4}
                    parrafoSeis={props.data.socias.Itziar.p5}
                    // parrafoSiete={props.data.socias.Itziar.p1}
                    // parrafoOcho={props.data.socias.Itziar.p1}
                    // parrafoNueve={props.data.socias.Itziar.p1}
                    />
            </section>
        </div>
    );

}

export default DisputasC;