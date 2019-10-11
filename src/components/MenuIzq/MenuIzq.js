import React from 'react';
import MenuPq from '../MenuPeque/MenuPeque'
import imgLap from '../../Img/lapcafe.jpg'
import imgPlanta from '../../Img/planta.png'
import './Style.css'

const MenuIzq = (props) => {
    return (
        <section className="seccionIzq d-none d-lg-block">
            <article className="menu">
                <MenuPq
                    display={props.display1}
                    linkMenuPq={props.MenuPq1}
                    contenidoMenuPq={props.contenidoP1}
                    href={props.href1}
                    number="1.-"
                />
                <MenuPq
                    display={props.display2}
                    linkMenuPq={props.MenuPq2}
                    contenidoMenuPq={props.contenidoP2}
                    href={props.href2}
                    number="2.-"
                />
                <MenuPq
                    display={props.display3}
                    linkMenuPq={props.MenuPq3}
                    contenidoMenuPq={props.contenidoP3}
                    href={props.href3}
                    number="3.-"
                />
                <MenuPq
                    display={props.display4}
                    linkMenuPq={props.MenuPq4}
                    contenidoMenuPq={props.contenidoP4}
                    href={props.href4}
                    number="4.-"
                />
                <MenuPq
                    display={props.display5}
                    linkMenuPq={props.MenuPq5}
                    contenidoMenuPq={props.contenidoP5}
                    href={props.href5}
                    number="5.-"
                />
                <MenuPq
                    display={props.display6}
                    linkMenuPq={props.MenuPq6}
                    contenidoMenuPq={props.contenidoP6}
                    href={props.href6}
                    number="6.-"
                />
                <MenuPq
                    display={props.display7}
                    linkMenuPq={props.MenuPq7}
                    contenidoMenuPq={props.contenidoP7}
                    href={props.href7}
                    number="7.-"
                />
                <MenuPq
                    display={props.display8}
                    linkMenuPq={props.MenuPq8}
                    contenidoMenuPq={props.contenidoP8}
                    href={props.href8}
                    number="8.-"
                />
            </article>
            <article className="contenedorFotoIzq">
                <img src={props.imgMenuIzq} alt="img menu izq"  style={{objectFit: "cover", height: props.imgHeight}}/>
            </article>
        </section>

    )
}

export default MenuIzq