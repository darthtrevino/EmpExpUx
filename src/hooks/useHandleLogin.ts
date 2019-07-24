import { useCallback } from 'react'
import { setCurrentUser } from '../ClientStorage'
import { useDispatch } from 'react-redux'
import {
	receiveCurrentUser,
	receiveRequestsMadeToMe,
	receiveRequestsMadeByMe,
} from '../state/actions'
import api from '../api'

export function useHandleLogin() {
	const dispatch = useDispatch()

	return useCallback(
		(login: string) => {
			// set the current user in local storagen
			setCurrentUser(login)
			api.getExpertConnections(login).then(requests => {
				const requestsMadeByMe = requests.filter(
					r => r.type === 'requestsOriginatedByMe',
				)
				const requestsMadeToMe = requests.filter(
					r => r.type === 'requestsReceivedByMe',
				)
				dispatch(receiveRequestsMadeByMe(requestsMadeByMe))
				dispatch(receiveRequestsMadeToMe(requestsMadeToMe))
			})
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
