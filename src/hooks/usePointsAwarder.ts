import { useCurrentUser } from './useCurrentUser'
import api from '../api'
import { useCallback } from 'react'
import { useHandleLogin } from './useHandleLogin'

export function usePointsAwarder() {
	const user = useCurrentUser()
	const invalidateUser = useHandleLogin()

	const awarder = useCallback(
		(award: number) => {
			if (user) {
				api
					.addRewardPoints(user.email, award)
					.then(() => invalidateUser(user.email))
			}
		},
		[invalidateUser, user],
	)
	return awarder
}
