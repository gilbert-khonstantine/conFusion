import * as ActionTypes from "./ActionTypes";

export const Promotions = (state = {
    promos: [],
    err: null,
    isLoading: true
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_PROMOS:
            return { ...state, promos: action.payload, isLoading: false }
        case ActionTypes.PROMOS_LOADING:
            return { ...state, isLoading: true }
        case ActionTypes.PROMOS_FAILED:
            return { ...state, isLoading: false, err: action.payload };
        default:
            return state;
    }
};