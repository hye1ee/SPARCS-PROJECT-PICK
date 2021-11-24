import React, {useEffect, useState} from 'react';
import './Style.css';


function Canvas(props) {

    // change the pixel color
    const changedata = (row, col) => {
        let predata = [...props.pixeldata];
        predata[row][col] = props.color;
        props.setPixelData(predata);
    }

    // check the corner pixel to make it round
    const corner = (row, col) => {
        const len = props.pixeldata.length-1;
        if(row===0 && col===0){
            return "top-left";
        }else if(row===0 && col===len){
            return "top-right";
        }else if(row===len && col===0){
            return "bottom-left";
        }else if(row===len && col===len){
            return "bottom-right";
        }else{
            return "";
        }
    }

    // one 'pixels' make on row consist of 'pixel's
    return(
        <div className="canvas">
            {props.pixeldata.map((pixels, row)=>{
                    return(
                        <div className="pixels" key={row}>
                            {pixels.map((pixel, col) =>{
                                    return(
                                        <div className={`pixel ${corner(row,col)} ${props.pixeldata[row][col][0]}`} key={[row,col]} onClick={()=>{changedata(row,col)}} >
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


 
}
export default Canvas;