import React from 'react';
import { Link, Route } from 'react-router-dom';
import { Card, CardTitle, CardImg, CardImgOverlay, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import DishDetail from './DishDetail.component'
function Menu(props) {

    const menu = props.dishes.map((dish) => {
        return (
            <div className="col-12 col-md-5 m-1">
                <Card key={dish.id}>
                    <Link to={`/menu/${dish.id}`} >
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Link>
                </Card >
            </div >
        )
    });

    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home"> Home</Link></BreadcrumbItem>
                    <BreadcrumbItem> Menu</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Menu</h3>
                    <hr />
                </div>
            </div>
            <div className="row" >
                {menu}
            </div>
        </div>
    )
}

export default Menu;