import apicache, { State as ApiCacheState } from './apicache'
import { combineReducers } from 'redux'

export interface State {
	apicache: ApiCacheState
}

export default combineReducers({ apicache })
