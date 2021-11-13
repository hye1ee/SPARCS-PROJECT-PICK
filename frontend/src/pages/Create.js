import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

function Create(props) {
    const [init,setInit] = useState(false);

    const changeName = (evt) => {
        props.setName(evt.target.value);
    }
    const changeSize = (evt) => {
        props.setSize(evt.target.value);
    }
    useEffect(()=>{
        props.setName('');
        props.setSize(0);
    },[init]);

    return(
        <div>
            <div>this is create page</div>
            <div>name</div>
            <input onChange={(evt)=>changeName(evt)} />
            <div>size</div>
            <input onChange={(evt)=>changeSize(evt)} />

            <Link to='/draw'>
                <button onClick={()=>{setInit(true);}}>
                    Draw
                </button>
            </Link>

        </div>
    );

}
export default Create;