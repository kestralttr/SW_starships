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
        <h1>Hello</h1>
      </div>
    );
  }

}

export default withRouter(Splash);
