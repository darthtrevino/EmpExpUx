import { Action } from 'redux-actions'
import { RECEIVE_API_USERS } from '../../actions'

export type State = string[]

export default function reduce(state = [], action: Action<any>) {
	if (action.type === RECEIVE_API_USERS) {
		return action.payload
	}
	return state
}
