import { combineReducers } from 'redux'
import apicache, { State as ApiCacheState } from './apicache'
import currentUser, { State as CurrentUserState } from './currentUser'

export interface State {
	apicache: ApiCacheState
	currentUser: CurrentUserState
}

export default combineReducers({ apicache, currentUser })
