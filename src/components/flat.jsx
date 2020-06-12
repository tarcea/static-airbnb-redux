import React, { Component } from 'react';


class Flat extends Component {
  render() {
    const style = {
      backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('${this.props.flat.imageUrl}')`
    };
    return (
      <div className="cards">
        <div className="flat card-category" style={style}>
          <h2>{this.props.flat.name}</h2>
          <h6>{this.props.flat.price} {this.props.flat.priceCurrency}</h6>
        </div>
      </div>
    );
  }
}

export default Flat
