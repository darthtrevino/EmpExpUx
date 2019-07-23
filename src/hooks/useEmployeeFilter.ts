import { useState, useCallback } from 'react'
import { debounce } from 'lodash'
import api, { Employee, FilterExpression } from '../api'

const FILTER_DEBOUNCE = 250

export function useEmployeeFilter(): [
	Employee[],
	(filter: FilterExpression) => void,
] {
	const [matches, setMatches] = useState<Employee[]>([])
	const handleFilterChanged = useCallback(
		debounce((expr: FilterExpression) => {
			api.getEmployees(expr).then(result => setMatches(result))
		}, FILTER_DEBOUNCE),
		[setMatches],
	)

	return [matches, handleFilterChanged]
}
