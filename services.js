const basePath = "api/v1";

export const getItems = () => {
    return fetch(`${basePath}/items`)
    .then(res => {
        if(!res.ok) throw "GetItems failed";
        return res.json();
    });
};

export const getItem = ({itemId}) => {
    return fetch(`${basePath}/items/${itemId}`)
    .then(res => {
        if(!res.ok) throw "GetItem failed";
        return res.json();
    });
};

export const getUser = ({userId, token}) => {
    return fetch(`${basePath}/users/${userId}`, {
       headers:{
        "Authorization" : `Bearer ${token}`
     } 
    })
    .then(res => {
        if(!res.ok) throw "GetUser failed";
        return res.json();
    });
};

export const addItemToCart = ({userId, itemId, token}) => {
    return fetch(`${basePath}/users/${userId}/cart/${itemId}`, {
        method: "PUT",
        headers:{
         "Authorization" : `Bearer ${token}`
      } 
     })
     .then(res => {
         console.log(res);
     });    
};

export const removeItemFromCart = ({userId, itemId, token}) => {
    return fetch(`${basePath}/users/${userId}/cart/${itemId}`, {
        method: "DELETE",
        headers:{
         "Authorization" : `Bearer ${token}`
      } 
     })
     .then(res => {
         if(!res.ok) throw "RemoveItemFromCart failed";
         return res.json();
     });
};

export const login = ({username, password}) => {
    return fetch(`${basePath}/auth/login`, {
        method: "POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body : JSON.stringify({username, password}),
     })
     .then(res => {
         if(!res.ok) throw "Login failed";
         return res.json();
     });
};

export const signup = ({email, username, password}) => {
    return fetch(`${basePath}/auth/signup`, {
        method: "POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body : JSON.stringify({email,username,password}),
     })
     .then(res => {
         if(!res.ok) throw "Registration failed";
         return res.json();
     });
};

export const checkout = ({token, userId}) => {
    return fetch(`${basePath}/${userId}/checkout`,{
        method : "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(token),
    })
    .then(res  => {
        if(!res.ok) throw "checkout failed";
        console.log(res);
    });
};

