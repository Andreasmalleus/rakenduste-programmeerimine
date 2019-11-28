import {ITEM_ADDED,ITEMS_REQUEST, ITEMS_SUCCESS, ITEMS_FAILURE, USER_UPDATE, TOKEN_UPDATE} from "./actions.js";

//initial state is an empty list
const initialState = {
    items : [

    ],
    user : null,
    token : null,
    cart: []
};

//after action is dispatched it will be passed to the reducer 
const reducer = (state = initialState, action) => {
    switch(action.type){
        case ITEM_ADDED:{
            return {
                ...state,
                user: addItemToCart(state.user, action.payload) //concates everytime a item is added
            };
        }
        /*
        case ITEM_REMOVED:{
            return {
                ...state, 
                cart : state.cart.filter(item => item._id !== action.payload)
                //if doesnt equal the id then we get a new cart
            };
        }*/
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

export default reducer;