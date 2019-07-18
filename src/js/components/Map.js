import React from 'react';
import ReactMapGL from 'react-map-gl';

const MAPBOX_TOKEN = 'pk.eyJ1IjoiZWNiaGVucnkiLCJhIjoiY2pwaGdwNWJlMDNlMTN3bnZlb2ZxdW5zcyJ9.RDXwbznh_ifodUyQPWw5fQ';

class Map extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 37.785164,
        longitude: -122.41669,
        zoom: 8,
        bearing: 0,
        pitch: 0,
        width: window.innerWidth,
        height: window.innerHeight
      }
    };
  }

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