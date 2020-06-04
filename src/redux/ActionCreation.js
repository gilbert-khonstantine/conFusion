import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseURL";


export const addComment = (dishId, rating, author, comment) => {
    return ({
        type: ActionTypes.ADD_COMMENT,
        payload: {
            dishId: dishId,
            rating: rating,
            author: author,
            comment: comment
        }
    });
}


export const fetchDishes = () => (dispatch) => {

    dispatch(dishesLoading(true));

    return fetch(baseUrl + 'dishes')
        .then(response => {
            if (response.ok)
                return response.json()
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        }, error => {
            var err = new Error(error.message);
            throw err;
        })
        .then(dishes => dispatch(addDishes(dishes)))
        .catch(error => dispatch(dishesFailed(error.message)));
}

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});


export const fetchComments = () => (dispatch) => {
    return fetch(baseUrl + 'comments')
        .then(response => {
            if (response.ok)
                return response.json()
            else {
                var err = new Error('Error ' + response.status + ': ' + response.statusText);
                err.response = response;
                return err;
            }
        }, error => {
            throw new Error(error.message)
        })
        .then(comments => dispatch(addComments(comments)))
        .catch(error => dispatch(dishesFailed(error.message)))
}

export const commentsFailed = (err) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: err
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});


export const fetchPromos = () => (dispatch) => {

    dispatch(promosLoading(true));

    return fetch(baseUrl + 'promotions')
        .then(response => {
            if (response.ok)
                return response.json()
            else {
                var err = new Error('Error ' + response.status + ': ' + response.statusText);
                err.response = response;
                return err;
            }
        }, error => {
            throw new Error(error.message);
        })
        .then(promos => dispatch(addPromos(promos)))
        .catch(error => dispatch(promosFailed(error.message)))
}

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (err) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: err
});

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});

export const fetchLeaders = () => (dispatch) => {
    dispatch(leadersLoading(true));

    return fetch(baseUrl + "leaders")
        .then(response => {
            if (response.ok)
                return response.json()
            else {
                var err = new Error('Error ' + response.status + ': ' + response.statusText);
                err.response = response;
                return err;
            }
        }, error => {
            throw new Error(error.message);
        })
        .then(leaders => dispatch(addLeaders(leaders)))
        .catch(error => dispatch(leadersFailed(error.message)))
}

export const leadersFailed = (err) => ({
    type: ActionTypes.LEADERS_FAILED,
    payload: err
});

export const leadersLoading = () => {
    return { type: ActionTypes.LEADERS_LOADING }
}

export const addLeaders = (leaders) => {
    console.log("leaders" + leaders)
    console.log(leaders)
    return {
        type: ActionTypes.ADD_LEADERS,
        payload: leaders
    }
}