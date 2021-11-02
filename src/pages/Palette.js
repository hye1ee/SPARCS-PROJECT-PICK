import React, {useState} from 'react';

function Palette(props) {

    const colorlist = [['red','#ff0000'],['orange','#fc6404'],['yellow','#fcd444'],['green','#029658'],['blue','#6454ac']];

    const changeColor = (color) => {
        console.log(color);
        props.setColor(color);
    }
    return(
        <div>
            <>
                {colorlist.map((color)=>{
                    return(
                        <div onClick={()=>changeColor(color[0])} style = {{backgroundColor : color[1], cursor : 'pointer'}} >
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