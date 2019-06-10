import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  constructor(props) {
    super(props)
  this.state = {
      center: {
        lat: '',
        lng: '',
      },
    zoom: 15
  }
  // this.getMyLocation = this.getMyLocation.bind(this)


  }

   componentDidMount() {
     this.getMyLocation()
     console.log(this.state.center)
}


   getMyLocation = ()=> {
    const location =  window.navigator && window.navigator.geolocation
    
     if (location) {
       location.getCurrentPosition((position) => {
        this.setState({
            center: { lat: position.coords.latitude, lng:  position.coords.longitude}
        })

      }, (error) => {
        this.setState({ latitude: 'err-latitude', longitude: 'err-longitude' })
      })
    }

  }
  
   render() {

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBlEoNanUayf0fOkwj0qeRs-q6woFZtAoI'}}
          defaultCenter={ this.state.center}
          defaultZoom={this.state.zoom}
        
        >
          <AnyReactComponent
            lat={this.state.center.lat}
            lng={this.state.center.lng}
            text="THIS PLACE!"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;
