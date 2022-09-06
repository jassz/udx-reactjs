// MyGoogleMaps.js
import React, { Component } from 'react';

import GoogleMapReact from 'google-map-react';

import styled from 'styled-components';
import '../App.css'
import Marker from './Marker';
import AutoComplete from './Autocomplete';

const Wrapper = styled.main`
  width: 100%;
  height: 100%;
`;


class MyGoogleMap extends Component {

    
    state = {
        mapApiLoaded: false,
        mapInstance: null,
        mapApi: null,
        geoCoder: '',
        places: [],
        center: [],
        zoom: 11,
        address: '',
        draggable: true,
        lat: null,
        lng: null
    };

    componentWillMount() {
        console.log(1);
        this.setCurrentLocation();
    }


    onMarkerInteraction = (childKey, childProps, mouse) => {
        this.setState({
            draggable: false,
            lat: mouse.lat,
            lng: mouse.lng
        });
    }
    onMarkerInteractionMouseUp = (childKey, childProps, mouse) => {
        this.setState({ draggable: true });
        this._generateAddress();
    }

    _onChange = ({ center, zoom }) => {
        console.log('center');
        this.setState({
            center: center,
            zoom: zoom,
        });

    }

    _onClick = (value) => {
        this.setState({
            lat: value.lat,
            lng: value.lng
        });
        this._generateAddress()
    }

    apiHasLoaded = (map, maps) => {
        this.setState({
            mapApiLoaded: true,
            mapInstance: map,
            mapApi: maps,
        });

        this._generateAddress();
    };

    addPlace = (place) => {
        // console.log('place', place);
        this.setState({
            places: [place],
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng()
        });
        this._generateAddress()
    };
    
    _generateAddress() {
        const {
            mapApi
        } = this.state;
        const geocoder = new mapApi.Geocoder;
        console.log(this.state.places);
        geocoder.geocode({ 'location': { lat: this.state.lat, lng: this.state.lng } }, (results, status) => {
            // console.log('result', results);
            if (status === 'OK') {
                if (results[0]) {
                    this.setState({ address: results[0].formatted_address });
                } else {
                    window.alert('No results found');
                }
            } else {
                window.alert('Geocoder failed due to: ' + status);
            }

        });
    }

    // Get Current Location Coordinates
    setCurrentLocation() {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                // console.log('position', position);
                this.setState({
                    center: [position.coords.latitude, position.coords.longitude],
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                });
            });
        }
    }

    render() {
        const {
            places, mapApiLoaded, mapInstance, mapApi,
        } = this.state;

        return (
            <Wrapper>
                {mapApiLoaded && (
                    // <div>
                        <AutoComplete className='py-0' map={mapInstance} mapApi={mapApi} addplace={this.addPlace} />
                    // </div>
                )}
                
                <GoogleMapReact
                className='test'
                    center={this.state.center}
                    zoom={this.state.zoom}
                    // draggable={this.state.draggable}
                    onChange={this._onChange}
                    onChildMouseDown={this.onMarkerInteraction}
                    onChildMouseUp={this.onMarkerInteractionMouseUp}
                    onChildMouseMove={this.onMarkerInteraction}
                    onChildClick={() => console.log('child click')}
                    onClick={this._onClick}
                    bootstrapURLKeys={{
                        key: 'AIzaSyBucdbx0roj9sAlyXqsyy8Hhf9HHMHazcI',
                        libraries: ['places', 'geometry'],
                    }}
                    yesIWantToUseGoogleMapApiInternals
                    onGoogleApiLoaded={({ map, maps }) => this.apiHasLoaded(map, maps)}
                >

                    <Marker
                        text={this.state.address}
                        lat={this.state.lat}
                        lng={this.state.lng}
                    />


                </GoogleMapReact>

                <div className="info-wrapper">
                    <div className="map-details">Latitude: <span>{this.state.lat}</span>, Longitude: <span>{this.state.lng}</span></div>
                    <div className="map-details">Zoom: <span>{this.state.zoom}</span></div>
                    <div className="map-details">Address: <span>{this.state.address}</span></div>
                </div>
            </Wrapper >
        );
    }
}

export default MyGoogleMap;