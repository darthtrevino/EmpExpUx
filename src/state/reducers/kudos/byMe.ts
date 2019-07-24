import { Action } from 'redux-actions'
import { Kudo } from '../../../api'
import { RECEIVE_KUDOS_FROM_ME } from '../../actions'

export type State = Kudo[]

export default function byMe(state: State = [], action: Action<any>) {
	if (action.type === RECEIVE_KUDOS_FROM_ME) {
		return action.payload
	}
	return state
}
