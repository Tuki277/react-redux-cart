import { combineReducers } from 'redux'
import product from './product'

const appReducers = combineReducers({
    product : product
})

export default appReducers