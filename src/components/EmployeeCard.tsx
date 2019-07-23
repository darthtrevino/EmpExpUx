import React from 'react'
import { Employee } from '../api'

export interface EmployeeCardProps {
	employee: Employee
}

export const EmployeeCard: React.FC<EmployeeCardProps> = ({ employee }) => {
	return (
		<div>
			<div>{employee.region}</div>
			<div>{employee.function}</div>
			<div>{employee.email}</div>
			<div>{employee.organization}</div>
			<div>{employee.projects}</div>
			<div>{employee.skills}</div>
			<div>{employee.topics}</div>
		</div>
	)
}
