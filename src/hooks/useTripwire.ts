import { useState, useCallback } from 'react'

/**
 * A hook that exposes an "tripwire" - a boolean
 * which can be marked as true via the provided function
 */
export function useTripwire(): [boolean, () => void] {
	const [flag, setFlag] = useState(false)
	const tripwire = useCallback(() => setFlag(true), [setFlag])
	return [flag, tripwire]
}
