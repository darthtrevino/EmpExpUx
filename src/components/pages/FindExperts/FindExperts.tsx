import React, { memo } from 'react'
import { Page } from '../../Page'
import { ExpertFilterPane } from './ExpertFilterPane'
import { EmployeeCard } from '../../EmployeeCard'
import { useEmployeeFilter } from '../../../hooks/useEmployeeFilter'
import styles from './FindExperts.module.scss'

export const FindExperts: React.FC = memo(() => {
	const [employees, handleFilterChanged] = useEmployeeFilter()
	return (
		<Page name="Find Experts">
			<ExpertFilterPane onFilterChange={handleFilterChanged} />
			<div className={styles.resultsPane}>
				<div className={styles.gutter} />
				<div className={styles.results}>
					{employees
						.filter(e => !!(e && e.email))
						.map(m => (
							<EmployeeCard key={m.id} employee={m} />
						))}
				</div>
				<div className={styles.gutter} />
			</div>
		</Page>
	)
})
