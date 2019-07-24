import api from '../api'
import { useCallback } from 'react'

export function useRespondToConnectionHandlers(): [
	(id: string, message: string) => void,
	(id: string, message: string) => void,
] {
	const accepter = useCallback((id: string, message: string) => {
		api.acceptExpertConnection(id, message)
	}, [])
	const rejecter = useCallback((id: string, message: string) => {
		api.acceptExpertConnection(id, message)
	}, [])
	return [accepter, rejecter]
}
