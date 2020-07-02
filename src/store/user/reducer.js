const initialState = {
    userName: "Pien@hotmail.com",
    name: "pien",
    avatar: "logo.png",
   
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case "LOGIN":
        return {...state,
                jwt: payload}


    default:
        return state
    }
}
