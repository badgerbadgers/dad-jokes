import React, { Component } from 'react';
import './card.styles.css';

class Card extends Component {
  constructor(props) {
    super();
    this.state = {
      props: props,
      isAnswer: false
    };
  }

 render() {
   return(
     <div className="Card">
       <p>{this.state.props.question}</p>
       <button onClick={()=> {
         this.setState({isAnswer: !this.state.isAnswer})
      }}>Answer</button>
       <p style= {{
         color: "#fff",
         display: this.state.isAnswer ? "block" : "none"
       }}>{this.state.props.answer}</p>
     </div>
   )
 }
}

export default Card;