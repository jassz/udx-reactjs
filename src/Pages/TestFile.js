import React, { Component } from 'react';
import { GoogleApiWrapper } from 'google-maps-react';
import MyGoogleMap from '../Components/MyGoogleMap';

// const mapStyles = {
//   width: '34%',
//   height: '93%'
// };
const array = [1, 2, 3, 4, 5]

export class MapContainer extends Component {
    render() {
        return (
            array.map((value) =>
                <li>{value}</li>
            )
            // <div className="main-wrapper">
            //     <MyGoogleMap />
            // </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyA6MQaup9995XIYkPAmF0UQdaBonFfgjko'
})(MapContainer);
