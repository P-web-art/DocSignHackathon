// import React, { Component } from 'react';
// import GoogleMapReact from 'google-map-react';
// import logo from '../imgs/treeLogo.png'
// import Geolocate from './Geolocations'

// const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
// class SimpleMap extends Component {
//   constructor(props) {
//     super(props)
//   this.state = {
//     latitude: '',
//     longitude: ''
//   }
//   // this.getMyLocation = this.getMyLocation.bind(this)
//   }


//    static defaultProps = {
//     center: {
//       lat: {this.state.latitude},
//       lng: {this.state.longitude}
//     },
//     zoom: 11
//   };



//   async componentDidMount() {
//     await this.getMyLocation()
// }

//   getMyLocation = ()=> {
//     const location = window.navigator && window.navigator.geolocation
    
//     if (location) {
//       location.getCurrentPosition((position) => {
//         this.setState({
//           latitude: position.coords.latitude,
//           longitude: position.coords.longitude,
//         })
//         const newCoord = {lat: this.state.latitude, log:this.state.longitude}
//         console.log(newCoord)

//       // //   this.props.handleCoordinates(this.state.latitude, this.state.longitude)
//       }, (error) => {
//         this.setState({ latitude: 'err-latitude', longitude: 'err-longitude' })
//       })
//     }

//   }
  
//   render() {
//     return (
//       // Important! Always set the container height explicitly
//       <div style={{ height: '100vh', width: '100%' }}>
//         <GoogleMapReact
//           bootstrapURLKeys={{ key: 'AIzaSyBlEoNanUayf0fOkwj0qeRs-q6woFZtAoI'}}
//           defaultCenter={this.props.center}
//           defaultZoom={this.props.zoom}
        
//         >
//           <AnyReactComponent
//             lat={this.state.latitude}
//             lng={this.state.longitude}
//             text="THIS PLACE!"
//           />
//         </GoogleMapReact>
//         <Geolocate />
//       </div>
//     );
//   }
// }
 
// export default SimpleMap;
