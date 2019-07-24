import React, { memo, useState } from 'react'
import { Page } from '../../Page'
import { ExpertFilterPane } from './ExpertFilterPane'
import { useEmployeeFilter } from '../../../hooks/useEmployeeFilter'
import styles from './FindExperts.module.scss'
import { CheckableEmployeeCard } from './CheckableEmployeeCard'
import { Employee } from '../../../api'
import { useCurrentUser } from '../../../hooks/useCurrentUser'
export const FindExperts: React.FC = memo(() => {
	const [employees, handleFilterChanged] = useEmployeeFilter()
	const [selectedEmployees, setSelectedEmployees] = useState<Employee[]>([])
	const currentUser = useCurrentUser()

	return (
		<Page name="Find Experts">
			<ExpertFilterPane
				onFilterChange={handleFilterChanged}
				selectedEmployees={selectedEmployees}
			/>
			<div className={styles.resultsPane}>
				<div className={styles.gutter} />
				<div className={styles.results}>
					{employees
						.filter(e => !!(e && e.email))
						.filter(e => (currentUser ? e.email !== currentUser.email : true))
						.map(e => (
							<CheckableEmployeeCard
								key={e.id}
								employee={e}
								checked={selectedEmployees.some(s => s.email === e.email)}
								onCheckedChange={checked => {
									if (checked) {
										setSelectedEmployees([...selectedEmployees, e])
									} else {
										setSelectedEmployees(
											selectedEmployees.filter(s => s.email !== e.email),
										)
									}
								}}
							/>
						))}
				</div>
				<div className={styles.gutter} />
			</div>
		</Page>
	)
})
