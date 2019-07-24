import React, { memo, useCallback } from 'react'
import classnames from 'classnames'
import { Checkbox } from 'office-ui-fabric-react'
import styles from './CheckableEmployeeCard.module.scss'
import { EmployeeCard } from '../../EmployeeCard'
import { Employee } from '../../../api'

export interface CheckableEmployeeCardProps {
	employee: Employee
	checked: boolean
	onCheckedChange: (value: boolean) => void
}

export const CheckableEmployeeCard: React.FC<CheckableEmployeeCardProps> = memo(
	({ employee, checked, onCheckedChange }) => {
		const handleCheckChange = useCallback(
			(evt, checked) => onCheckedChange(checked),
			[onCheckedChange],
		)
		return (
			<div className={classnames('ms-depth-8', styles.employeeCard)}>
				<Checkbox checked={checked} onChange={handleCheckChange} />
				<EmployeeCard employee={employee} className={styles.cardDetail} />
			</div>
		)
	},
)
