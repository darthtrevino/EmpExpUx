import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer, { State } from './reducers'
import { getCurrentUser } from '../ClientStorage'
const logger = createLogger({})

const initialState: State = {
	currentUser: getCurrentUser(),
	apicache: {
		projects: [],
		skills: [],
		topics: [],
		users: [],
	},
}

const composeEnhancers =
	(window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
	rootReducer,
	initialState,
	composeEnhancers(applyMiddleware(thunk, logger)),
)
export default store
