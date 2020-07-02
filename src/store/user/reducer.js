const initialState = {
   
   
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case "LOGIN":
        return {    ...state,
                    jwt: payload,
                    redirect: true
                }
    case "REDIRECT":
            return {...state, redirect: payload}

    case "LOGOUT":
        localStorage.removeItem("jwt")
        return {}


    default:
        return state
    }
}
