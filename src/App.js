import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';


import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      jokes: [],
      showAnswer: false,
    };
    this.handleClick = this.handleClick.bind(this)
    // this.onClick = this.onClick.bind(this);
  }

componentDidMount() {
  fetch('https://official-joke-api.appspot.com/random_ten')
    // .then((response) => response.json())
    // .then((response) => this.setState({ results: response.results }))
    .then(response => response.json())
    .then(response => this.setState({ jokes: response}));
  }

  handleClick(props) {
    this.setState(prevState => {
      const updatedJokes = prevState.jokes.map(joke => {
        if (joke.id === props.id) {
          return { 
            ...joke,
            showAnswer: !joke.showAnswer
          }
        }
        return joke;
      })
      console.log(updatedJokes)
      console.log(prevState)
      return {
        jokes: updatedJokes, 
      }
    })
  }

render() {
  return(
    <div className='App'>
      <h1> Dad Jokes! </h1>
      <CardList jokes={this.state.jokes} handleClick={this.handleClick} showAnswer={this.state.showAnswer} />

    </div>
  )
  }
}

export default App;
