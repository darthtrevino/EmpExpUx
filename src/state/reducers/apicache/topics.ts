import { Action } from 'redux-actions'
import { RECEIVE_API_TOPICS } from '../../actions'
import { Topic } from '../../../api'

export type State = Topic[]

export default function reduce(state = [], action: Action<any>) {
	if (action.type === RECEIVE_API_TOPICS) {
		return action.payload
	}
	return state
}
