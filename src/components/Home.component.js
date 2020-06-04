import React from 'react';
import { Card, CardBody, CardTitle, CardImg, CardSubtitle, CardText } from 'reactstrap';
import { Loading } from "./Loading.component"
import { baseUrl } from "../shared/baseURL";

function RenderCard({ item, isLoading, err }) {
    if (isLoading) {
        return (
            <Loading />
        )
    }
    else if (err) {
        return (
            <h4>{err}</h4>
        )
    }
    else {
        return (
            <div className="col-12 col-md m-1">
                <Card>
                    <CardImg src={baseUrl + item.image} alt={item.name} />
                    <CardBody>
                        <CardTitle>{item.name}</CardTitle>
                        {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                        <CardText>{item.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

function Home(props) {
    console.log("PROPROPROPROP")
    console.log(props)
    return (
        <div className="container">
            <div className="row">
                <RenderCard item={props.dish} isLoading={props.dishesLoading} err={props.dishesErr} />
                <RenderCard item={props.promotion} isLoading={props.promosLoading} err={props.promosErr} />
                <RenderCard item={props.leaders} isLoading={props.leadersLoading} err={props.leadersErr} />
            </div>
        </div>
    );
}

export default Home;   