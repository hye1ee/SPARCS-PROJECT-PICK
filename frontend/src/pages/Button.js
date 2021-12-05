import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/Button.css';

function Button(props) {
    // if props.disabled is true then disable the button

    return( 
        <div className={props.position}>
            {props.disabled?
                <button className="button_component" onClick={props.click} disabled={props.disalbed}>
                    {props.name}
                </button>
                :
                <Link to = {{ pathname : props.link, state : props.data }} style={{textDecoration :'none'}}>
                    <button className="button_component" onClick={props.click}>
                        {props.name}
                    </button>
                </Link>
            }
        </div>
        
    );

};

export default Button;