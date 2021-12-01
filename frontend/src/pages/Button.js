import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/Button.css';

function Button(props) {
    return( 
        <div className={props.position}>
            <Link to = {{ pathname : props.link, state : props.data }} style={{textDecoration :'none'}}>
                <button className="button_component" onClick={props.click}>
                    {props.name}
                </button>
            </Link>
        </div>
        
    );

};

export default Button;