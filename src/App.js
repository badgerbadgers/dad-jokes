import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      jokes: []
    };

    // this.onClick = this.onClick.bind(this);
  }

componentDidMount() {
  fetch('https://official-joke-api.appspot.com/random_ten')
    // .then((response) => response.json())
    // .then((response) => this.setState({ results: response.results }))
    .then(response => response.json())
    .then(jokes => this.setState({ jokes: jokes}));
  }

// onClick = (e) => {
//   this.setState({ results: response.results.correct_answer })
// }

render() {
  return(
    <div className='App'>
      <h1> Dad Jokes! </h1>
      <CardList jokes={this.state.jokes}>
      
      </CardList>
    </div>
  )
  }
}
export default App;
