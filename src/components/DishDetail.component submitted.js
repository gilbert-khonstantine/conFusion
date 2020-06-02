import React, { useState } from 'react';
import { Card, CardBody, CardTitle, CardImg, CardText, Breadcrumb, BreadcrumbItem, Button, Modal, Row, Col, ModalBody, ModalHeader, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

function handleSubmit(values) {
    alert('Value in the form is: ' + JSON.stringify(values));
}

function CommentForm(props) {
    const closeBtn = <button className="close" onClick={props.toggle}>&times;</button>;
    console.log(props.modal);
    return (
        <Modal isOpen={props.modal} toggle={props.toggle}>
            <ModalHeader toggle={props.toggle} close={closeBtn}>Submit Comment</ModalHeader>
            <ModalBody>
                <LocalForm onSubmit={(values) => handleSubmit(values)}>
                    <Row className="form-group">
                        <Label htmlFor="firstName" md={2}>Rating</Label>
                        <Col md={12}>
                            <Control.select model=".contactType" name="contactType"
                                className="form-control">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Control.select>
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="name" md={12}>Your Name</Label>
                        <Col md={12}>
                            <Control.text model=".yourName" placeholder="Your Name"
                                name="yourName" id="yourName"
                                className="form-control"
                                validators={{
                                    required, minLength: minLength(3), maxLength: maxLength(15)
                                }}
                            />
                            <Errors model=".yourName" show="touched" className="text-danger" messages={{
                                required: "Input is required. ",
                                minLength: "Input must be at least 3 characters. ",
                                maxLength: "Input must be at most 15 characteres. "
                            }} />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="comment" md={12}>Comment</Label>
                        <Col md={12}>
                            <Control.textarea model=".comment" placeholder="Your Comments"
                                name="comment" id="comment"
                                className="form-control" rows={6}
                                validators={{
                                    required, minLength: minLength(10)
                                }}
                            />
                            <Errors model=".comment" show="touched" className="text-danger" messages={{
                                required: "Input is required. ",
                                minLength: "Input must be at least 10 characters. ",
                            }} />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Col md={{ size: 10 }}>
                            <Button type="submit" color="primary">
                                Submit
                    </Button>
                        </Col>
                    </Row>
                </LocalForm>
            </ModalBody>
        </Modal >
    )
}


function DishDetail(props) {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    function renderDish(dish) {
        if (dish != null)
            return (
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        else
            return (
                <div></div>
            );
    }

    function formatDate(string) {
        var options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(string).toLocaleDateString([], options);
    }

    function toggleCommentForm() {
        toggle();
    }

    function getDishComments(comments) {
        if (comments != null)
            return (
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    {
                        comments.map((comment) => {
                            return (
                                <>
                                    <ul className="list-unstyled">
                                        <li className="mt-3">{comment.comment}</li>
                                        <li className="mt-3">-- {comment.author}, {formatDate(comment.date)}</li>
                                    </ul>
                                </>
                            )
                        })
                    }
                    <Button outline onClick={toggleCommentForm}><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>
                    <CommentForm modal={modal} toggle={toggle} />
                </div >

            );
        else
            return (
                <div></div >
            );
    }


    return (
        <div className='container'>
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
                {renderDish(props.dish)}
                {getDishComments(props.comments)}
            </div>
        </div>
    )

}

export default DishDetail;