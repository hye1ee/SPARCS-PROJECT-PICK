import React, {useEffect, useState} from 'react';
import Pixel from './Pixel';

function Canvas(props) {
    //props : color={color[1]} init={[init,setInit]} pixeldata={[pixeldata,setPixelData]}


    return(
        <div>
            {props.pixeldata.map((pixels, row)=>{
                    return(
                        <div>
                            {pixels.map((pixel, col) =>{
                                    return(<Pixel row={row} col={col} color={props.pixeldata[row][col]} pixeldata={props.pixeldata} setPixelData={props.setPixelData} key={[row,col]} />);
                                })
                            }   
                        </div>
                    );
                })
            }
        </div>
    );


    /*
    const canvas = [];
    for(let i=0 ; i<props.size ; i++){
        canvas.push(<Pixels color={props.color} row={i} data={[pixeldata,changePixelData]} />);
    }
    

    return(
        <div>
            {canvas.map((pixels)=>{
                    return(
                        <div>
                            {pixels}
                        </div>
                    );
                }
            )}
        </div>
    );
    */

}
export default Canvas;