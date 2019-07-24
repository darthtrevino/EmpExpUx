import { useCallback } from 'react'
import api, { Employee } from '../api'
import { useCurrentUser } from './useCurrentUser'

export function useConnectionRequestHandler() {
	const currentUser = useCurrentUser()

	return useCallback(
		(targetEmployee: Employee, message: string) => {
			if (!currentUser) {
				return
			}
			api.addExpertConnection({
				requestorEmail: currentUser.email,
				suggestedExpertEmail: targetEmployee.email,
				suggestionSource: 'model',
				requestorMessage: message,
				expertResponseStatus: 'NoResponse',
				referredToEmail: 'None',
				responseTimeInHours: 0,
			} as any)
			console.log('Make Connection with', targetEmployee)
		},
		[currentUser],
	)
}
