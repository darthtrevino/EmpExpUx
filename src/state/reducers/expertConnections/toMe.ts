import { Action } from 'redux-actions'
import { ExpertConnection } from '../../../api'
import { RECEIVE_REQUESTS_MADE_TO_ME } from '../../actions'

export type State = ExpertConnection[]

export default function byMe(state: State = [], action: Action<any>) {
	if (action.type === RECEIVE_REQUESTS_MADE_TO_ME) {
		return action.payload
	}
	return state
}
