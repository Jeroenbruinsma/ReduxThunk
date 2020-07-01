import {combineReducers} from "redux"
import countriesReducer from './countries/reducer'


const reducer = combineReducers(
    {
        countries: countriesReducer,
    }
)

export default reducer

