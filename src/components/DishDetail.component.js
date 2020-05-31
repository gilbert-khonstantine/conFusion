import React from 'react';
import { Card, CardBody, CardTitle, CardImg, CardText, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function DishDetail(props) {

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