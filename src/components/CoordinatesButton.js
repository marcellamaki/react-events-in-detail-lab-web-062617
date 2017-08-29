// Code CoordinatesButton Component Here
import React, {Component} from 'react';

class CoordinatesButton extends Component {

  handleClick = (event) => {
    this.props.onReceiveCoordinates([event.pageX, event.pageY])
  // console.log(coordinates)
}

render() {
  return (
      <div>
        <button onClick={this.handleClick}>Button</button>
      </div>

    );
  }
};

export default CoordinatesButton;
