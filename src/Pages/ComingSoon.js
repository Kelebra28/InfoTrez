import React from 'react';
import BlogImg from '../Img/blog.png'

const ComingSoon = () => {
    return ( 
        <div className="d-flex justify-content-center align-items-center">
            <img src={BlogImg} alt="Coming Soon Blog" style={{width: "60%"}}/> 
        </div>
    );
}
 
export default ComingSoon;
