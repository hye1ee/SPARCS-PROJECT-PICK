import React from 'react';
import { Link } from 'react-router-dom';

function Main() {
    return(
        <div>
            this is universe page
            <br />
            <Link to='/'>
                <button>
                    go back to start page
                </button>
            </Link>
            <br />
            <Link to='/create'>
                <button>
                    create!
                </button>
            </Link>

        </div>
    );

}
export default Main;