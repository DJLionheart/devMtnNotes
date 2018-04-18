import React from 'react';
import { Link } from 'react-router-dom';



export default function Colors() {
    var colors = ['purple', 'green', 'red', 'indigo'];

    // the map would most likely happen above the return, within the render in a component.
    // data would most likely come from State.
    let btns = colors.map( (color, i) => {
        return(
            <Link key={ i } to={`/results/${ color }`}>
                <button>{ color }</button>
            </Link>
        )
    })
    return(
        <div>
            <h1>Please pick a color to view cars</h1>
            { btns }
            
        </div>
    )
}