import {createStore} from "redux";
import {combineReducers} from "redux";
//store -> globalized state
//action -> increment

const increment = () => {
    return {
        type : 'increment'
    }
}

const decrement = () => {
    return {
        type : 'decrement'
    }
}
//reducer -> describes how actions transform the state to the next state
//initial state is 0
const counter = (state = 0, action) => {
    switch(action.type){
        case "decrement":
            return state -1;
        case "increment":
            return state +1;
    }
}

let store  = createStore(counter);
let combined = combineReducers({
    counter
})

//displaying store in console
store.subscribe(() => console.log(store.getState()));

//dispatch -> execute the action
store.dispatch(increment());

//summ
//store is a globalized state
//reducer describes how actions change the store
