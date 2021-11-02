import React, {useEffect, useState} from 'react';
import Pixels from './Pixels';

function Canvas(props) {

    const pixelarray = [];
    for(let i=0 ; i<props.size ; i++){
        pixelarray.push(<Pixels color={props.color} size={props.size} init={props.init}/>);
    }

    return(
        <div>
            {pixelarray.map((pixels)=>{
                    return(
                        <div>
                            {pixels}
                        </div>
                    );
                }
            )}
        </div>
    );

}
export default Canvas;