// Code DelayedButton Component Here
import React, { Component } from 'react';

class DelayedButton extends Component {


    onDelayedClick = (event) => {
      // console.log(event.target)
      event.persist()
      setTimeout(() => {this.props.onDelayedClick(event)}, this.props.delay)
    }


    render() {
      return(
        <div>
          <button onClick={this.onDelayedClick}>Delay Button</button>
        </div>
      );
    }
};

export default DelayedButton;
