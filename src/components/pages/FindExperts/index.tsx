import React, { memo } from 'react'
import { Page } from '../../Page'
import { ExpertFilterPane } from './ExpertFilterPane'
import { EmployeeCard } from '../../EmployeeCard'
import { useEmployeeFilter } from '../../../hooks/useEmployeeFilter'

export const FindExperts: React.FC = memo(() => {
	const [employees, handleFilterChanged] = useEmployeeFilter()
	return (
		<Page name="Find Experts">
			<ExpertFilterPane onFilterChange={handleFilterChanged} />
			<div>
				<ul>
					{employees.map(m => (
						<EmployeeCard key={m.id} employee={m} />
					))}
				</ul>
			</div>
		</Page>
	)
})
