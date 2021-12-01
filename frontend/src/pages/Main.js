import React from 'react';
import main_logo from '../public/main_logo.svg'
import Button from './Button.js'
import '../styles/Main.css';
import '../styles/Image.css';

function Main() {
    return(
        <div className="mainpage">
            <Button position="left" link="/universe" name="universe"/>
            <img className="img_main" src={main_logo}/>
            <Button position="right" link="/create" name="create"/>
            
        </div>
    );

}
export default Main;