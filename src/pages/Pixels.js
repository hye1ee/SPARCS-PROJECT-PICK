import React, {useEffect, useState} from 'react';

function Pixels(props) {
    const [pixelcolor,setPixelColor] = useState('#FFFFFF');

    useEffect(()=>{
        setPixelColor('#FFFFFF');
    },[props.init[0]]);

    const changepixelcolor = () => {
        
        setPixelColor(props.color);
        console.log(pixelcolor);
    }

    
    return(
        <>
            <div onClick={changepixelcolor} style={{backgroundColor: pixelcolor, cursor:'pointer'}}>box</div>
        </>
    );

}
export default Pixels;