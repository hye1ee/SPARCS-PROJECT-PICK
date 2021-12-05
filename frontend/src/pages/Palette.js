import React, {useState} from 'react';
import '../styles/Draw.css';

function Palette(props) {

    // colors consisting palette
    const colorlist = [['red','#ff4141'],['orange','#fc6404'],['yellow','#fcd444'],['green','#029658'],['blue','#5B8DE1'],
                        ['purple','#a069e5'],['brown','#977857'],['white','#fffefb'],['black','#1f1f1f']];

    const changeColor = (color) => {
        props.setColor(color);
    }
    
    return(
        <div className = "palette">
                {colorlist.map((color,idx)=>{
                    return(
                        // if color is clicked make it large
                        <div className = {`${color[0]===props.color[0]?"clicked":""} colorchip ${color[0]}`} onClick={()=>changeColor(color)} key={idx} >
                        </div>
                    );
                })
                }
        </div>
    );

}
export default Palette;