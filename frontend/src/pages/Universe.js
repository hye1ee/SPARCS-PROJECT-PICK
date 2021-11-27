import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

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

    const pixelItems = items.map((item)=>{
        return(
            <div>
                {item.name}
            </div>
        );
    });

    return(
        <div>
            this is universe page
            <br />
            <Link to='/'>
                <button>
                    go back to start page
                </button>
            </Link>
            <div>
                {pixelItems}
            </div>
            <br />
            <Link to='/create'>
                <button>
                    create!
                </button>
            </Link>

        </div>
    );

}
export default Universe;