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
			}
			console.log('Sent request', payload)
			return api
				.addExpertConnection(payload as any)
				.then(() => console.log(`Request to ${targetEmployee.email} OK`))
				.catch(err => {
					console.log('Error with request', payload)
					throw err
				})
		},
		[currentUser],
	)
}
