// import React from 'react';

// import  { Card } from '../card/card.component';

// import './card-list.styles.css';

// export const CardList = props => (
//     <div className='card-list'>
//         {props.jokes.map(jokes => (
//         <Card key={jokes.id} jokes={jokes.setup} />
//       ))}
//     </div>
// );
import React from 'react';

import  { Card } from '../card/card.component';

import './card-list.styles.css';

export const CardList = props => (
 <div className='card-list'>
    {props.jokes.map(joke => (
      <Card key={joke.id} jokes={joke.setup} punchline={joke.punchline} showAnswer={props.showAnswer} handleClick={props.handleClick}/>
        ))}
  </div>
);
