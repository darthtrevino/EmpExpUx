import { useSelector, useDispatch } from 'react-redux'
import { State } from '../state/reducers'
import { useEffect } from 'react'
import api from '../api'
import { receiveApiUsers } from '../state/actions'

// wildly insecure, for demo purposes only
export function useAvailableUsers() {
	const users = useSelector((state: State) => state.apicache.users)
	const dispatch = useDispatch()
	useEffect(() => {
		if (users.length === 0) {
			api
				.getEmployees()
				.then(result => dispatch(receiveApiUsers(result.map(e => e.email))))
		}
	}, [users, dispatch])
	return users
}
