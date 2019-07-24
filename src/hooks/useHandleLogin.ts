import { useCallback } from 'react'
import { setCurrentUser } from '../ClientStorage'
import { loadCurrentUserData } from '../loadCurrentUserData'

export function useHandleLogin() {
	return useCallback((login: string) => {
		// set the current user in local storagen
		setCurrentUser(login)
		loadCurrentUserData()
	}, [])
}
