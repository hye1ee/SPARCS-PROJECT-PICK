import React from 'react';
import { Link } from 'react-router-dom'

function Start() {
    return(
        <div>
            this is start page
            <Link to ='/universe'>
                <button>
                    go universe
                </button>
            </Link>
            
        </div>
    );

}
export default Start;