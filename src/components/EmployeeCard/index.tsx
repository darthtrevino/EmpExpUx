import React from 'react'
import styled from 'styled-components'
import { Employee } from '../../api'
import { Attribute } from './Attribute'
import { TagAttribute } from './TagAttribute'

export interface EmployeeCardProps {
	employee: Employee
}

export const EmployeeCard: React.FC<EmployeeCardProps> = ({ employee }) => {
	return (
		<Container className="ms-depth-8">
			<Email>{employee.email}</Email>
			<AttributesPane>
				<Attribute name="Region" value={employee.region} />
				<Attribute name="Function" value={employee.function} />
				<Attribute name="Organization" value={employee.organization} />
				<TagAttribute name="Projects" value={employee.projects} />
				<TagAttribute name="Skills" value={employee.skills} />
				<TagAttribute name="Topics" value={employee.topics} />
			</AttributesPane>
		</Container>
	)
}

const AttributesPane = styled.div`
	padding: 50px;
	margin-left: 50px;
	margin-right: 50px;
`

const Email = styled.div`
	font-size: 24px;
	font-weight: 300;
`

const Container = styled.div`
	margin: 20px;
	padding: 15px;
	text-align: left;
`
