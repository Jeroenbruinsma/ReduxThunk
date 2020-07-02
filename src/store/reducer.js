import {combineReducers} from "redux"
import countriesReducer from './countries/reducer'
import userReducer from "./user/reducer"


const reducer = combineReducers(
    {
        countries: countriesReducer,
        user: userReducer
    }
)

export default reducer

