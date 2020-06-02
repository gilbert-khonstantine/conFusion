import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, FormGroup, Input, Label, Col, Button, Form, FormFeedback } from 'reactstrap';
import { Link } from "react-router-dom"

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            telNum: "",
            email: "",
            feedback: "",
            agree: false,
            contactType: "Phone",
            clicked: {
                firstName: false,
                lastName: false,
                telNum: false,
                email: false,
                feedback: false,
            }
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleInput(event) {
        const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
        this.setState({
            [event.target.name]: value
        })
    }

    handleSubmit(event) {
        console.log('Current State is: ' + JSON.stringify(this.state));
        alert('Current State is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }

    handleBlur = (field) => {
        this.setState({
            clicked: {
                ...this.state.clicked, [field.target.name]: true
            }
        })
    }

    validate(firstName, lastName, email, telNum, feedback) {
        let errors = {
            firstName: "",
            lastName: "",
            telNum: "",
            feedback: "",
            email: ""
        }

        if (this.state.clicked.firstName && this.state.firstName.length < 3) {
            errors.firstName = "First name must be at least 3 characters"
        } else if (this.state.clicked.firstName && this.state.firstName.length >= 10) {
            errors.firstName = "First name must be at most 10 characters"
        }

        if (this.state.clicked.lastName && this.state.lastName.length < 3) {
            errors.lastName = "Last name must be at least 3 characters"
        } else if (this.state.clicked.lastName && this.state.lastName.length >= 10) {
            errors.lastName = "Last name must be at most 10 characters"
        }

        const reg = /^\d+$/;

        if (this.state.clicked.telNum && !reg.test(this.state.telNum)) {
            errors.telNum = "Telephone number must be in numeric"
        }

        if (this.state.clicked.email && this.state.email.search("@") === -1) {
            errors.email = "Email must contain @ sign"
        }

        if (this.state.clicked.feedback && this.state.feedback.length < 10) {
            errors.feedback = "Feedback must be at least 10 characters"
        }

        return errors;
    }

    render() {
        let errors = this.validate(this.state.firstName, this.state.lastName, this.state.email, this.state.telNum, this.state.feedback);
        console.log(errors);
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
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor="firstName" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Input type="text" placeholder="First Name"
                                        name="firstName" id="firstname"
                                        value={this.state.firstName}
                                        valid={!this.state.clicked.firstName ? false : errors.firstName === ''}
                                        invalid={errors.firstName !== ''}
                                        onChange={this.handleInput}
                                        onBlur={this.handleBlur} />
                                    <FormFeedback>{errors.firstName}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="lastName" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input type="text" placeholder="Last Name"
                                        name="lastName" id="lastName"
                                        value={this.state.lastName}
                                        valid={!this.state.clicked.lastName ? false : errors.lastName === ''}
                                        invalid={errors.lastName !== ''}
                                        onChange={this.handleInput}
                                        onBlur={this.handleBlur} />
                                    <FormFeedback>{errors.lastName}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="telNum" md={2}>Phone Number</Label>
                                <Col md={10}>
                                    <Input type="tel" placeholder="Phone Number"
                                        name="telNum" id="telNum"
                                        value={this.state.telNum}
                                        valid={!this.state.clicked.telNum ? false : errors.telNum === ''}
                                        invalid={errors.telNum !== ''}
                                        onChange={this.handleInput}
                                        onBlur={this.handleBlur} />
                                    <FormFeedback>{errors.telNum}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Input type="email" placeholder="Email"
                                        name="email" id="email"
                                        value={this.state.email}
                                        valid={!this.state.clicked.email ? false : errors.email === ''}
                                        invalid={errors.email !== ''}
                                        onChange={this.handleInput}
                                        onBlur={this.handleBlur} />
                                    <FormFeedback>{errors.email}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 6, offset: 2 }}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox"
                                                name="agree"
                                                checked={this.state.agree}
                                                onChange={this.handleInput} /> {' '}
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{ size: 3, offset: 1 }}>
                                    <Input type="select" name="contactType"
                                        value={this.state.contactType}
                                        onChange={this.handleInput}>
                                        <option>Phone</option>
                                        <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="feedback" md={2}>Feedback</Label>
                                <Col md={10}>
                                    <Input type="textarea" placeholder="Your feedback"
                                        name="feedback" id="feedback"
                                        value={this.state.feedback}
                                        valid={!this.state.clicked.feedback ? false : errors.feedback === ''}
                                        invalid={errors.feedback !== ''}
                                        onChange={this.handleInput}
                                        rows={12}
                                        onBlur={this.handleBlur} />
                                    <FormFeedback>{errors.feedback}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;