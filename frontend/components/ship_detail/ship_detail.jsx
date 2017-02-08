import React from 'react';
import {Link, withRouter} from 'react-router';

class ShipDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.renderMGLT = this.renderMGLT.bind(this);
    this.renderAtmo = this.renderAtmo.bind(this);
    this.renderCost = this.renderCost.bind(this);
    this.renderName = this.renderName.bind(this);
    this.renderClass = this.renderClass.bind(this);
    this.renderAnimatedMGLTBar = this.renderAnimatedMGLTBar.bind(this);
    this.renderAnimatedAtmoBar = this.renderAnimatedAtmoBar.bind(this);
    this.renderLength = this.renderLength.bind(this);
    this.returnToSplash = this.returnToSplash.bind(this);
    this.renderHyperspaceRating = this.renderHyperspaceRating.bind(this);
    this.renderHyperspaceRatingText = this.renderHyperspaceRatingText.bind(this);
    this.renderCrew = this.renderCrew.bind(this);
    this.renderCrewImage = this.renderCrewImage.bind(this);
  }

  componentWillReceiveProps(newProps) {

  }

  renderMGLT() {
    if (this.props.shipDetail) {
      return(
        this.props.shipDetail.MGLT
      );
    }
  }

  renderAtmo() {
    if (this.props.shipDetail) {
      return(
        this.props.shipDetail.max_atmosphering_speed
      );
    }
  }

  renderCost() {
    if (this.props.shipDetail) {
      return(
        this.props.shipDetail.cost_in_credits
      );
    }
  }

  renderName() {
    if (this.props.shipDetail) {
      let name = this.props.shipDetail.name;
      let result = [];
      name.split(" ").forEach(function(word){
        result.push(word[0].toUpperCase(0).concat(word.slice(1)));
      });
      return(
        result.join(" ")
      );
    }
  }

  renderLength() {
    if (this.props.shipDetail) {
      return(
        this.props.shipDetail.length
      )
    }
  }

  renderClass() {
    if (this.props.shipDetail) {
      let starshipClass = this.props.shipDetail.starship_class;
      let result = [];
      starshipClass.split(" ").forEach(function(word){
        result.push(word[0].toUpperCase(0).concat(word.slice(1)));
      });
      return(
        result.join(" ")
      );
    }
  }

  renderAnimatedMGLTBar(mglt) {
    if(mglt) {
      return(
        <svg width="200" height="30">
          <rect x="0" y="0" width="0" height="30" fill="red">
            <animate attributeName="width" from="0" to={`${parseInt(mglt)*2}`} begin="0.5s" dur="1s" fill="freeze"/>
          </rect>
        </svg>
      )
    }
  }

  renderAnimatedAtmoBar(atmo) {
    if(atmo) {
      return(
        <svg width="200" height="30">
          <rect x="0" y="0" width="0" height="30" fill="blue">
            <animate attributeName="width" from="0" to={`${parseInt(atmo)/6}`} begin="1s" dur="1s" fill="freeze"/>
          </rect>
        </svg>
      )
    }
  }

  renderAnimatedLengthBar(length) {
    if(length) {
      let pureLength = length.replace(",","");
      if(pureLength > 600) {
        pureLength = pureLength = 600;
      }
      if(pureLength < 300) {
        pureLength = pureLength * 3;
      }
      return(
        <svg width="600" height="20">
          <rect x="0" y="0" width="0" height="20" fill="grey">
            <animate attributeName="width" from="0" to={pureLength} begin="0s" dur="2.5s" fill="freeze"/>
          </rect>
          <rect x="150" y="0" width="450" height="5" fill="black"/>
          <rect x="300" y="0" width="300" height="10" fill="black"/>
          <rect x="450" y="0" width="150" height="15" fill="black"/>
        </svg>
      )
    }
  }

  returnToSplash() {
    return(e) => {
      this.props.router.replace("/");
    }
  }

  renderHyperspaceRating() {
    if (this.props.shipDetail) {
      return(
        this.props.shipDetail.hyperdrive_rating
      );
    }
  }

  renderCrew() {
    if (this.props.shipDetail) {
      return(
        this.props.shipDetail.crew
      );
    }
  }

  renderHyperspaceRatingText(rating) {
    if(rating) {
      return(
        <div>
          <p id="hyperspace-rating">{rating}</p>
        </div>
      )
    };
  }

  renderCrewImage(crew) {
    if(crew) {
      if(parseInt(crew) === 1) {
        return(
          <img id="ship-crew-image" src="https://res.cloudinary.com/dzo2s4ovl/image/upload/v1486589968/crew_icon_one_otlzzo.png" />
        )
      }
      if(parseInt(crew) === 2) {
        return(
          <img id="ship-crew-image" src="https://res.cloudinary.com/dzo2s4ovl/image/upload/v1486590858/crew_icon_two_snxtw7.png" />
        )
      }
      if(parseInt(crew) >= 3) {
        return(
          <img id="ship-crew-image" src="https://res.cloudinary.com/dzo2s4ovl/image/upload/v1486590071/crew_icon_three_plus_qky0mg.png" />
        )
      }
    }
  }

  render() {
    return(
      <div id="ship-detail-master">
        <div id="left-panel" style={{backgroundImage: "url('https://res.cloudinary.com/dzo2s4ovl/image/upload/v1486158451/left_laced_shadow_vd6jj7.jpg')"}}></div>
        <div id="right-panel" style={{backgroundImage: "url('https://res.cloudinary.com/dzo2s4ovl/image/upload/v1486158656/right_laced_shadow_x6wiak.jpg')"}} ></div>
        <div id="top-panel" style={{backgroundImage: "url('https://res.cloudinary.com/dzo2s4ovl/image/upload/v1486158769/top_stitches_embossed_kafoia.jpg')"}}></div>
        <div id="bottom-panel" style={{backgroundImage: "url('https://res.cloudinary.com/dzo2s4ovl/image/upload/v1486158808/bottom_laced_shadow_lm0t1n.jpg')"}}></div>
        <img id="home-button" onClick={this.returnToSplash()}></img>
        <div id="ship-detail-scanlines" style={{backgroundImage: "url('https://res.cloudinary.com/dzo2s4ovl/image/upload/v1486159119/scanlines4_faxmf0.png')"}}></div>
          <div id="ship-detail-container">
            <div id="ship-info-container">
              <h1>Ship Name: {this.renderName()}</h1>
              <h2>Ship Class: {this.renderClass()}</h2>
            </div><br></br>
            <div id="ship-speed-container">
              <p>MGLT: {this.renderMGLT()}</p>
                {this.renderAnimatedMGLTBar(this.renderMGLT())}
              <p>Atmospheric Speed: {this.renderAtmo()}</p>
                {this.renderAnimatedAtmoBar(this.renderAtmo())}
            </div>
            <div id="ship-cost-container">
              <p>Cost: {this.renderCost()}</p>
            </div>
            <div id="ship-length-container">
              <p>Length: {this.renderLength()}</p>
                {this.renderAnimatedLengthBar(this.renderLength())}
            </div>
            <div id="ship-hyperspace-container">
              {this.renderHyperspaceRatingText(this.renderHyperspaceRating())}
              <p id="hyperspace-rating-label">Hyperdrive Rating</p>
              <img src="https://res.cloudinary.com/dzo2s4ovl/image/upload/v1486425171/hyperspace4b_ocggqa.jpg" />
            </div>
            <div id="ship-crew-container">
              {this.renderCrewImage(this.renderCrew())}
              <p>Crew Number</p>
            </div>
          </div>
      </div>
    );
  }

}

export default withRouter(ShipDetail);
