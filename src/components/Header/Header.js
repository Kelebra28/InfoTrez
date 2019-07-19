import React from 'react'
import './HeaderStyle.css' 

const HeaderTitle = props => {
    return (
        <div className="title">
            <h2>{props.title}</h2>
        </div>
    )
}

export default HeaderTitle;
