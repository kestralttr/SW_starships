import React from 'react';
import d3 from 'd3';
import ReactFauxDOM from 'react-faux-dom';
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
    this.renderMGLTGraph = this.renderMGLTGraph.bind(this);
    this.renderAnimatedMGLTBar = this.renderAnimatedMGLTBar.bind(this);
    this.renderAnimatedAtmoBar = this.renderAnimatedAtmoBar.bind(this);
    this.renderLength = this.renderLength.bind(this);
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

  renderMGLTGraph(mglt) {
    if (!mglt) {
      mglt = "0";
    }
    let speedContainer = new ReactFauxDOM.Element('svg')
    speedContainer.setAttribute("width", "200");
    speedContainer.setAttribute("height", "50")
    let graphMGLT = new ReactFauxDOM.Element('rect', speedContainer);
    graphMGLT.setAttribute("x", "0");
    graphMGLT.setAttribute("y", "0");
    graphMGLT.setAttribute("width", `${mglt}`);
    graphMGLT.setAttribute("height", "30");
    graphMGLT.setAttribute("fill", "red");
    return(
      graphMGLT.toReact()
    )
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

  render() {
    return(
      <div id="ship-detail-master">
        <div id="left-panel" style={{backgroundImage: "url('/assets/left_laced_shadow.jpg')"}}></div>
        <div id="right-panel" style={{backgroundImage: "url('/assets/right_laced_shadow.jpg')"}} ></div>
        <div id="top-panel" style={{backgroundImage: "url('/assets/top_stitches_embossed.jpg')"}}></div>
        <div id="bottom-panel" style={{backgroundImage: "url('/assets/bottom_laced_shadow.jpg')"}}></div>
        <div id="ship-detail-scanlines" style={{backgroundImage: "url('/assets/scanlines4.png')"}}></div>
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
          </div>
      </div>
    );
  }

}

export default withRouter(ShipDetail);
