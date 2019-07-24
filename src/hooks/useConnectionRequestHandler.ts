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
			console.log('PAYLOAD', payload)
			return api.addExpertConnection(payload as any).catch(err => {
				console.log('CAUGHT ON ', targetEmployee)
				throw err
			})
		},
		[currentUser],
	)
}
