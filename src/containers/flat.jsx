import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Flat extends Component {
  handleClick = () => {
    // redux action
    this.props.selectFlat(this.props.flat);
  }
  render() {
    const style = {
      backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('${this.props.flat.imageUrl}')`
    };
    let classes = "flat card-category";
    if (this.props.flat === this.props.selectedFlat) {
      classes += " selected";
    }

    return (
      <div className="cards">
        <div className={classes} style={style} onClick={this.handleClick}>
          <h2>{this.props.flat.name}</h2>
          <h6>{this.props.flat.price} {this.props.flat.priceCurrency}</h6>
        </div>
      </div>
    );
  }
}

import { selectFlat } from '../actions';

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectFlat: selectFlat },
    dispatch
  );
}

function mapReduxStateToProps(reduxState) {
  return {
    selectedFlat: reduxState.selectedFlat
  };
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(Flat);
