import byMe, { State as ByMeState } from './byMe'
import toMe, { State as ToMeState } from './toMe'
import { combineReducers } from 'redux'

export interface State {
	byMe: ByMeState
	toMe: ToMeState
}

export default combineReducers({ byMe, toMe })
