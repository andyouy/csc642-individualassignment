import React, { useState} from "react";
import {  useNavigate } from "react-router-dom";
import {Form, Row, Col, Container, FloatingLabel} from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";
import 'bootstrap/dist/css/bootstrap.min.css';
import PhoneInput, {format} from "react-phone-input-auto-format";

import "../App.css"


function Survey() {

    const [lastName, setLastName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [preferredTitle, setPreferredTitle] = useState("");
    const [heightFeet, setHeightFeet] = useState("");
    const [heightInches, setHeightInches] = useState("");
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
    const [captcha, setCaptcha] = useState("");
    const [tos, setTos] = useState("");


    const [lastNameError, setLastNameError] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [titleError, setTitleError] = useState("");
    const [addressError, setAddressError] = useState("");
    const [stateError, setStateError] = useState("");
    const [zipCodeError, setZipCodeError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [tosError, setTosError] = useState("");
    const [captchaError, setCaptchaError] = useState("");

    let lnError = false;
    let fnError = false;
    let tError = false;
    let adrError = false;
    let stError = false;
    let zipError = false;
    let emError = false;
    let toError = false;
    let capError = false;



    let history = useNavigate();


    const store = () => {
        sessionStorage.setItem("lastName", JSON.stringify(lastName));
        sessionStorage.setItem("firstName", JSON.stringify(firstName));
        sessionStorage.setItem("preferredTitle", JSON.stringify(preferredTitle));
        sessionStorage.setItem("heightFeet", JSON.stringify(heightFeet));
        sessionStorage.setItem("heightInches", JSON.stringify(heightInches));
        sessionStorage.setItem("phone", JSON.stringify(phone));
        sessionStorage.setItem("address", JSON.stringify(address));
        sessionStorage.setItem("state", JSON.stringify(state));
        sessionStorage.setItem("zipCode", JSON.stringify(zipCode));
        sessionStorage.setItem("budget", JSON.stringify(budget));
        sessionStorage.setItem("email", JSON.stringify(email));
        
        var checkedArray = [];
        if(checkedEmail){
            checkedArray.push(checkedEmail);
        }

        if(checkedPhone){
            checkedArray.push(checkedPhone)
        }

        if(checkedFacebook){
            checkedArray.push(checkedFacebook);
        }

        if(checkedTwitter){
            checkedArray.push(checkedTwitter);
        }

        if(checkedMail){
            checkedArray.push(checkedMail)
        }

        if(checkedVisit){
            checkedArray.push(checkedVisit)
        }

        console.log(checkedArray);

        sessionStorage.setItem("checkedItems", JSON.stringify(checkedArray))

        //once all values are stored, switches to result page
        history('/result')

        
    }


    const emailRegex = new RegExp("^[^@]+@[^@]+.[^@]+$");

    let verified = false;
    //checks each input field on submit
    const verification = (e) => {
        if(lastName.length > 40){
            setLastNameError("Last name must be less than 40 characters");
            lnError = true;
        }else if(lastName.length === 0){
            setLastNameError("Last name can not be left empty");
            lnError = true;
        }else{
            setLastNameError("");
            lnError = false;
        }

        if(firstName.length > 40){
            setFirstNameError("First name must be less than 40 characters");
            fnError = true;
        }else if (firstName.length === 0){
            setFirstNameError("First name can not be left empty")
            fnError = true;
        }else{
            setFirstNameError("");
            fnError = false;
        }

        if(preferredTitle === "Please select a title" || preferredTitle === ""){
            setTitleError("Please select a title");
            tError = true;
        }else{
            setTitleError("");
            tError = false;
        }

        if(address.length > 40){
            setAddressError("Please enter an address less than 40 characters");
            adrError = true;
        }else if(address === ""){
            setAddressError("Please enter an address");
            adrError = true;
        }else{
            setAddressError("");
            adrError = false;
        }

        if(state === "---" || state === ""){
            setStateError("Please select a state");
            stError = true;
        }else{
            setStateError("");
            stError = false;
        }

        if(zipCode.length > 5 || zipCode.length <= 0){
            setZipCodeError("Please enter a valid zip code");
            zipError = true;
        }else{
            setZipCodeError("");
            zipError = false;
        }

        if(!emailRegex.test(email)){
            setEmailError("Please enter a valid email");
            emError = true;
        }else{
            setEmailError("");
            emError = false;
        }

        if(tos === ""){
            setTosError("Please agree with the Terms of Service")
            toError = true;
        }else{
            setTosError("");
            toError = false;
        }

        if(captcha === ""){
            setCaptchaError("Please verify that you are human");
            capError = true;
        }else{
            setCaptchaError("")
            capError = false;
        }

        if( !lnError && 
            !fnError  &&
            !tError &&
            !adrError &&
            !stError &&
            !zipError &&
            !emError &&
            !toError &&
            !capError){
            verified = true;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        verification();
        console.log(verified)


        if(verified){
            store();
        }
    }


    return(
        <div className="formBody">
            <div className="formContainer">
                <h1 className="divHeader">CSC 642 848 Fall 2021 Individual Assignment - Andy Ouyang - Data Survey Form</h1>
                <hr/>
                <Container fluid="md" className="inputContainer">
                    <Form>
                        <Row className="rowForm">
                        <p className="category-label">Personal Information </p>
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
                                {lastNameError ? <p className="error">{lastNameError}</p> : null}
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
                                {firstNameError ? <p className="error">{firstNameError}</p> : null}
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
                                {titleError ? <p className="error">{titleError}</p> : null}
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
                                    className="phoneNumber"
                                    onChange={e => setPhone(format(e))}
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
                                {addressError ? <p className="error">{addressError}</p> : null}
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
                            {stateError ? <p className="error">{stateError}</p> : null}
                            </Col>
                            <Col>
                                <Form.Floating>
                                    <Form.Control 
                                    type="text" 
                                    value={zipCode}
                                    placeholder="Address*"
                                    onChange={e => setZipCode(e.target.value)}
                                    />
                                    <label htmlFor="floatingZipCode">Zip Code* (11111)</label>
                                </Form.Floating>
                                {zipCodeError ? <p className="error">{zipCodeError}</p> : null}
                            </Col>
                        </Row>
                        <hr/>
                        <Row className="rowForm">
                            <Col>
                            <p className="services-label">Select all services you require</p>
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
                                <p className="category-label">Please select a budget</p>
                                <FloatingLabel label="Budget">
                                    <Form.Select onChange={e => setBudget(e.target.value)}>
                                        <option>---</option>
                                        <option>Less than $50</option>
                                        <option>Between $50 to $100</option>
                                        <option>Above $100</option>
                                    </Form.Select>
                                </FloatingLabel>
                                <p className="email" >Your Email</p>
                                <Form.Floating>
                                    <Form.Control 
                                    type="text" 
                                    value={email}
                                    placeholder="Email*"
                                    onChange={e => setEmail(e.target.value)}
                                    />
                                    <label htmlFor="floatingEmail">Email (ex. test@mail.com)</label>
                                </Form.Floating>
                                {emailError ? <p className="error">{emailError}</p> : null}
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            <p className="services-label">Please Verify that you are human</p>
                                <div className="captcha">
                                        <ReCAPTCHA
                                            sitekey="6LdaRTUdAAAAADApRMuDpcyGsWgBTkYjUVPcIJaK"
                                            onChange={e => setCaptcha(true)}
                                        />
                                </div>
                                {captchaError ? <p className="error">{captchaError}</p> : null}
                            </Col>
                            <Col>
                                <Form.Check
                                    className="services-label"
                                    label="I agree to the Terms of Service"
                                    type="checkbox"
                                    value="tos"
                                    onChange={e => setTos(e.target.value)}
                                />
                                <a className="TOS" href="https://policies.google.com/terms?hl=en-US">Terms of Service</a>
                                <br></br>
                                {tosError ? <p className="error">{tosError}</p> : null}
                            </Col>
                        </Row>
                        
                        <button onClick={handleSubmit}>Submit</button>
                    </Form>
                </Container>
            </div>         
        </div>

        


    )
}

export default Survey;