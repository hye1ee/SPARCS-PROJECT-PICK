import React, {useEffect, useState} from 'react';
import Pixel from './Pixel';

function Canvas(props) {

    const changedata = (row, col) => {
        let predata = [...props.pixeldata];
        predata[row][col] = props.color;
        props.setPixelData(predata);
        console.log(props.pixeldata);
    }

    return(
        <div>
            {props.pixeldata.map((pixels, row)=>{
                    return(
                        <div key={row}>
                            {pixels.map((pixel, col) =>{
                                    return(
                                        <div key={[row,col]} onClick={()=>{changedata(row,col)}} style={{backgroundColor: props.pixeldata[row][col], cursor:'pointer'}}>
                                            box
                                        </div>
                                    );
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