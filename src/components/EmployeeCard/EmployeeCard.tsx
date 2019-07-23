import React, { memo, useCallback, useState } from 'react'
import styled from 'styled-components'
import { Employee } from '../../api'
import { EmployeeDetails } from './EmployeeDetails'
import { EmployeeInfo } from './EmployeeInfo'

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
			<Container className="ms-depth-8">
				<EmployeeInfo
					employee={employee}
					expanded={expanded}
					onToggleExpanded={toggleExpanded}
				/>
				{expanded ? <EmployeeDetails employee={employee} /> : null}
			</Container>
		)
	},
)

const Container = styled.div`
	margin: 20px;
	padding: 15px;
`
