import {createStore} from "redux";

const ITEM_ADDED = "ITEM_ADDED";
const ITEM_REMOVED = "ITEM_REMOVED";

//action
export const addItem = (item) => ({
    type : ITEM_ADDED,
    payload : item
});

export const removeItem = (_id) => ({
    type : ITEM_REMOVED,
    payload: _id
});


//initial state is an empty list
const initialState = {
    cart : [

    ]
};

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
        default : {
            return state;
        }
    }
};

const store = createStore(reducer);
store.subscribe(() => console.log(store.getState()));


export default store;
