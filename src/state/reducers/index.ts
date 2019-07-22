import { Action } from 'redux-actions'

export interface State {}

export default function reduce(state: State = {}, action: Action<any>) {
	return state
}
