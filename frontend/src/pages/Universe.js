import React, {useEffect, useState} from 'react';
import ToMain from './ToMain.js';
import Item from './Item.js';
import axios from 'axios';
import '../styles/Universe.css'

function Universe() {

    const [items, setItems] = useState([]);

    useEffect(()=>{
        // get items from db and store at items
        axios.get('http://localhost:8080/pixel')
        .then(response => {
            console.log('success getitem');
            setItems(response.data);
            console.log(items);
        })
    },[]);


    return(
        <div className="universepage">
            <ToMain/>
            <div className="item_list">
                {items.map((item)=>{
                    return(<Item name={item.name} data={item.data}/>);
                })}
            </div>

        </div>
    );

}
export default Universe;