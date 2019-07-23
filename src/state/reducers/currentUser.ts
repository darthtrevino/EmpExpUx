import { Action } from 'redux-actions'
import { RECEIVE_CURRENT_USER } from '../actions'

export type State = string | null

export default function reduce(state = null, action: Action<any>) {
	if (action.type === RECEIVE_CURRENT_USER) {
		return action.payload
	}
	return state
}
