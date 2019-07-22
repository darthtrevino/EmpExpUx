import { Action } from 'redux-actions'
import { RECEIVE_API_SKILLS } from '../../actions'
import { Skill } from '../../../api'

export type State = Skill[]

export default function reduce(state = [], action: Action<any>) {
	if (action.type === RECEIVE_API_SKILLS) {
		return action.payload
	}
	return state
}
