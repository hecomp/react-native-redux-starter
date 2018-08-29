import {  combineReducers } from 'redux'
import AuthReducer from './AuthReducer'
import IdeaPadReducer from './IdeaPadReducer'
import IdeasReducer from './IdeasReducer'

export default combineReducers({
    auth: AuthReducer,
    ideaPad: IdeaPadReducer,
    ideas: IdeasReducer
})