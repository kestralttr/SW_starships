import React from 'react';
import d3 from 'd3';
import {Link, withRouter} from 'react-router';

class ShipDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.renderMGLT = this.renderMGLT.bind(this);
    this.renderCost = this.renderCost.bind(this);
    this.renderName = this.renderName.bind(this);
    this.renderClass = this.renderClass.bind(this);
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

  render() {
    return(
      <div>
        <h1>{this.renderName()}</h1>
        <h2>{this.renderClass()}</h2>
        <p>Speed: {this.renderMGLT()}</p>
        <p>Cost: {this.renderCost()}</p>
        <svg>
        <circle cx="5" cy="5" r="5" backgroundColor="red"></circle>
        </svg>
      </div>
    );
  }

}

export default withRouter(ShipDetail);
