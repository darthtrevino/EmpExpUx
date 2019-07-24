import { useCallback } from 'react'
import { setCurrentUser } from '../ClientStorage'
import { useDispatch } from 'react-redux'
import { receiveCurrentUser } from '../state/actions'
import api from '../api'

export function useHandleLogin() {
	const dispatch = useDispatch()

	return useCallback(
		(login: string) => {
			// set the current user in local storagen
			setCurrentUser(login)
			api.getEmployees().then(employees => {
				const found = employees.find(e => e.email === login)
				if (found) {
					dispatch(receiveCurrentUser(found))
				}
			})
		},
		[dispatch],
	)
}
