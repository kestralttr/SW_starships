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
      this.props.router.push("/shipdetail");
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
        </ul>
      </div>
    );
  }

}

export default withRouter(Splash);
