import React, {useEffect, useState} from 'react';

function Pixel(props) {
    //props : info={{row:props.row, col:i, color:props.color}} data={props.data[0],props.data[1]}
    const changedata = () => {
        const predata = props.pixeldata;
        predata[props.row][props.col] = props.color;
        props.setPixelData(predata);
        console.log(props.pixeldata);
    }

    return(
        <div onClick={changedata} style={{backgroundColor: props.color, cursor:'pointer'}}>
            box
        </div>
    );

}
export default Pixel;