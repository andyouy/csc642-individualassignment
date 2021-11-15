import React, { useState, useEffect } from "react";
import {Form, Row, Col, Button, Container, FloatingLabel} from "react-bootstrap"
import ReCAPTCHA from "react-google-recaptcha";
import 'bootstrap/dist/css/bootstrap.min.css';
import PhoneInput, {format} from "react-phone-input-auto-format";

import "../App.css"


function Survey() {

    const [lastName, setLastName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [preferredTitle, setPreferredTitle] = useState("");
    const [heightFeet, setHeightFeet] = useState("");
    const [heightINches, setHeightInches] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [state, setState] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [checkedEmail, setCheckedEmail] = useState("");
    const [checkedPhone, setCheckedPhone] = useState("");
    const [checkedFacebook, setCheckedFacebook] = useState("");
    const [checkedTwitter, setCheckedTwitter] = useState("");
    const [checkedMail, setCheckedMail] = useState("");
    const [checkedVisit, setCheckedVisit] = useState("");
    const [budget, setBudget] = useState("");
    const [email, setEmail] = useState("");

    const phoneNumberHandler = (event) => {
        setPhone(format(event));
    }

    const temp = (e) => {
        e.preventDefault();
        console.log(checkedEmail)
        console.log(checkedPhone)
        console.log(checkedFacebook)
        console.log(checkedTwitter)
        console.log(checkedMail)
        console.log(checkedVisit)
    }


    return(
        <div className="formBody">
            <div className="formContainer">
                <h1 className="divHeader">CSC 642 848 Fall 2021 Individual Assignment - Andy Ouyang - Data Survey Form</h1>
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
                                    placeholder="Last Name*"
                                    onChange={e => setLastName(e.target.value)}
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
                                    onChange={e => setFirstName(e.target.value)}
                                    />
                                    <label htmlFor="floatingFirstName">First Name*</label>
                                </Form.Floating>
                            </Col>
                            <Col>
                            <FloatingLabel label="Select a title">
                                <Form.Select onChange={e => setPreferredTitle(e.target.value)}>
                                    <option>Please select a title</option>
                                    <option>None</option>
                                    <option>Student</option>
                                    <option>Professor</option>
                                    <option>Staff</option>
                                    <option>Retired</option>
                                </Form.Select>
                            </FloatingLabel>
                            </Col>
                        </Row>

                        <Row className="rowForm">
                            <Col>
                            <FloatingLabel label="Feet">
                                <Form.Select onChange={e => setHeightFeet(e.target.value)}>
                                    <option>---</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                </Form.Select>
                            </FloatingLabel>
                            </Col>
                            <Col>
                            <FloatingLabel label="Inches">
                                <Form.Select onChange={e => setHeightInches(e.target.value)}>
                                    <option>---</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10</option>
                                    <option>11</option>
                                </Form.Select>
                            </FloatingLabel>
                            </Col>
                        </Row>
                        <Row className="rowForm">
                            <Col>
                                <PhoneInput 
                                    placeholder="Phone Number"
                                    value={phone}
                                    onChange={phoneNumberHandler}
                                    className="phoneNumber"
                                />
                            </Col>
                        </Row>
                        <Row className="rowForm">
                            <Col>
                                <Form.Floating>
                                    <Form.Control 
                                    type="text" 
                                    value={address}
                                    placeholder="Address*"
                                    onChange={e => setAddress(e.target.value)}
                                    />
                                    <label htmlFor="floatingAddress">Address*</label>
                                </Form.Floating>
                            </Col>
                            <Col>
                            <FloatingLabel label="State*">
                                <Form.Select onChange={e => setState(e.target.value)}>
                                    <option>---</option>
                                    <option>Alabama</option>
                                    <option>Alaska</option>
                                    <option>Arizona</option>
                                    <option>Arkansas</option>
                                    <option>California</option>
                                    <option>Colorado</option>
                                    <option>Connecticut</option>
                                    <option>Delaware</option>
                                    <option>Florida</option>
                                    <option>Georgia</option>
                                    <option>Hawaii</option>
                                    <option>Idaho</option>
                                    <option>Illinois</option>
                                    <option>Indiana</option>
                                    <option>Iowa</option>
                                    <option>Kansas</option>
                                    <option>Kentucky</option>
                                    <option>Louisiana</option>
                                    <option>Maine</option>
                                    <option>Maryland</option>
                                    <option>Massachusetts</option>
                                    <option>Michigan</option>
                                    <option>Minnesota</option>
                                    <option>Mississippi</option>
                                    <option>Missouri</option>
                                    <option>Montana</option>
                                    <option>Nebraska</option>
                                    <option>Nevada</option>
                                    <option>New Hampshire</option>
                                    <option>New Jersey</option>
                                    <option>New Mexico</option>
                                    <option>New York</option>
                                    <option>North Carolina</option>
                                    <option>North Dakota</option>
                                    <option>Ohio</option>
                                    <option>Oklahoma</option>
                                    <option>Oregon</option>
                                    <option>Pennsylvania</option>
                                    <option>Rhode Island</option>
                                    <option>South Carolina</option>
                                    <option>South Dakota</option>
                                    <option>Tennessee</option>
                                    <option>Texas</option>
                                    <option>Utah</option>
                                    <option>Vermont</option>
                                    <option>Virginia</option>
                                    <option>Washington</option>
                                    <option>West Virginia</option>
                                    <option>Wisconsin</option>
                                    <option>Wyoming</option>
                                </Form.Select>
                            </FloatingLabel>
                            </Col>
                            <Col>
                                <Form.Floating>
                                    <Form.Control 
                                    type="text" 
                                    value={address}
                                    placeholder="Address*"
                                    onChange={e => setAddress(e.target.value)}
                                    />
                                    <label htmlFor="floatingZipCode">Zip Code* (11111)</label>
                                </Form.Floating>
                            </Col>
                        </Row>
                        <hr/>
                        <Row className="rowForm">
                            <Col>
                            <p className="services">Select all services you require</p>
                            <Form.Check
                                className="services"
                                label="Email"
                                type="checkbox"
                                value="Email "
                                onChange={e => setCheckedEmail(e.target.value)}
                            />
                            <Form.Check
                                className="services"
                                label="Phone"
                                type="checkbox"
                                value="Phone"
                                onChange={e => setCheckedPhone(e.target.value)}
                            />
                            <Form.Check
                                className="services"
                                label="Facebook"
                                type="checkbox"
                                value="Facebook"
                                onChange={e => setCheckedFacebook(e.target.value)}
                            />
                            <Form.Check
                                className="services"
                                label="Email"
                                type="checkbox"
                                value="Twitter "
                                onChange={e => setCheckedTwitter(e.target.value)}
                            />
                            <Form.Check
                                className="services"
                                label="Surface Mail"
                                type="checkbox"
                                value="Mail"
                                onChange={e => setCheckedMail(e.target.value)}
                            />
                            <Form.Check
                                className="services"
                                label="Personal Visit"
                                type="checkbox"
                                value="Visit"
                                onChange={e => setCheckedVisit(e.target.value)}
                            />
                            </Col>
                            <Col>
                                <p>Please select a budget</p>
                                <FloatingLabel label="Budget">
                                    <Form.Select onChange={e => setBudget(e.target.value)}>
                                        <option>---</option>
                                        <option>Less than $50</option>
                                        <option>Between $50 to $100</option>
                                        <option>Above $100</option>
                                    </Form.Select>
                                </FloatingLabel>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            <p className="services">Your Email</p>
                                <Form.Floating>
                                    <Form.Control 
                                    type="text" 
                                    value={email}
                                    placeholder="Address*"
                                    onChange={e => setAddress(e.target.value)}
                                    />
                                    <label htmlFor="floatingEmail">Email@gmail.com</label>
                                </Form.Floating>
                            </Col>
                            <Col>
                            <div className="captcha">
                                    <ReCAPTCHA
                                        sitekey="6LdaRTUdAAAAADApRMuDpcyGsWgBTkYjUVPcIJaK"
                                    />
                                </div>
                            </Col>
                        </Row>
                        
                        <button onClick={temp}>test</button>
                    </Form>
                </Container>
            </div>
            
        </div>


    )
}

export default Survey;