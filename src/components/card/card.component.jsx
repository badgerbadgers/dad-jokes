import React from 'react';

import './card.styles.css';

export const Card = (props) => (
    <div className='card-container'>
        <p>{props.jokes.setup}</p>
        <button>hi</button>
    </div>
)