import React, { useCallback, useState } from 'react'
import { Page } from '../../Page'
import { FilterPane } from './FilterPane'
import { EmployeeCard } from '../../EmployeeCard'
import api, { FilterExpression, Employee } from '../../../api'

export const FindExperts: React.FC = () => {
	const [matches, setMatches] = useState<Employee[]>([])
	const handleFilterChanged = useCallback(
		(expr: FilterExpression) => {
			api.getEmployees(expr).then(result => setMatches(result))
		},
		[setMatches],
	)
	return (
		<Page name="Find Experts">
			<FilterPane onFilterChange={handleFilterChanged} />
			<div>
				<ul>
					{matches.map(m => (
						<EmployeeCard employee={m} />
					))}
				</ul>
			</div>
		</Page>
	)
}
