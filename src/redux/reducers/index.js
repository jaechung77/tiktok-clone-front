import { combineReducers } from 'redux'
import { postReducer, selectedPostReducer} from './postReducer'
import { setTokenReducer, setUserNicknameReducer} from './userReducer'

const reducers = combineReducers({
    allPosts: postReducer,
    post: selectedPostReducer,
    token: setTokenReducer,
    nickname: setUserNicknameReducer,
})

export default reducers