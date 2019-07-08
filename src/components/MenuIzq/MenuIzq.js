import React from 'react';
import MenuPq from '../MenuPeque/MenuPeque'
import './Style.css'

const MenuIzq = (props) => {
    return(
        
        <section className="seccionIzq">
            <article className="menu">
                <MenuPq 
                    display={props.display1}
                    linkMenuPq={props.MenuPq1}
                    contenidoMenuPq={props.contenidoP1}
                />
                <MenuPq
                display={props.display2}
                    linkMenuPq={props.MenuPq2}
                    contenidoMenuPq={props.contenidoP2}
                />
                <MenuPq
                display={props.display3}
                    linkMenuPq={props.MenuPq3}
                    contenidoMenuPq={props.contenidoP3}
                />
                <MenuPq
               display={props.display4}
                    linkMenuPq={props.MenuPq4}
                    contenidoMenuPq={props.contenidoP4}
                />
                <MenuPq
                display={props.display5}
                    linkMenuPq={props.MenuPq5}
                    contenidoMenuPq={props.contenidoP5}
                />
                <MenuPq
               display={props.display6}
                    linkMenuPq={props.MenuPq6}
                    contenidoMenuPq={props.contenidoP6}
                />
                <MenuPq
               display={props.display7}
                    linkMenuPq={props.MenuPq7}
                    contenidoMenuPq={props.contenidoP7}
                />
                <MenuPq
                display={props.display8}
                    linkMenuPq={props.MenuPq8}
                    contenidoMenuPq={props.contenidoP8}
                />               
            </article>
        </section>

    )
}

export default MenuIzq