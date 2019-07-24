import { useCallback } from 'react'
import { setCurrentUser } from '../ClientStorage'
import { useDispatch } from 'react-redux'
import { loadCurrentUserData } from '../loadCurrentUserData'

export function useHandleLogin() {
	const dispatch = useDispatch()

	return useCallback(
		(login: string) => {
			// set the current user in local storagen
			setCurrentUser(login)
			loadCurrentUserData()
		},
		[dispatch],
	)
}
