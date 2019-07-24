import { combineReducers } from 'redux'
import apicache, { State as ApiCacheState } from './apicache'
import currentUser, { State as CurrentUserState } from './currentUser'
import expertConnections, {
	State as ExperConnectionsState,
} from './expertConnections'
import kudos, { State as KudosState } from './kudos'

export interface State {
	apicache: ApiCacheState
	currentUser: CurrentUserState
	expertConnections: ExperConnectionsState
	kudos: KudosState
}

export default combineReducers({
	apicache,
	currentUser,
	expertConnections,
	kudos,
})
