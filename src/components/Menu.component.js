import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardImg, CardImgOverlay, CardText } from 'reactstrap';

function Menu(props) {
    const menu = props.dishes.map((dish) => {
        return (
            <div className="col-12 col-md-5 m-1">
                <Card key={dish.id}
                    onClick={() => props.onClick(dish.id)}>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Card>
            </div>
        )
    });

    return (
        <div className="row" >
            {menu}
        </div>
    )
}

export default Menu;