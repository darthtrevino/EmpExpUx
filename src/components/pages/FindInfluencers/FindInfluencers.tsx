import React, { memo } from 'react'
import { Page } from '../../Page'
import { EmployeeCard } from '../../EmployeeCard'
import { useEmployeeFilter } from '../../../hooks/useEmployeeFilter'
import { InfluencerFilterPane } from './InfluencerFilterPane'

export const FindInfluencers: React.FC = memo(() => {
	const [employees, handleFilterChanged] = useEmployeeFilter()
	return (
		<Page name="Find Influencers">
			<InfluencerFilterPane onFilterChange={handleFilterChanged} />
			<div>
				<ul>
					{employees
						.filter(e => !!(e && e.email))
						.map(m => (
							<EmployeeCard key={m.id} employee={m} />
						))}
				</ul>
			</div>
		</Page>
	)
})
