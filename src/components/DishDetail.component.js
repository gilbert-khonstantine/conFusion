import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardImg, CardImgOverlay, CardText } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    renderDish = (dish) => {
        if (dish != null)
            return (
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return (
                <div></div>
            );
    }

    formatDate(string) {
        var options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(string).toLocaleDateString([], options);
    }

    getDishComments = (dish) => {
        if (dish != null)
            if (dish.comments != null)
                return (
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        {
                            dish.comments.map((comment) => {
                                return (
                                    <div>
                                        <p class="mt-3">
                                            {comment.comment}
                                        </p>
                                        <p class="mt-3">
                                            -- {comment.author}, {this.formatDate(comment.date)}
                                        </p>
                                    </div>


                                )
                            })
                        }
                    </div >

                );
            else
                return (
                    <div></div >
                );
    }

    render() {
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.selectedDish)}
                </div >
                {this.getDishComments(this.props.selectedDish)}
            </div>
        )
    }
}

export default DishDetail;