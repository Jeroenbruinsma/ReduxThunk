const initialState = [{name: "PienLand", population: 1, area: .2}]

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case "FETCH_COUNTRIES":
        return [ ...payload ]
    case "FETCH_ONE_COUNTRY":
        return [ ...state, ...payload ]
    case "RESET_COUNTRIES":
        return initialState

    default:
        return state
    }
}