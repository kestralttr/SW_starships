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
      <div id="splash-master" style={{backgroundImage: "url('/assets/grid2.jpg')"}}>
        <div id="left-panel" style={{backgroundImage: "url('/assets/left_laced_shadow.jpg')"}}></div>
        <div id="right-panel" style={{backgroundImage: "url('/assets/right_laced_shadow.jpg')"}} ></div>
        <div id="top-panel" style={{backgroundImage: "url('/assets/top_stitches_embossed.jpg')"}}></div>
        <div id="bottom-panel" style={{backgroundImage: "url('/assets/bottom_laced_shadow.jpg')"}}></div>
        <ul id="starship-list">
          <li className="starship-list-item" style={{backgroundImage: "url('/assets/tie.png')"}} onClick={this.handleClick(13)}></li>
          <li className="starship-list-item" style={{backgroundImage: "url('/assets/star_destroyer.png')"}} onClick={this.handleClick(3)}></li>
          <li className="starship-list-item" style={{backgroundImage: "url('/assets/millennium_falcon.png')"}} onClick={this.handleClick(10)}></li>
          <li className="starship-list-item" style={{backgroundImage: "url('/assets/x-wing.png')"}} onClick={this.handleClick(12)}></li>
          <li className="starship-list-item" style={{backgroundImage: "url('/assets/y-wing.png')"}} onClick={this.handleClick(11)}></li>
          <li className="starship-list-item" style={{backgroundImage: "url('/assets/a-wing.png')"}} onClick={this.handleClick(28)}></li>
          <li className="starship-list-item" style={{backgroundImage: "url('/assets/b-wing.png')"}} onClick={this.handleClick(29)}></li>
          <li className="starship-list-item" style={{backgroundImage: "url('/assets/shuttle.png')"}} onClick={this.handleClick(22)}></li>
          <li className="starship-list-item" style={{backgroundImage: "url('/assets/nebulon.png')"}} onClick={this.handleClick(23)}></li>
        </ul>
      </div>
    );
  }

}

export default withRouter(Splash);
