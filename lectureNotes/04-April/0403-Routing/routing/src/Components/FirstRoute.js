import React from 'react';
import { Link } from 'react-router-dom';

export default function FirstRoute() {
    return(
        <div>
            <h1>I... am Route the First</h1>
            <Link to='/second'>
                <button>Second</button>
            </Link>
            <Link to='/third'>
                <button>Third</button>
            </Link>
            <a href='http://www.square-enix.com' target='_blank'>
                <button>SquareEnix</button>
            </a>
        </div>
    )
    // Link will act as an a tag. We give it a prop to tell it where to navigate.
}