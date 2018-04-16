import React from 'react';
import { Link } from 'react-router-dom';

export default function SecondRoute() {
    return(
        <div>
            <h1>Behold... Route the Second</h1>
            <Link to='/'>
                <button>First</button>
            </Link>
            
            <Link to='/third'>
                <button>Third</button>
            </Link>
        </div>
    )
}