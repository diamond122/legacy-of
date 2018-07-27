import React, { Component } from 'react'
import GoogleMap from 'google-map-react'

const key = 'AIzaSyCuHLfANHztaboVxc1L8OV9MIKG8sMjDDc'

class Map extends Component {

  static defaultProps = {
    center: {
      lat: 49.27,
      lng: -123.08
    },
    zoom: 11,
  }

  render() {
    return (
      <div className='container'
       style={{ height: '50vh', width: '70%' }}>
        <GoogleMap
          bootstrapURLKeys={{ key: key }}
          center={this.props.center}
          defaultZoom={this.props.zoom}
        />
      </div>
    )
  }
}

export default Map;