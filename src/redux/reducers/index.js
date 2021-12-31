import { combineReducers } from 'redux'
import { postReducer, selectedPostReducer} from './postReducer'

const reducers = combineReducers({
    allPosts: postReducer,
    post: selectedPostReducer,
})

export default reducers