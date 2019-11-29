export const getToken = (store) => {
    return store.token;
};

export const getUser = (store) => {
    return store.user;
};

export const getItems = (store) => {
    return store.items;
};

export const getCart = (store) => {
    return store.user.cart;
};
