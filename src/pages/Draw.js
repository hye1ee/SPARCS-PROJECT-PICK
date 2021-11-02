import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import Palette from './Palette';

function Draw(props) {
    const [color, setColor] = useState('red');

    return(
        <div>
            <div>this is draw page</div>
            <div> hello! "{props.name}"</div>
            <div> canvas size : {props.size}</div>

            <Palette setColor={setColor}/>
            <div>current color : {color}</div>

            <Link to ='/universe'>
                <button>
                    Export
                </button>
            </Link>
            
        </div>
    );

}
export default Draw;