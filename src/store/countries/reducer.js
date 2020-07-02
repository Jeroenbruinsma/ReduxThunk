const initialState = [{name: "PienLand", population: 1, area: .2}]

export default (state = initialState, { type, payload }) => {
    console.log("4. in the reducer type:", type, "PL:"  , payload )
    switch (type) {
        
        case "RESET":
            return initialState

        case "FETCH_COUNTRIES":
            console.log("5. in the Case of FETCH_COUNTRIES")
        return [ ...payload ]
        case "FETCH_ONE_COUNTRY":
            return [ ...state, ...payload ]
        case "RESET_COUNTRIES":
            return initialState

    default:
        return state
    }
}