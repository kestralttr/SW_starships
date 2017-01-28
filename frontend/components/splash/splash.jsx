import React from 'react';
import {Link, withRouter} from 'react-router';

class Splash extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.removeShip();
  }

  handleClick(idx) {
    return e => {
      this.props.requestShip(idx);
      this.props.router.push("/shipdetail");
    };
  }

  render() {
    const blueText = {
      color: 'blue'
    };

    return(
      <div>
        <div id="left-panel"></div>
        <div id="right-panel"></div>
        <ul id="starship-list">
          <li className="starship-list-item" onClick={this.handleClick(13)}>TIE Advanced X1</li>
          <li className="starship-list-item" style={{backgroundImage: "url('/assets/star_destroyer.png')"}} onClick={this.handleClick(3)}></li>
          <li className="starship-list-item" style={{backgroundImage: "url('/assets/millennium_falcon.png')"}} onClick={this.handleClick(10)}></li>
          <li className="starship-list-item" style={{backgroundImage: "url('/assets/x-wing.png')"}} onClick={this.handleClick(12)}></li>
          <li className="starship-list-item" style={{backgroundImage: "url('/assets/y-wing.png')"}} onClick={this.handleClick(11)}></li>
          <li className="starship-list-item" onClick={this.handleClick(28)}>A-Wing</li>
          <li className="starship-list-item" onClick={this.handleClick(29)}>B-Wing</li>
          <li className="starship-list-item" onClick={this.handleClick(22)}>Imperial Shuttle</li>
          <li className="starship-list-item" onClick={this.handleClick(23)}>Nebulon B Frigate</li>
        </ul>
      </div>
    );
  }

}

export default withRouter(Splash);
