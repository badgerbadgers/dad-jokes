import React from 'react';

import './card.styles.css';

export const Card = (props) => (
    
    <div className='card-container'>
        <p>{props.jokes}</p>
        <p>{props.answer}</p>
        <button onClick={() => props.handleClick(props)}>Click For Answer</button>
        <p>{props.punchline}</p>
    </div>
)