import React from 'react';
import d3 from 'd3';
import ReactFauxDOM from 'react-faux-dom';
import {Link, withRouter} from 'react-router';

class ShipDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.renderMGLT = this.renderMGLT.bind(this);
    this.renderCost = this.renderCost.bind(this);
    this.renderName = this.renderName.bind(this);
    this.renderClass = this.renderClass.bind(this);
    this.renderMGLTGraph = this.renderMGLTGraph.bind(this);
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

  renderAnimatedMGLT(mglt) {
    if(mglt) {
      return(
        <svg width="200" height="30">
        <rect x="0" y="0" width="0" height="30" fill="black">
          <animate attributeName="width" from="0" to={`${parseInt(mglt)*2}`} begin="0.5s" dur="1s" fill="freeze"/>
        </rect>
        </svg>
      )
    }
  }

  render() {
    return(
      <div>
        <div id="left-panel"></div>
        <div id="right-panel"></div>
        <div id="top-panel"></div>
        <div id="bottom-panel"></div>
        <div id="ship-detail-container">
          <div id="ship-info-container">
            <h1>{this.renderName()}</h1>
            <h2>{this.renderClass()}</h2>
          </div><br></br>
          <div id="ship-speed-container">
            <p>MGLT: {this.renderMGLT()}</p>
              {this.renderAnimatedMGLT(this.renderMGLT())}
          </div>
          <div id="ship-cost-container">
            <p>Cost: {this.renderCost()}</p>
          </div>
          <div id="MGLT-graph"></div>
        </div>
      </div>
    );
  }

}

export default withRouter(ShipDetail);
