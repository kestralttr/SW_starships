import React from 'react';
import {Link, withRouter} from 'react-router';

class Splash extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.liStyle = this.liStyle.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  liStyle() {
    color: 'blue';
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

    const redText = {
      color: 'red'
    };

    const greenText = {
      color: 'green'
    };

    const purpleText = {
      color: 'purple'
    };

    const orangeText = {
      color: 'orange'
    };

    return(
      <div>
        <ul>
          <li style={blueText} onClick={this.handleClick()}>Object 1</li>
          <li style={redText}>Object 2</li>
          <li style={greenText}>Object 3</li>
          <li style={purpleText}>Object 4</li>
          <li style={orangeText}>Object 5</li>
        </ul>
      </div>
    );
  }

}

export default withRouter(Splash);
