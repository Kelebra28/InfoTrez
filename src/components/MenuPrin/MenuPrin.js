import React from 'react';
import './Style.css'
import '../Responsive.css'

const MenuPrin = (props) => {
    return(
    <main>
        <section className="pleca1">
    <p>{props.data.home.p1}</p> 
        </section>
        <section className="pleca2">
            <p>{props.data.home.p2}</p>
        </section>
    </main>
    )
}

export default MenuPrin