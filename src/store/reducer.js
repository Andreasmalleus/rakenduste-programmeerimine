import {ITEM_ADDED, ITEM_REMOVED,ITEMS_REQUEST, ITEMS_SUCCESS, ITEMS_FAILURE, USER_UPDATE, TOKEN_UPDATE} from "./actions.js";

//initial state is an empty list
const initialState = {
    items : [

    ],
    user : null,
    token : null,
};

//after action is dispatched it will be passed to the reducer 
const reducer = (state = initialState, action) => {
    switch(action.type){
        case ITEM_ADDED:{
            return {
                ...state,
                user: addItemToCart(state.user,action.payload)
            };
        }
        
        case ITEM_REMOVED:{
            return {
                ...state, 
                user : removeItemFromCart(state.user, action.payload)
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
        case USER_UPDATE:{
            return {
                ...state, 
                user : action.payload
                //if doesnt equal the id then we get a new cart
            };
        }
        case TOKEN_UPDATE:{
            return {
                ...state, 
                token : action.payload
                //if doesnt equal the id then we get a new cart
            };
        }
        
        default : {
            return state;
        }
    }
};

const addItemToCart = (user,itemId) => {
    return{
        ...user,
        cart : user.cart.concat(itemId)
    };
};

const removeItemFromCart = (user, itemId)=> {
    return{
        ...user,
        cart : user.cart.filter(id =>  id !== itemId)
    };
};

export default reducer;