import { Action } from 'redux-actions'
import { RECEIVE_API_PROJECTS } from '../../actions'
import { Project } from '../../../api'

export type State = Project[]

export default function reduce(state = [], action: Action<any>) {
	if (action.type === RECEIVE_API_PROJECTS) {
		return action.payload
	}
	return state
}
