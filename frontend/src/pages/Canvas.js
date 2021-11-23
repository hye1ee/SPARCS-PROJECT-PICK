import React, {useEffect, useState} from 'react';
import './Style.css';


function Canvas(props) {

    const changedata = (row, col) => {
        let predata = [...props.pixeldata];
        predata[row][col] = props.color;
        props.setPixelData(predata);
        console.log(props.pixeldata);
    }

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

    return(
        <div className="canvas">
            {props.pixeldata.map((pixels, row)=>{
                    return(
                        <div className="pixels" key={row}>
                            {pixels.map((pixel, col) =>{
                                    return(
                                        <div className={`pixel ${corner(row,col)}`} key={[row,col]} onClick={()=>{changedata(row,col)}} style={{backgroundColor: props.pixeldata[row][col], cursor:'pointer'}}>
                                        
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