import React, {useEffect, useState} from 'react';
import Pixel from './Pixel.js';

function Pixels(props) {
    
    const pixels = [];
    for(let i=0 ; i<props.size ; i++){
        pixels.push(<Pixel row ={props.row} col={i} color={props.color} data={props.data[0],props.data[1]}/>);
    }

    
    return(
        <div style={{display : 'flex', flexDirection :'row'}}>
            {pixels.map((pixel)=>{
                return(
                    <>
                        {pixel}
                    </>
                );

            })}
        </div>
    );

}
export default Pixels;