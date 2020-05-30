import React, { Component } from 'react';
import Menu from "./Menu.component"
import DishDetail from './DishDetail.component'
import { DISHES } from "../shared/dishes"
import Header from './Header.component';
import Footer from './Footer.component'

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
        return (
            <div>
                <Header />
                <div className="container">
                    <Menu dishes={this.state.dishes} onClick={(dishID) => this.onDishSelect(dishID)} />
                    <DishDetail selectedDish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
                </div>
                <Footer />
            </div>
        );
    }
}

export default Main;
