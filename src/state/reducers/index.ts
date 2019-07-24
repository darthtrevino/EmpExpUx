import { combineReducers } from 'redux'
import apicache, { State as ApiCacheState } from './apicache'
import currentUser, { State as CurrentUserState } from './currentUser'
import expertConnections, {
	State as ExperConnectionsState,
} from './expertConnections'

export interface State {
	apicache: ApiCacheState
	currentUser: CurrentUserState
	expertConnections: ExperConnectionsState
}

export default combineReducers({ apicache, currentUser, expertConnections })
