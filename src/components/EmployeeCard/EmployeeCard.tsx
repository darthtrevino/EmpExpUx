import React, { memo } from 'react'
import classnames from 'classnames'
import { Employee } from '../../api'
import styles from './EmployeeCard.module.scss'
import { EmployeeDetails } from './EmployeeDetails'
import { EmployeeInfo } from './EmployeeInfo'
import { ExpandCollapsePane } from '../ExpandCollapsePane'

export interface EmployeeCardProps {
	employee: Employee
	style?: React.CSSProperties
	className?: string
}

export const EmployeeCard: React.FC<EmployeeCardProps> = memo(
	({ employee, className, style }) => (
		<div className={classnames(styles.container, className)} style={style}>
			<ExpandCollapsePane
				title={<EmployeeInfo employee={employee} />}
				defaultExpanded={false}
			>
				<EmployeeDetails employee={employee} />
			</ExpandCollapsePane>
		</div>
	),
)
