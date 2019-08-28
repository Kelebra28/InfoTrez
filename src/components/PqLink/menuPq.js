import React from 'react';
import './Style.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'




class MenuPq extends React.Component {




    render() {
        return (
                <Link
                    className="contenedorPq item1 displaypq"
                    style={{ "display": this.props.display }}
                    to={this.props.linkMenuPq}
                    onMouseEnter={() => this.chageColor()}
                    onMouseEnter={() => this.onMouseEnter()}>{this.props.number}{this.props.contenidoMenuPq}
                </Link>

        )
    }


}

export default MenuPq