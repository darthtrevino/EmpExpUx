import { useCallback } from 'react'
import { setCurrentUser } from '../ClientStorage'
import { useDispatch } from 'react-redux'
import { receiveCurrentUser } from '../state/actions'

export function useHandleLogin() {
	const dispatch = useDispatch()

	const handleLogin = useCallback(
		(login: string) => {
			setCurrentUser(login)
			dispatch(receiveCurrentUser(login))
		},
		[dispatch],
	)

	return handleLogin
}
