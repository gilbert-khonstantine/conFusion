import React from 'react';
import { Modal, ModalHeader, ModalBody, Label, Col, Button, Row } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);


function CommentForm(props) {
    function handleSubmit(values) {
        alert('Value in the form is: ' + JSON.stringify(values));
        console.log("dish ID " + props.dishId);
        console.log(values)
        console.log(props.dishId, values.rating, values.author, values.comment);
        props.addComment(props.dishId, values.rating, values.author, values.comment);
    }

    const closeBtn = <button className="close" onClick={props.toggle}>&times;</button>;
    console.log(props.modal);
    return (
        <Modal isOpen={props.modal} toggle={props.toggle}>
            <ModalHeader toggle={props.toggle} close={closeBtn}>Submit Comment</ModalHeader>
            <ModalBody>
                <LocalForm onSubmit={(values) => handleSubmit(values)}>
                    <Row className="form-group">
                        <Label htmlFor="rating" md={2}>Rating</Label>
                        <Col md={12}>
                            <Control.select model=".rating" name="rating"
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
                            <Control.text model=".author" placeholder="Your Name"
                                name="yourName" id="yourName"
                                className="form-control"
                                validators={{
                                    required, minLength: minLength(3), maxLength: maxLength(15)
                                }}
                            />
                            <Errors model=".author" show="touched" className="text-danger" messages={{
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

export default CommentForm;