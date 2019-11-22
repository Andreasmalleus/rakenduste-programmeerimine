export const ITEM_ADDED = "ITEM_ADDED";
export const ITEM_REMOVED = "ITEM_REMOVED";
export const ITEMS_REQUEST = "ITEMS_REQUEST";
export const ITEMS_SUCCESS = "ITEMS_SUCCESS";
export const ITEMS_FAILURE = "ITEMS_FAILURE";
export const USER_UPDATE = "USER_UPDATE";
export const TOKEN_UPDATE = "TOKEN_UPDATE";
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
            console.log(items);
        })
        .catch(err => {
            dispatch(itemsFailure(err));
        }) ;
    };
};

export const userUpdate = (user) => ({
    type : USER_UPDATE,
    payload : user
});

export const tokenUpdate = (token) => ({
    type : TOKEN_UPDATE,
    payload : token
});