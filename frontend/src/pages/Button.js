import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/Button.css';

function Button(props) {
    return( 
        <div className={props.position}>
            <Link to = {props.link} style={{textDecoration :'none'}}>
            <button className="button_component">
                {props.name}
            </button>
            </Link>
        </div>
        
    );

}
export default Button;