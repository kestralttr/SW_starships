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
    let graphP = new ReactFauxDOM.Element('div')
    graphP.textContent = `${mglt}`;
    graphP.style.setProperty("display", "inline-block");
    graphP.setAttribute("width", "10");
    graphP.setAttribute("height", "10");
    graphP.style.setProperty("background-color", "red");
    return(
      graphP.toReact()
    )
  }

  render() {
    return(
      <div>
        <h1>{this.renderName()}</h1>
        <h2>{this.renderClass()}</h2>
        <p>Speed: {this.renderMGLT()}</p>
        <p>Cost: {this.renderCost()}</p>
        {this.renderMGLTGraph(this.renderMGLT())}
        <div id="MGLT-graph"></div>
        <svg>
        <circle cx="5" cy="5" r="5"></circle>
        </svg>

      </div>
    );
  }

}

export default withRouter(ShipDetail);
