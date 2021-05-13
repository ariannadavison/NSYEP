import React, {Component} from 'react';
import Picture from '../../Images/port_of_albany_1.jpg';


class Circle extends Component {
  state = {
  };
  render() {
    return(
      <div>
        <img src={Picture} alt="boat" /> 
      </div>
    );
  }
}

export default Circle;
