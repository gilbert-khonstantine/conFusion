import React, { Component } from 'react';
import Menu from "./Menu.component";
import DishDetail from './DishDetail.component';
import Contact from './Contact.component';
import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/comments";
import { LEADERS } from "../shared/leaders";
import { PROMOTIONS } from "../shared/promotions";
import Header from './Header.component';
import Footer from './Footer.component';
import Home from './Home.component';
import About from "./About.component";
import { Switch, Redirect, Route } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            leaders: LEADERS,
            promotions: PROMOTIONS,
            selectedDish: null
        }
    }

    render() {
        const HomePage = () => {
            return (
                <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]} promotion={this.state.promotions.filter((promo) => promo.featured)[0]} leaders={this.state.leaders.filter((leader) => leader.featured)[0]} />
            );
        }

        const DishWithId = ({ match }) => {
            return (
                <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
                    comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))} />
            );
        };

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
                    <Route path='/menu/:dishId' component={DishWithId} />
                    <Route path='/contactus' component={Contact} />
                    <Route path='/aboutus' component={() => <About leaders={this.state.leaders} />} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;
