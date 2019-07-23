import React, { memo, useCallback, useState } from 'react'
import classnames from 'classnames'
import { Employee } from '../../api'
import { EmployeeDetails } from './EmployeeDetails'
import { EmployeeInfo } from './EmployeeInfo'
import styles from './EmployeeCard.module.scss'

export interface EmployeeCardProps {
	employee: Employee
}

export const EmployeeCard: React.FC<EmployeeCardProps> = memo(
	({ employee }) => {
		const [expanded, setExpanded] = useState(false)
		const toggleExpanded = useCallback(() => setExpanded(!expanded), [
			expanded,
			setExpanded,
		])
		return (
			<div className={classnames('ms-depth-8', styles.container)}>
				<EmployeeInfo
					employee={employee}
					expanded={expanded}
					onToggleExpanded={toggleExpanded}
				/>
				{expanded ? <EmployeeDetails employee={employee} /> : null}
			</div>
		)
	},
)
