import React, { Component } from 'react';

import Flat from '../components/flat';

class FlatList extends Component {
  // TEMPORARY CODE TO INTEGRATE HTML
  static defaultProps = {
    flats: [{
      "name": "Charm at the Steps of Montmartre",
      "imageUrl": "http://www.gheorghetarcea.com/assets/fantanele1_marked-ae0ac7bf46d8de80cebfa387a3d0d6067684b618b4d1b18bb5ced822db7a2e2b.jpg",
      "price": 164,
      "priceCurrency": "EUR"
    }]
  }

  componentWillMount() {
    // to do: update the redux state tree and update flats
  }

  render() {
    return (
      <div className="flat-list col-sm-7">
        {this.props.flats.map((flat) => <Flat flat={flat} key={flat.name} />)}
      </div>
    );
  }
}

export default FlatList;
