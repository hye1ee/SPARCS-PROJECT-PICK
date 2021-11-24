import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom'
import Palette from './Palette';
import Canvas from './Canvas';
import './Style.css';

function Draw(props) {
    // manage current clicked color
    const [color, setColor] = useState(['blue','#5B8DE1']);
    // manage canvas init
    const [init, setInit] = useState(true);
    // manage pixelart data
    const [pixeldata, setPixelData] = useState([]);

    // make canvas init & make it all white
    useEffect(()=>{
        let predata = [];
        for(let i=0 ; i<props.size ; i++){
            let prerow = [];
            for(let j=0 ; j<props.size ; j++){
                prerow.push(['white','#fffefb']);
            }
            predata.push(prerow);
        }
        setPixelData(predata);
        setInit(false);
    },[init])


    return(
        <div className="drawpage">
            <div>this is draw page</div>
            <div> hello! "{props.name}"</div>
            <div> canvas size : {props.size}</div>

            <Palette setColor={setColor} color={color}/>
            <Canvas color={color} pixeldata={pixeldata} setPixelData={setPixelData}/>

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