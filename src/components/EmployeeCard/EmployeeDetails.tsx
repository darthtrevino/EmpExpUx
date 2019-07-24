import React, { memo } from 'react'
import { Employee } from '../../api'
import { TagAttribute } from './TagAttribute'
import styles from './Attributes.module.scss'

interface EmployeeDetailsProps {
	employee: Employee
}

export const EmployeeDetails: React.FC<EmployeeDetailsProps> = memo(
	({ employee }) => (
		<div className={styles.attributesPane}>
			<TagAttribute name="Projects" value={employee.projects} />
			<TagAttribute name="Skills" value={employee.skills} />
			<TagAttribute name="Topics" value={employee.topics} />
		</div>
	),
)
