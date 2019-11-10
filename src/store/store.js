import {createStore} from "redux";

const ITEM_ADDED = "ITEM_ADDED";
//const ITEM_REMOVED = "ITEM_REMOVED";

//action
export const addItem = (_id) => ({
    type : ITEM_ADDED,
    payload : _id
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
                cart : state.cart.slice(0,1)
            }
        }
        default : {
            return state;
        }
    }
};

const store = createStore(reducer);
store.subscribe(() => console.log(store.getState()));

export default store;
