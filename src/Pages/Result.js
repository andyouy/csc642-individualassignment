import React, {useState, useEffect} from "react";
import {Form, Row, Col, Container, FloatingLabel} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

import "../App.css"

function Result() {
    const lastName = JSON.parse(sessionStorage.getItem("lastName"));
    const firstName = JSON.parse(sessionStorage.getItem("firstName"));
    const preferredTitle = JSON.parse(sessionStorage.getItem("preferredTitle"));
    const heightFeet = JSON.parse(sessionStorage.getItem("heightFeet"));
    const heightInches = JSON.parse(sessionStorage.getItem("heightInches"));
    const phone = JSON.parse(sessionStorage.getItem("phone"));
    const address = JSON.parse(sessionStorage.getItem("address"));
    const state = JSON.parse(sessionStorage.getItem("state"));
    const zipCode = JSON.parse(sessionStorage.getItem("zipCode"));
    const budget = JSON.parse(sessionStorage.getItem("budget"));
    const email = JSON.parse(sessionStorage.getItem("email"));

    var checkedArray = JSON.parse(sessionStorage.getItem("checkedItems"));

    //console.log(checkedArray);
    const [map, setMapInfo] = useState({})

    const containerStyle = {
        width: '600px',
        height: '400px',
      };

    useEffect(() => {
        let fullAddress = address + " " + state + " " + zipCode;
        axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
            params: {
                address: fullAddress,
                key: 'AIzaSyAM0R49HN0FF59CQj-rUfX_BaIUmVXsse8'
            }
        })
        .then((results) => {
            //log result data to figure out where to grab data for map location

            //set map info to the latitude and longitude of searched addressed
            setMapInfo(results.data.results[0].geometry.location);
            console.log(map)
        })
    }, [])
    
    return(
        <div className="formBody">
        <div className="formContainer">
            <h1 className="divHeader">Results Verification Page - Andy Ouyang</h1>
            <hr/>
            <Container fluid="md" className="inputContainer">
                <Form>
                    <Row className="rowForm">
                    <p>Personal Information </p>
                        <Col>
                            <Form.Floating>
                                <Form.Control 
                                type="text" 
                                value={lastName}
                                disabled
                                />
                                <label htmlFor="floatingLastName">Last Name*</label>
                            </Form.Floating>
                            
                        </Col>
                        <Col>
                            <Form.Floating>
                                <Form.Control 
                                type="text" 
                                value={firstName}
                                placeholder="First Name*"
                                disabled
                                />
                                <label htmlFor="floatingFirstName">First Name*</label>
                            </Form.Floating>
                        </Col>
                        <Col>
                        <FloatingLabel>
                        <Form.Control 
                                type="text" 
                                value={preferredTitle}
                                placeholder="First Name*"
                                disabled
                                />
                                <label htmlFor="floatingFirstName">Title</label>
                        </FloatingLabel>
                        </Col>
                    </Row>

                    <Row className="rowForm">
                        <Col>
                        <FloatingLabel label="Feet">
                        <Form.Control 
                                type="text" 
                                value={heightFeet}
                                placeholder="First Name*"
                                disabled
                                />
                                <label htmlFor="floatingFirstName">Feet</label>
                        </FloatingLabel>
                        </Col>
                        <Col>
                        <FloatingLabel>
                        <Form.Control
                                type="text" 
                                value={heightInches}
                                placeholder="First Name*"
                                disabled
                                />
                                <label htmlFor="floatingFirstName">Inches*</label>
                        </FloatingLabel>
                        </Col>
                    </Row>
                    <Row className="rowForm">
                        <Col>
                        <FloatingLabel>
                            <Form.Control 
                                    type="text" 
                                    value={phone}
                                    placeholder="First Name*"
                                    disabled
                                    />
                                    <label htmlFor="floatingFirstName">Phone Number</label>
                        </FloatingLabel>
                        </Col>
                    </Row>
                    <Row className="rowForm">
                        <Col>
                            <Form.Floating>
                                <Form.Control 
                                type="text" 
                                value={address}
                                placeholder="Address*"
                                disabled
                                />
                                <label htmlFor="floatingAddress">Address*</label>
                            </Form.Floating>
                        </Col>
                        <Col>
                        <FloatingLabel>
                            <Form.Control 
                                    type="text" 
                                    value={state}
                                    placeholder="First Name*"
                                    disabled
                                    />
                                    <label htmlFor="floatingFirstName">State*</label>
                        </FloatingLabel>
                        </Col>
                        <Col>
                        <FloatingLabel>
                            <Form.Control 
                                    type="text" 
                                    value={zipCode}
                                    placeholder="First Name*"
                                    disabled
                                    />
                                    <label htmlFor="floatingFirstName">Zip Code*</label>
                        </FloatingLabel>
                        </Col>
                    </Row>
                    <hr/>
                    <Row className="rowForm">
                        <Col>
                        <p className="services">Services Selected</p>
                            {checkedArray.map((val,) => {
                                return(
                                    <li className="services">
                                        {val}
                                    </li>
                                )
                            })}
                        </Col>
                        <Col>
                            <p>Selected budget</p>
                        <FloatingLabel>
                            <Form.Control 
                                    type="text" 
                                    value={budget}
                                    placeholder="First Name*"
                                    disabled
                                    />
                                    <label htmlFor="floatingFirstName">Budget</label>
                        </FloatingLabel>
                            <p className="email" >Your Email</p>
                            <Form.Floating>
                                <Form.Control 
                                type="text" 
                                value={email}
                                placeholder="Email*"
                                disabled
                                />
                                <label htmlFor="floatingEmail">Email (ex. test@mail.com)</label>
                            </Form.Floating>
                        </Col>
                    </Row>
                    <Row className="googleMap">
                        <LoadScript
                            googleMapsApiKey="AIzaSyAM0R49HN0FF59CQj-rUfX_BaIUmVXsse8"
                            >
                            <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={map}
                            zoom={10}
                            >
                            <Marker 
                            icon={{
                                path:
                                "M8 12l-4.7023 2.4721.898-5.236L.3916 5.5279l5.2574-.764L8 0l2.3511 4.764 5.2574.7639-3.8043 3.7082.898 5.236z",
                                fillColor: "red",
                                fillOpacity: 0.9,
                                scale: 2,
                                strokeColor: "red",
                                strokeWeight: 2
                            }}
                            animation = 'BOUNCE'
                            key='marker' 
                            position={map} 
                            />
                            </GoogleMap>
                        </LoadScript>
                    </Row>
                </Form>
            </Container>
        </div>         
    </div>

    )
}

export default Result;