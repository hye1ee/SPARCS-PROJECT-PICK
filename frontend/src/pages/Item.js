import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/Item.css';
import '../styles/Draw.css';

function Item(props) {

    const name = props.name;
    const data = props.data;
    return(
        <div className="item_component">
        
            <div className="item_box">
                <div className="item_data">
                    {data.map((pixels, row)=>{
                            return(
                                <div className="item_pixels" key={row}>
                                    {pixels.map((pixel, col) =>{
                                            return(
                                                <div className={`item_pixel ${data[row][col][0]}`} key={[row,col]}>
                                                </div>
                                            );
                                        })
                                    }   
                            </div>
                            );
                        })
                    }
                </div>

                <div className="item_name">
                    {`@${name}`}
                </div>
            </div>
        </div>
        
    );

};

export default Item;