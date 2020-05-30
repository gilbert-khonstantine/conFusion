import React, { Component } from 'react';
import Menu from "./Menu.component"
import DishDetail from './DishDetail.component'
import { DISHES } from "../shared/dishes"
import Header from './Header.component';
import Footer from './Footer.component';
import Home from './Home.component';
import { Switch, Redirect, Route } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dishes: DISHES,
            selectedDish: null
        }
    }

    onDishSelect = (dishID) => {
        this.setState({
            selectedDish: dishID
        })
    }

    render() {
        const HomePage = () => {
            return (
                <Home />
            );
        }
        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} onClick={(dishID) => this.onDishSelect(dishID)} />} />
                    <Redirect to="/home" />
                </Switch>
                {/* <Menu dishes={this.state.dishes} onClick={(dishID) => this.onDishSelect(dishID)} />
                    <DishDetail selectedDish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} /> */}
                <Footer />
            </div>
        );
    }
}

export default Main;
