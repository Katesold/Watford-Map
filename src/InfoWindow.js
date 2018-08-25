import React, { Component } from 'react';
import { InfoWindow } from 'react-google-maps';

class InfoWin extends Component {

 
  render () {


    return (
      <div className="infoWindow" tabIndex={0} aria-label="Infowindow" >
        <h3>{place.name}</h3>
        <hr/>
        <p><strong>Address: </strong>{place.location.formattedAddress[0]}</p>
        <p>{place.location.formattedAddress[1]}</p>
        <p>{place.location.formattedAddress[2]}</p>
        <p>{place.location.formattedAddress[3]}</p>
        <p>{place.location.formattedAddress[4]}</p>
        
    </div>
    )
  }
}
 
export default InfoWin;
