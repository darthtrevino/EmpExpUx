import React, { memo } from 'react'
import { Employee } from '../../api'
import { TagAttribute } from './TagAttribute'
import { NumericAttribute } from './NumericAttribute'
import styles from './Attributes.module.scss'

interface EmployeeDetailsProps {
	employee: Employee
}

export const EmployeeDetails: React.FC<EmployeeDetailsProps> = memo(
	({ employee }) => {
		return (
			<div className={styles.attributesPane}>
				<TagAttribute name="Projects" value={employee.projects} />
				<TagAttribute name="Skills" value={employee.skills} />
				<TagAttribute name="Topics" value={employee.topics} />
				<NumericAttribute
					name="Eigen Centrality"
					value={employee.eigenCentrality * 100}
					color="crimson"
				/>
				<NumericAttribute
					name="Betweenness"
					value={employee.betweenness * 100}
					color="grey"
				/>
				<NumericAttribute
					name="PageRank"
					value={employee.pageRank * 100}
					color="gold"
				/>
			</div>
		)
	},
)
