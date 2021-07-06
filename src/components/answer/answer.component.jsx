import React from 'react';

import  { Card } from '../card/card.component';

import './answer.styles.css';

export const Answer = props => (
    <div className='answer-list'>
        {props.jokes.map(jokes => (
        <Card key={jokes.id} answer={jokes.punchline}/>
      ))}
    </div>
);