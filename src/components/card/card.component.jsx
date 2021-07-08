// import React from 'react';

// import './card.styles.css';

// export const Card = (props) => (
    
//     <div className='card-container'>
//         <p>{props.jokes}</p>
//         <p>{props.answer}</p>
//         <button onClick={() => props.handleClick(props)}>Click For Answer</button>
//         <p>{props.punchline}</p>
//     </div>
// )
import React, { Component } from 'react';
import './card.styles.css'

class Card extends Component {
  constructor(props){
    super()
    this.state ={
      props: props,
    }
  }

  render(){
    return(
      <div className="card">
        <p>{this.state.props.joke}</p>
        <button onClick={() => this.setState({isAnswer: !this.state.isAnswer})} className="cardBtn">
          {"ANSWER"}
        </button>
        <p
          style={{
            display: this.state.isAnswer ? "block" : "none",
            color: "#d4d7d8",
            fontStyle: "italic",
          }}
        >
          {this.state.props.answer}
        </p>
      </div>
    )
  }
}
export default Card;