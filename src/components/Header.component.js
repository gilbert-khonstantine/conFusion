import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron, Nav, NavItem, NavLink, NavbarToggler, Collapse, Modal, ModalBody, ModalHeader, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            isLoginOpen: false
        }
        this.toggleLogin = this.toggleLogin.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
    }

    toggle() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }

    handleLogin(event) {
        event.preventDefault();
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        this.toggleLogin();
    }

    toggleLogin() {
        this.setState({
            isLoginOpen: !this.state.isLoginOpen
        })
    }
    render() {
        return (
            <div>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="/"><img src='/logo.png' height="30" width="41" alt='Ristorante Con Fusion' /></NavbarBrand>
                        <NavbarToggler onClick={() => this.toggle} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <Link className="nav-link" to='/home'><span className="fa fa-home fa-lg"></span> Home</Link>
                                </NavItem>
                                <NavItem>
                                    <Link className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> About Us</Link>
                                </NavItem>
                                <NavItem>
                                    <Link className="nav-link" to='/menu'><span className="fa fa-list fa-lg"></span> Menu</Link>
                                </NavItem>
                                <NavItem>
                                    <Link className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</Link>
                                </NavItem>
                                <NavItem>
                                    <Button outline onClick={this.toggleLogin}><span className="fa fa-sign-in fa-lg"></span> Login</Button>
                                </NavItem>
                            </Nav>
                        </Collapse>
                        <Modal isOpen={this.state.isLoginOpen} toggle={this.toggleLogin}>
                            <ModalHeader>LOGIN</ModalHeader>
                            <ModalBody>
                                <Form onSubmit={this.handleLogin}>
                                    <FormGroup>
                                        <Label>Username</Label>
                                        <Input innerRef={(input) => { this.username = input }} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label>Password</Label>
                                        <Input innerRef={(input) => { this.password = input }} />
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" name="remember"
                                                innerRef={(input) => this.remember = input} />
                                    Remember me
                                </Label>
                                    </FormGroup>
                                    <Button type="submit" value="submit" color="primary">Login</Button>
                                </Form>
                            </ModalBody>
                        </Modal>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante con Fusion</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </div >
        )
    }
}
export default Header;
