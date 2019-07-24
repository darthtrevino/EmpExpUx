import { useCallback } from 'react'
import api, { Employee } from '../api'
import { useCurrentUser } from './useCurrentUser'

export function useConnectionRequestHandler() {
	const currentUser = useCurrentUser()

	return useCallback(
		(targetEmployee: Employee, message: string) => {
			if (!currentUser || targetEmployee.email === currentUser.email) {
				return
			}

			const payload = {
				requestorEmail: currentUser.email,
				suggestedExpertEmail: targetEmployee.email,
				suggestionSource: 'model',
				requestorMessage: message,
				expertResponseStatus: 'NoResponse',
			}
			console.log('Sent request', payload)
			return api.addExpertConnection(payload as any).catch(err => {
				throw err
			})
		},
		[currentUser],
	)
}
