import React, {useState} from 'react';

function Palette(props) {

    const colorlist = [['red','#ff0000'],['orange','#fc6404'],['yellow','#fcd444'],['green','#029658'],['blue','#6454ac']];

    const changeColor = (color) => {
        props.setColor(color);
    }
    return(
        <div style={{display : 'flex', flexDirection:'row', justifyContent : 'space-evenly'}}>
            <>
                {colorlist.map((color)=>{
                    return(
                        <div onClick={()=>changeColor(color)} style = {{backgroundColor : color[1], cursor : 'pointer'}} >
                            {color[0]}
                        </div>
                    );
                })

                }
            </>
        </div>
    );

}
export default Palette;