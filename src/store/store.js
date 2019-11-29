import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";

const middlewares = [thunk];

const ITEM_ADDED = "ITEM_ADDED";
const ITEM_REMOVED = "ITEM_REMOVED";
const ITEMS_REQUEST = "ITEMS_REQUEST";
const ITEMS_SUCCESS = "ITEMS_SUCCESS";
const ITEMS_FAILURE = "ITEMS_FAILURE";

//action
export const addItem = (item) => ({
    type : ITEM_ADDED,
    payload : item
});

export const removeItem = (_id) => ({
    type : ITEM_REMOVED,
    payload: _id
});

export const itemsRequest = () => ({
    type : ITEMS_REQUEST
});

export const itemSuccess = (items) => ({
    type : ITEMS_SUCCESS,
    payload : items
});

export const itemsFailure = (error) => ({
    type : ITEMS_FAILURE,
    payload : error
});

export const getItems = () => { 
        return dispatch =>  {
        dispatch(itemsRequest());
        fetch("http://localhost:3000/api/v1/items")
        .then(result => {
            return result.json();
        })
        .then(items => {
            dispatch(itemSuccess(items));
        })
        .catch(err => {
            dispatch(itemsFailure(err));
        }) ;
    };
};


//initial state is an empty list
const initialState = {
    cart : [

    ],
    items : [

    ]
};

//after action is dispatched it will be passed to the reducer 
const reducer = (state = initialState, action) => {
    switch(action.type){
        case ITEM_ADDED:{
            return {
                ...state,
                cart: state.cart.concat([action.payload])//concates everytime a item is added
            };
        }
        case ITEM_REMOVED:{
            return {
                ...state, 
                cart : state.cart.filter(item => item._id !== action.payload)
                //if doesnt equal the id then we get a new cart
            };
        }
        case ITEMS_REQUEST:{
            return {
                ...state, 
                pending : true
                //if doesnt equal the id then we get a new cart
            };
        }
        case ITEMS_SUCCESS:{
            return {
                ...state, 
                items : action.payload,
                pending : false
                //if doesnt equal the id then we get a new cart
            };
        }
        case ITEMS_FAILURE:{
            return {
                ...state, 
                pending : false,
                error : action.error
                //if doesnt equal the id then we get a new cart
            };
        }
        default : {
            return state;
        }
    }
};

const store = createStore(reducer, applyMiddleware(...middlewares));
store.subscribe(() => console.log(store.getState()));


export default store;
