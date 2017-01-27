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

  render() {
    return(
      <div>
        <h1>{this.renderName()}</h1>
        <h2>{this.renderClass()}</h2>
        <p>Speed: {this.renderMGLT()}</p>
        <p>Cost: {this.renderCost()}</p>
        <svg width="200" height="50">
          {this.renderMGLTGraph(this.renderMGLT())}
        <rect x="0" y="40" width="130" height="5" fill="black" />
        </svg>
        <div id="MGLT-graph"></div>
        <svg>
        <circle cx="5" cy="5" r="5"></circle>
        </svg>

      </div>
    );
  }

}

export default withRouter(ShipDetail);
