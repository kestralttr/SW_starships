import React from 'react';
import {Link, withRouter} from 'react-router';

class Splash extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <div>
        <ul>
          <li>Object 1</li>
          <li>Object 2</li>
          <li>Object 3</li>
          <li>Object 4</li>
          <li>Object 5</li>
        </ul>
      </div>
    );
  }

}

export default withRouter(Splash);
