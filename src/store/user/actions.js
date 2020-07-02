

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
            
            console.log("what is result",result)
            dispatch({type: "LOGIN" , payload: result.jwt})
        }
        catch(err){
            console.log("err",err)
            dispatch({type: "ERROR" , payload: err.error})
        }
    }
}

export const getProfile = () =>{
  return async (dispatch, getState) => {
    console.log("token" ,getState().user.jwt)
    api("/me", { jwt: getState().user.jwt })
    .then(data => console.log("data", data))
    .catch(err => console.log("err", err));
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