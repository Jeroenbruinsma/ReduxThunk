

export const signUp = (name, email, password) =>{
    return async (dispatch, getState) => {
        try{
            const result = await api("/signup", {
                method: "POST",
                body: {
                    name,
                    email,
                    password
                }
            })
            console.log("what is result",result)
            dispatch({type: "LOGIN" , payload: result.jwt})
        }
        catch(err){
            console.log("err",err)
            dispatch({type: "ERROR" , payload: err.error})
        }
    }
}
// localStorage.setItem("lastname", "Smith");

// localStorage.getItem("lastname");


export const login = ( email, password) =>{
    return async (dispatch, getState) => {
        console.log("login" , email , password)
        try{
            const result = await api("/login", {
                method: "POST",
                body: {
                  email,
                  password
                }
              })
            localStorage.setItem("jwt", result.jwt);
            console.log("what is result",result)
            dispatch({type: "LOGIN" , payload: result.jwt})
        }
        catch(err){
            console.log("err",err)
            dispatch({type: "ERROR" , payload: err.error})
        }
    }
}

export const getProfile = (token) =>{
  return async (dispatch, getState) => {
    const tokenFromStore = getState().user.jwt
    try{
      if(tokenFromStore){
        console.log("use the token from reduxState" ,getState().user.jwt)
        const result = await api("/me", { jwt: getState().user.jwt })
        console.log("what is the result", result)
        dispatch({type: "REDIRECT", payload: true})
      }
      else{
        console.log("use the token from localStorage")
        const response = await api("/me", { jwt: token })
        console.log("what is the result", response)
        dispatch({type: "REDIRECT", payload: true})
        dispatch({type: "LOGIN", payload: token})
      }
    }
    catch(err){
        dispatch({type: "REDIRECT", payload: false})
       console.log("err", err)
     }
    }
}




function api(endpoint, { method = "GET", body, jwt } = {}) {
    return fetch(
      "https://codaisseur-coders-network.herokuapp.com" + endpoint,
      {
        method: method,
        headers: {
          Authorization: `Bearer ${jwt}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      }
    )
      .then(response =>  Promise.all([response.status, response.json()]))
      .then(([status, data]) => {
        if (status >= 400) {
          throw { api_error: data };
        } else {
          return data;
        }
      });
  }