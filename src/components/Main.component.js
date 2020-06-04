import React, { Component } from 'react';
import Menu from "./Menu.component";
import DishDetail from './DishDetail.component';
import Contact from './Contact.component';
import Header from './Header.component';
import Footer from './Footer.component';
import Home from './Home.component';
import About from "./About.component";
import { Switch, Redirect, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { postFeedback, postComment, fetchDishes, fetchComments, fetchPromos, fetchLeaders } from "../redux/ActionCreation";
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
}

// mapDispatchToProps connects Redux actions to React props. This way a connected React component will be able to send messages to the store.
const mapDispatchToProps = dispatch => ({
    postComment: (dishId, rating, author, comment) => {
        return dispatch(postComment(dishId, rating, author, comment))
    },
    postFeedback: (firstname, lastname, telnum, email, agree, contactType, message) => {
        return dispatch(postFeedback(firstname, lastname, telnum, email, agree, contactType, message))
    },
    fetchDishes: () => {
        return dispatch(fetchDishes())
    },
    resetFeedbackForm: () => {
        return dispatch(actions.reset('feedback'))
    },
    fetchComments: () => {
        return dispatch(fetchComments())
    },
    fetchPromos: () => {
        return dispatch(fetchPromos())
    },
    fetchLeaders: () => {
        return dispatch(fetchLeaders())
    }
});

class Main extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchComments();
        this.props.fetchPromos();
        this.props.fetchLeaders();
    }

    render() {
        const HomePage = () => {
            return (
                <Home dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.props.promotions.promos.filter((promo) => promo.featured)[0]}
                    leaders={this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
                    dishesLoading={this.props.dishes.isLoading}
                    dishesErr={this.props.dishes.err}
                    promosLoading={this.props.promotions.isLoading}
                    promosErr={this.props.promotions.err}
                    leadersLoading={this.props.leaders.isLoading}
                    leadersErr={this.props.leaders.err}
                />
            );
        }

        const DishWithId = ({ match }) => {
            return (
                <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
                    comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
                    postComment={this.props.postComment}
                    dishesLoading={this.props.dishes.isLoading}
                    dishesErr={this.props.dishes.err} />
            );
        };

        return (
            <div>
                <Header />
                <TransitionGroup>
                    <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                        <Switch>
                            <Route path='/home' component={HomePage} />
                            <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
                            <Route path='/menu/:dishId' component={DishWithId} />
                            <Route path='/contactus' component={() => <Contact postFeedback={this.props.postFeedback} resetFeedbackForm={this.props.resetFeedbackForm} />} />
                            <Route path='/aboutus' component={() => <About leaders={this.props.leaders.leaders} leadersLoading={this.props.leaders.isLoading}
                                leadersErr={this.props.leaders.err} />} />
                            <Redirect to="/home" />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
