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
        <ul id="starship-list">
          <li className="starship-list-item" style={{backgroundImage: "url('/assets/death_star.png')"}} onClick={this.handleClick(9)}>Death Star</li>
          <li className="starship-list-item" onClick={this.handleClick(3)}>Star Destroyer</li>
          <li className="starship-list-item" onClick={this.handleClick(10)}>Millennium Falcon</li>
          <li className="starship-list-item" onClick={this.handleClick(12)}>X-Wing</li>
          <li className="starship-list-item" onClick={this.handleClick(11)}>Y-Wing</li>
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
