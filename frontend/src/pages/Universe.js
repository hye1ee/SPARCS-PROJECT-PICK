import React, {useEffect, useState} from 'react';
import ToMain from './ToMain.js';
import Item from './Item.js';
import axios from 'axios';
import '../styles/Universe.css'

function Universe() {

    const [items, setItems] = useState([]);
    // if item has deleted then reload all items
    const [reload, setReload] = useState(false);
    let scroll = false;

    useEffect(()=>{
        // get items from db and store at items
        axios.get("/pixel")
        .then(response => {
            console.log('success getitem');
            setItems(response.data);
        });
        setReload(false);
        if(items.length>3){
            scroll = true;
        }else{
            scroll = false;
        }
    },[reload]);


    return(
        <div className={scroll?'universepage':'universepage small'}>
            <ToMain/>
            <div className="item_all">
                <div className="item_list">
                    {items.map((item,idx)=>{
                        return(<Item name={item.name} data={item.data} setReload={setReload} key={idx}/>);
                    })}
                </div>
            </div>
            

        </div>
    );

}
export default Universe;