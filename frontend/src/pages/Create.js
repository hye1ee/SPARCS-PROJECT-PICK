import React, {useEffect, useState} from 'react';
import Button from './Button.js'
import Input from './Input.js'
import ToMain from './ToMain.js'
import '../styles/Create.css'

function Create(props) {
    const [name,setName] = useState('');
    const [size,setSize] = useState();
    const message ='Merry \n Christmas*-*';
    let error = 'Please enter your name and size';

    const [nameError, setNameError] = useState(true);
    const [sizeError, setSizeError] = useState(true);

    const data = {
        name : name,
        size : size
    }

    if(nameError){
        error = 'Username should be alphanumeric characters';
    }else if(sizeError){
        error = 'Size should be a number under 15';
    }else if(nameError||sizeError){
        error = 'Please enter your name and size';
    }else if(name==='' || size===0){
        error = 'Please enter your name and size';
    }else{
        error = `Let's Create!`;
    }
    
    return(
        <div className="createpage">
            <Button position="left" link="/draw" name="create" data={data}/>
            <div className="createbox">
                <ToMain />
                <div className="message_create">{message}</div>
                <div className="message_error">{error}</div>
 
                <Input error={setNameError} message="username" onChange={setName} />
                <Input error={setSizeError} message="size" onChange={setSize} />

            </div>
            <div className="emptybox"></div>
        </div>
    );

}
export default Create;