import classnames from 'classnames'
import React, { memo } from 'react'
import { Employee } from '../../api'
import styles from './EmployeeCard.module.scss'
import { EmployeeDetails } from './EmployeeDetails'
import { EmployeeInfo } from './EmployeeInfo'
import { ExpandCollapsePane } from '../ExpandCollapsePane'
import { ConnectionRequestActions } from './ConnectionRequestActions'

export interface EmployeeCardProps {
	employee: Employee
}

export const EmployeeCard: React.FC<EmployeeCardProps> = memo(
	({ employee }) => (
		<div className={classnames('ms-depth-8', styles.container)}>
			<ExpandCollapsePane
				title={<EmployeeInfo employee={employee} />}
				defaultExpanded={false}
			>
				<EmployeeDetails employee={employee} />
			</ExpandCollapsePane>
			<ConnectionRequestActions employee={employee} />
		</div>
	),
)
