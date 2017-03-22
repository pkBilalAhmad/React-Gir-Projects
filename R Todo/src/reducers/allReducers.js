import { combineReducers } from 'redux'
import reducer from './addReducer'
import reducerR from './todoR'
const allReducers = combineReducers({
    users: reducer,
    reducerR
})

export default allReducers;