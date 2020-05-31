import React from 'react';
import { Card, CardBody, CardTitle, CardImg, CardSubtitle, CardText } from 'reactstrap';

function RenderCard({ item }) {
    return (
        <div className="col-12 col-md m-1">
            <Card>
                <CardImg src={item.image} alt={item.name} />
                <CardBody>
                    <CardTitle>{item.name}</CardTitle>
                    {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                    <CardText>{item.description}</CardText>
                </CardBody>
            </Card>
        </div>
    )
}

function Home(props) {
    return (
        <div className="container">
            <div className="row">
                <RenderCard item={props.dish} />
                <RenderCard item={props.promotion} />
                <RenderCard item={props.leaders} />
            </div>
        </div>
    );
}

export default Home;   