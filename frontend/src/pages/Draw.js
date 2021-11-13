import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom'
import Palette from './Palette';
import Canvas from './Canvas';

function Draw(props) {
    const [color, setColor] = useState(['red','#ff0000']);
    const [init, setInit] = useState(true);
    const [pixeldata, setPixelData] = useState([]);

    //make new pixeldata and initialize it
    useEffect(()=>{
        let predata = [];
        for(let i=0 ; i<props.size ; i++){
            let prerow = [];
            for(let j=0 ; j<props.size ; j++){
                prerow.push('#ffffff');
            }
            predata.push(prerow);
        }
        setPixelData(predata);
        setInit(false);
    },[init])


    return(
        <div>
            <div>this is draw page</div>
            <div> hello! "{props.name}"</div>
            <div> canvas size : {props.size}</div>

            <Palette setColor={setColor}/>
            <br />
            <div style={{backgroundColor : color[1]}}>current color : {color[0]}</div>
            <br />
            <Canvas color={color[1]} pixeldata={pixeldata} setPixelData={setPixelData}/>

            <button onClick={()=>{setInit(true);}}>Init Canvas</button>
            <Link to ='/universe'>
                <button>
                    Export
                </button>
            </Link>
            
        </div>
    );

}
export default Draw;