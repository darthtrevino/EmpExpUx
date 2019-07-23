import { useSelector } from 'react-redux'
import { State } from '../state/reducers'

export function useCurrentUser() {
	return useSelector((state: State) => state.currentUser)
}
