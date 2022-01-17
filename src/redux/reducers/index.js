import { combineReducers } from 'redux'
import { postReducer } from './postReducer'
import { showReducer } from './showReducer'
import { followReducer } from './followReducer'
import { mypostReducer } from './mypostReducer'
import { searchstringReducer} from './searchstringReducer'
import { searchpostReducer} from './searchpostReducer'

const reducers = combineReducers({
    allPosts: postReducer,
    allFollows: followReducer,
    allPost: showReducer,
    myPosts: mypostReducer,
    searchString: searchstringReducer,
    searchPosts: searchpostReducer,
})

export default reducers