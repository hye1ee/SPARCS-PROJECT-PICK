import React, {useEffect, useState} from 'react';

function Pixel(props) {
    const [pixelcolor,setPixelColor] = useState('#FFFFFF');

    useEffect(()=>{
        setPixelColor('#FFFFFF');
    },[props.init[0]]);

    const changepixelcolor = () => {
        setPixelColor(props.color);
    }

    
    return(
        <div onClick={changepixelcolor} style={{backgroundColor: pixelcolor, cursor:'pointer'}}>
            box
        </div>
    );

}
export default Pixel;