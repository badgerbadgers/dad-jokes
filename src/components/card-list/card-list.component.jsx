import React from 'react';

import  Card  from '../card/card.component';

import './card-list.styles.css';

export const CardList = (props) => (
    <div className='card-list'>
        {props.results.map(joke => (
        <Card key={joke.id} question={joke.setup} answer={joke.punchline} />
      ))}
    </div>
);