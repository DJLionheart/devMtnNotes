import React from 'react';
import { Link } from 'react-router-dom';

export default function ThirdRoute( props ){
    return(
        <div>
            <h1> Thrice hath thine Components been made...</h1>
            <h2> Verily... Route the Third</h2>
            <Link to='/'>
                <button>First</button>
            </Link>
            <Link to='/second'>
                <button>Second</button>
            </Link>
        </div>
    )

}