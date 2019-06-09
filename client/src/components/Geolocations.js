import React from 'react'


class Geolocate extends React.Component {
    constructor(props) {
      super(props)
  
      this.state = {
        latitude: '',
        longitude: '',
      }
  
      this.getMyLocation = this.getMyLocation.bind(this)
    }
    
    async componentDidMount() {
             await this.getMyLocation()
    }
  
    getMyLocation = ()=> {
      const location = window.navigator && window.navigator.geolocation
      
      if (location) {
        location.getCurrentPosition((position) => {
          this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          })
          const newCoord = {lat: this.state.latitude, log:this.state.longitude}
          console.log(newCoord)

        // //   this.props.handleCoordinates(this.state.latitude, this.state.longitude)
        }, (error) => {
          this.setState({ latitude: 'err-latitude', longitude: 'err-longitude' })
        })
      }
  
    }
  
    render() {
      const { latitude, longitude } = this.state
      
      return (
        <div>
          <input type="text" value={latitude} />
          <input type="text" value={longitude} />
        </div>
      )
    }
  }
  

  export default Geolocate