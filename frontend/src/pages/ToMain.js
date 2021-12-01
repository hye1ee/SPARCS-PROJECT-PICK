import React from 'react';
import { Link } from 'react-router-dom'
import LogoTxt from '../public/logo_txt.svg'
import '../styles/Image.css';

function ToMain(props) {
    return( 
        <div className="tomain">
            <Link to = "/">
                <img className="img_logotxt" src={LogoTxt}/>
            </Link>
        </div>
        
    );

};

export default ToMain;