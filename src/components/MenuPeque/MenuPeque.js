import React from 'react';
import './Style.css'



class MenuPq extends React.Component {



        
    render(){
        return(
            <a  
                className="contenedorPq item1 displaypq" 
                style={{"display": this.props.display }}
                href={this.props.linkMenuPq}
                onMouseEnter={ () => this.chageColor() } 
                onMouseEnter={ () => this.onMouseEnter() }>{this.props.contenidoMenuPq}</a>
        )
    }


}

export default MenuPq