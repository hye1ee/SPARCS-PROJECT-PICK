import React, {useEffect, useState} from 'react';
import Pixel from './Pixel.js';

function Pixels(props) {

    const pixels = [];
    for(let i=0 ; i<props.size ; i++){
        pixels.push(<Pixel size={props.size} init={props.init} color={props.color}/>);
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