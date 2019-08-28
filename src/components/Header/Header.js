import React from 'react'
import './HeaderStyle.css' 

const HeaderTitle = props => {
    return (
        <p id={props.id} className="title">
            <span className="titleEsp">{props.title}</span> 
            {props.title2}
        </p>
    )
}

export default HeaderTitle;
