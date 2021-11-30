import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

function Create(props) {
    const [name,setName] = useState('');
    const [size,setSize] = useState(0);

    const changeName = (evt) => {
        setName(evt.target.value);
    }
    const changeSize = (evt) => {
        setSize(evt.target.value);
    }
    
    return(
        <div className="createpage">
            <div>this is create page</div>
            <div>name</div>
            <input onChange={(evt)=>changeName(evt)} />
            <div>size</div>
            <input onChange={(evt)=>changeSize(evt)} />

            <Link to={{ pathname : '/draw',
                        state : {
                            name : name,
                            size : size
                        }
            }}>
                <button>
                    Draw
                </button>
            </Link>

        </div>
    );

}
export default Create;