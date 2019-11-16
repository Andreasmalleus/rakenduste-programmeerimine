import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";

import reducer from "./reducer.js";

const middlewares = [thunk];

const persistConfig = {
    key : "root",
    storage
};

const persistedReducer = persistReducer(persistConfig, reducer);

//returns function not an object
export default () => {
    const store = createStore(persistedReducer, applyMiddleware(...middlewares));
    const persistor = persistStore(store);
    return {store, persistor};
};
