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
      <div id="splash-master">
        <div id="left-panel" style={{backgroundImage: "url('https://res.cloudinary.com/dzo2s4ovl/image/upload/v1486158451/left_laced_shadow_vd6jj7.jpg')"}}></div>
        <div id="right-panel" style={{backgroundImage: "url('https://res.cloudinary.com/dzo2s4ovl/image/upload/v1486158656/right_laced_shadow_x6wiak.jpg')"}} ></div>
        <div id="top-panel" style={{backgroundImage: "url('https://res.cloudinary.com/dzo2s4ovl/image/upload/v1486158769/top_stitches_embossed_kafoia.jpg')"}}></div>
        <div id="bottom-panel" style={{backgroundImage: "url('https://res.cloudinary.com/dzo2s4ovl/image/upload/v1486158808/bottom_laced_shadow_lm0t1n.jpg')"}}></div>
        <img id="home-button"></img>
        <div id="splash-scanlines" style={{backgroundImage: "url('https://res.cloudinary.com/dzo2s4ovl/image/upload/v1486159119/scanlines4_faxmf0.png')"}}></div>
          <ul id="starship-list">
            <li className="starship-list-item" style={{backgroundImage: "url('https://res.cloudinary.com/dzo2s4ovl/image/upload/v1486159211/tie_kpjni2.png')"}} onClick={this.handleClick(13)}></li>
            <li className="starship-list-item" style={{backgroundImage: "url('https://res.cloudinary.com/dzo2s4ovl/image/upload/v1486159906/star_destroyer_xgmgt8.png')"}} onClick={this.handleClick(3)}></li>
            <li className="starship-list-item" style={{backgroundImage: "url('https://res.cloudinary.com/dzo2s4ovl/image/upload/v1486159948/millennium_falcon_cq1zxt.png')"}} onClick={this.handleClick(10)}></li>
            <li className="starship-list-item" style={{backgroundImage: "url('https://res.cloudinary.com/dzo2s4ovl/image/upload/v1486159976/x-wing_zh5hos.png')"}} onClick={this.handleClick(12)}></li>
            <li className="starship-list-item" style={{backgroundImage: "url('https://res.cloudinary.com/dzo2s4ovl/image/upload/v1486160043/y-wing_ipcavx.png')"}} onClick={this.handleClick(11)}></li>
            <li className="starship-list-item" style={{backgroundImage: "url('https://res.cloudinary.com/dzo2s4ovl/image/upload/v1486160079/a-wing_n5egbm.png')"}} onClick={this.handleClick(28)}></li>
            <li className="starship-list-item" style={{backgroundImage: "url('https://res.cloudinary.com/dzo2s4ovl/image/upload/v1486160107/b-wing_gkqguu.png')"}} onClick={this.handleClick(29)}></li>
            <li className="starship-list-item" style={{backgroundImage: "url('https://res.cloudinary.com/dzo2s4ovl/image/upload/v1486160139/shuttle_hecsgc.png')"}} onClick={this.handleClick(22)}></li>
            <li className="starship-list-item" style={{backgroundImage: "url('https://res.cloudinary.com/dzo2s4ovl/image/upload/v1486160179/nebulon_dbsvqa.png')"}} onClick={this.handleClick(23)}></li>
          </ul>

      </div>
    );
  }

}

export default withRouter(Splash);
