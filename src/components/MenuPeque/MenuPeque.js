import React from 'react';
import './Style.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'




class MenuPq extends React.Component {


    render() {
        return (
                <a  
                    number={this.props.number}
                    className="contenedorPq item1 displaypq"
                    style={{ "display": this.props.display }}
                    to={this.props.linkMenuPq}
                    href={this.props.href}
                    onMouseEnter={() => this.chageColor()}
                    onMouseEnter={() => this.onMouseEnter()}
                >   
                    {this.props.number}{this.props.contenidoMenuPq}
                </a>
        )
    }


}

export default MenuPq