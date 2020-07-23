import React from 'react';
import MenuPrin from '../components/MenuPrin/MenuPrin'

const Home = props => {
    return (
        <div className="page">
            <MenuPrin data={props.data}/>
    </div>
    );

}

export default Home;
