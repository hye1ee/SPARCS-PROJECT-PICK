import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import Palette from './Palette';
import Canvas from './Canvas';

function Draw(props) {
    const [color, setColor] = useState(['red','#ff0000']);
    const [init, setInit] = useState(false);

    return(
        <div>
            <div>this is draw page</div>
            <div> hello! "{props.name}"</div>
            <div> canvas size : {props.size}</div>

            <Palette setColor={setColor}/>
            <br />
            <div style={{backgroundColor : color[1]}}>current color : {color[0]}</div>
            <br />
            <Canvas color={color[1]} size={props.size} init={[init,setInit]}/>

            <button onClick={()=>{setInit(!init);}}>Init Canvas</button>
            <Link to ='/universe'>
                <button>
                    Export
                </button>
            </Link>
            
        </div>
    );

}
export default Draw;