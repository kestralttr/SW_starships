import React from 'react';
import {Link, withRouter} from 'react-router';

class Splash extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    return e => {
      console.log(this.props.requestShip(9));
      this.props.requestShip(9);

    };
  }

  render() {
    const blueText = {
      color: 'blue'
    };

    return(
      <div>
        <ul id="starship-list">
          <li className="starship-list-item" onClick={this.handleClick()}>Object 1</li>
          <li className="starship-list-item">Object 2</li>
          <li className="starship-list-item">Object 3</li>
          <li className="starship-list-item">Object 4</li>
          <li className="starship-list-item">Object 5</li>
          <li className="starship-list-item">Object 6</li>
          <li className="starship-list-item">Object 7</li>
          <li className="starship-list-item">Object 8</li>
          <li className="starship-list-item">Object 9</li>
        </ul>
      </div>
    );
  }

}

export default withRouter(Splash);
