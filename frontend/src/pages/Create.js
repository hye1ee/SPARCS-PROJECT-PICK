import React, {useEffect, useState} from 'react'
import Button from './Button.js'
import Input from './Input.js'
import ToMain from './ToMain.js'
import '../styles/Create.css'

function Create(props) {
    const [name,setName] = useState('');
    const [size,setSize] = useState('');
    const messages =['Hello!\nWelcome','Show\nYour Pixels','Merry\nChristmas*-*'];
    let message = messages[0];

    useEffect(()=>{
        message = messages.sort(()=>Math.random()-0.5)[0];
    },[]);

    let error = 'Please enter your name and size';

    const [nameError, setNameError] = useState(true);
    const [sizeError, setSizeError] = useState(true);

    const info = {
        name : name,
        size : size
    }

    if(nameError==='dup'){
        error = 'Username is already taken';
    }else if(nameError){
        error = 'Username should be alphanumeric characters';
    }
    else if(sizeError){
        error = 'Size should be a number under 30';
    }
    else if(name==='' || size===''){
        error = 'Please enter your name and size';
    }else{
        error = `Let's Create!`;
    }
    

    
    return(
        <div className="createpage">
            <Button position="left" link="/draw" name="create" data={info} disabled={nameError||sizeError}/>
            <div className="createbox">
                <ToMain />
                <div className="createitems">
                    <div className="message_bottom message_create"><span>{message}</span></div>
                    <div className="message_middle message_error"><span>{error}</span></div>
                    <div className="message_input">
                        <Input error={setNameError} message="username" onChange={setName} />
                        <Input error={setSizeError} message="size" onChange={setSize} />
                    </div>
                    <div className="emptyitem"></div>
                </div>
            </div>
            <div className="emptybox"></div>
        </div>
    );

}
export default Create;