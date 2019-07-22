import { Action } from 'redux-actions'
import { RECEIVE_API_PROJECTS } from '../../actions'
export type State = string[]

export default function reduce(state = [], action: Action<any>) {
	if (action.type === RECEIVE_API_PROJECTS) {
		return action.payload
	}
	return state
}
