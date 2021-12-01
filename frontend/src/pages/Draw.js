import React, {useEffect, useState} from 'react';

import Palette from './Palette';
import Canvas from './Canvas';
import ToMain from './ToMain';
import Button from './Button';
import '../styles/Draw.css';
import { useBeforeunload } from 'react-beforeunload';
import axios from 'axios';

function Draw(props) {
    useBeforeunload((event)=>event.preventDefault());

    const name = props.location.state.name;
    const size = props.location.state.size;

    // manage current clicked color
    const [color, setColor] = useState(['blue','#5B8DE1']);
    // manage canvas init
    const [init, setInit] = useState(true);
    // manage pixelart data
    const [pixeldata, setPixelData] = useState([]);

    // make canvas init & make it all white
    useEffect(()=>{
        let predata = [];
        for(let i=0 ; i<size ; i++){
            let prerow = [];
            for(let j=0 ; j<size ; j++){
                prerow.push(['white','#fffefb']);
            }
            predata.push(prerow);
        }
        setPixelData(predata);
        setInit(false);
    },[init])

    // add pixelart to db
    const exportItem = () => {
        console.log('export!');
        axios.post('http://localhost:8080/pixel', {
            name : name,
            comment : '',
            size : size,
            data : [...pixeldata]
        })
        // if adding success then initialize varaibles
        .then(()=> {
            setPixelData([]);
            setColor(['blue','#5B8DE1']);
            setInit(true);
        });

    };


    return(
        <div className="drawpage">
            <ToMain/>

            <Palette setColor={setColor} color={color}/>
            <div className="drawbox">
                <Canvas color={color} pixeldata={pixeldata} setPixelData={setPixelData}/>
                <div className="drawitems">
                    <button onClick={()=>{setInit(true);}}>Init Canvas</button>
                    <Button click={exportItem} link="/universe" name="export" />
                </div>
            </div>
            
        </div>
    );

}
export default Draw;