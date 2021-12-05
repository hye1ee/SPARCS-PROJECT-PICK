import React, { useState, useRef } from 'react';
import Download from '../public/icon_download.svg';
import Delete from '../public/icon_delete.svg';
import axios from 'axios';
import {exportComponentAsPNG} from 'react-component-export-image';
import '../styles/Item.css';
import '../styles/Draw.css';

function Item(props) {

    const name = props.name;
    const data = props.data;
    const itemRef = useRef();

    const [mouse, setMouse] = useState(false);
    
    const itemDownload = () => {
        const filename = `pixele_${name}.png`
        exportComponentAsPNG(itemRef,{
            fileName: filename
        });
    }

    const itemDelete = () => {

        // delete request need 'data : {}' attribute
        // get params at server 'req.body.{}' 
        axios.delete("/pixel/delete",{data :{name:name}})
        .then(()=>{
            props.setReload(true);
        });

    }

    const mousehover = () => {
        if(mouse===true){
            return(
                <div className="item_menu">
                    <img className="icon" src={Download} onClick={itemDownload}/>
                    <img className="icon" src={Delete} onClick={itemDelete}/>
                </div>
            );
        }else{
            return(<></>);
        }
    }

    return(
        <div className="item_component" onMouseEnter={()=>setMouse(true)} onMouseLeave={()=>setMouse(false)}>
            <div className="item_hover">
                {mousehover()}
            </div>
            <div className="item_box">
                <div className='item_data' ref={itemRef}>
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