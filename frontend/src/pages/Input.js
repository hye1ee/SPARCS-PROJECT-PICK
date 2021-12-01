import {React, useState} from 'react';
import '../styles/Button.css';
import '../styles/Image.css';
import Warning from '../public/warning.svg'

function Input(props) {
    const [warn, setWarn] = useState(false);

    const changeValue = (evt) => {
        let value = evt.target.value;
        props.onChange(value);

        if(props.message === 'username'){ // check username validity
            const alphanumeric = /^[0-9a-zA-Z]+$/;
            if(value.match(alphanumeric)){ // if username is alphanumeric value
                props.error(false);
                setWarn(false);
            }else{
                props.error(true);
                setWarn(true);
            }

        }else{ // check size validity
            const numeric = /^[0-9]+$/;
             // if size is in valid range
            if(value.match(numeric)){
                props.error(false);
                setWarn(false);
            }else{
                props.error(true);
                setWarn(true);
            }
        }
    }
    


    return(
        <div className="inputbox">
            <input className={`${warn} input`} type='text' placeholder={props.message} onChange={(evt)=>changeValue(evt)} />
            {warn===true?<img className="img_warning" src={Warning}/>:<></>}
        </div>
        
    );

};

export default Input;