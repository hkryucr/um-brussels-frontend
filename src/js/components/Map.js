import {fromJS} from 'immutable';
import {json as requestJson} from 'd3-request';
import React from 'react';
import ReactMapGL from 'react-map-gl';

const MAPBOX_TOKEN = 'pk.eyJ1IjoiZWNiaGVucnkiLCJhIjoiY2pwaGdwNWJlMDNlMTN3bnZlb2ZxdW5zcyJ9.RDXwbznh_ifodUyQPWw5fQ';

class Map extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // mapStyle: defaultMapStyle,
      year: 2015,
      data: null,
      viewport: {
        latitude: 50.85,
        longitude: 4.35,
        zoom: 11,
        bearing: 0,
        pitch: 0,
        width: window.innerWidth,
        height: window.innerHeight
      }
    };
  }

  // componentDidMount() {
  //   requestJson('d/Metal.json', (error, response) => {
  //     if (!error) {
  //       this._loadData(response);
  //     }
  //   });
  // }

  // _loadData = data => {
  //   const mapStyle = defaultMapStyle
  //     // Add geojson source to map
  //     .setIn(['sources', 'incomeByState'], fromJS({type: 'geojson', data}))
  //     // Add point layer to map
  //     .set('layers', defaultMapStyle.get('layers').push(dataLayer));

  //   this.setState({data, mapStyle});
  // };

  render() {
    const {viewport} = this.state;

    return (
      <ReactMapGL
        {...viewport}
        mapStyle="mapbox://styles/mapbox/dark-v9"
        onViewportChange={v => this.setState({viewport: v})}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      />
    );
  }
}

export default Map;