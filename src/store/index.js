import {createStore, compose} from "redux"
import reducer from "./reducer"

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const enhancer = compose(devTools)

const store = createStore(reducer, enhancer)


export default store