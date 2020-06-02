import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Label, Col, Button, Row } from 'reactstrap';
import { Link } from "react-router-dom";
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        alert('Current State is: ' + JSON.stringify(values));
    }

    render() {
        return (
            <div className="container" >
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Contact Us</h3>
                        <hr />
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                            121, Clear Water Bay Road<br />
                        Clear Water Bay, Kowloon<br />
                        HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <h3>Send Us Your Feedback</h3>
                    </div>
                    <div className="col-12">
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="firstName" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Control.text model=".firstName" placeholder="First Name"
                                        name="firstName" id="firstName"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }} />
                                    <Errors show="touched" model=".firstName" className="text-danger" messages={{
                                        required: 'Input is required! ',
                                        minLength: "Input must be at least 3 characters. ",
                                        maxLength: "Input must be at most 15 characters. "
                                    }} />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="lastName" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Control.text model=".lastName" placeholder="Last Name"
                                        name="lastName" id="lastName"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }} />
                                    <Errors show="touched" model=".lastName" className="text-danger" messages={{
                                        required: 'Input is required! ',
                                        minLength: "Input must be at least 3 characters. ",
                                        maxLength: "Input must be at most 15 characters. "
                                    }} />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="telNum" md={2}>Phone Number</Label>
                                <Col md={10}>
                                    <Control.text model=".telNum" placeholder="Phone Number"
                                        name="telNum" id="telNum"
                                        className="form-control"
                                        validators={{
                                            required, isNumber, minLength: minLength(9), maxLength: maxLength(11)
                                        }} />
                                    <Errors show="touched" model=".telNum" className="text-danger" messages={{
                                        required: 'Input is required! ',
                                        minLength: "Input must be at least 9 characters. ",
                                        maxLength: "Input must be at most 11 characters. ",
                                        isNumber: "Input must be numerical. "
                                    }} />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text model=".email" id="email" name="email"
                                        placeholder="Email"
                                        className="form-control"
                                        validators={{
                                            required, validEmail
                                        }} />
                                    <Errors show="touched" model=".email" className="text-danger" messages={{
                                        required: "Input is required! \n",
                                        validEmail: "Email is invalid"
                                    }} />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{ size: 6, offset: 2 }}>
                                    <div className="form-check">
                                        <Label check>
                                            <Control.checkbox model=".agree" name="agree"
                                                className="form-check-input"
                                            /> {' '}
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </div>
                                </Col>
                                <Col md={{ size: 3, offset: 1 }}>
                                    <Control.select model=".contactType" name="contactType"
                                        className="form-control">
                                        <option>Phone</option>
                                        <option>Email</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="feedback" md={2}>Feedback</Label>
                                <Col md={10}>
                                    <Control.textarea model=".feedback" placeholder="Your feedback"
                                        name="feedback" id="feedback"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(9)
                                        }} />
                                    <Errors show="touched" model=".feedback" className="text-danger" messages={{
                                        required: "Input is required!",
                                        minLength: "Input must be at least 9 characters"
                                    }} />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;