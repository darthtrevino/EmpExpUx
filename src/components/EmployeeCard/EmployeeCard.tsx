import React, { memo, useMemo, useCallback } from 'react'
import {
	Persona,
	IPersonaSharedProps,
	PersonaSize,
	PersonaPresence,
	IPersonaProps,
	Icon,
} from 'office-ui-fabric-react'
import styled from 'styled-components'
import { Employee } from '../../api'
import { TagAttribute } from './TagAttribute'
import { NumericAttribute } from './NumericAttribute'

export interface EmployeeCardProps {
	employee: Employee
}

// For demo only
const randPresense = () =>
	(1 + Math.floor(Math.random() * 6.5)) as PersonaPresence

export const EmployeeCard: React.FC<EmployeeCardProps> = memo(
	({ employee }) => {
		const _onRenderSecondaryText = useCallback(
			(props: IPersonaProps): JSX.Element => {
				return (
					<div>
						<RoleIcon iconName={'Suitcase'} />
						{props.secondaryText}
					</div>
				)
			},
			[],
		)

		const personaData: IPersonaSharedProps = useMemo(() => {
			return {
				imageUrl: undefined, // TestImages.personaFemale,
				imageInitials: 'AL',
				text: employee.email,
				secondaryText: `${employee.function} in ${employee.organization}, ${employee.region} region`,
				tertiaryText: 'In a meeting',
				optionalText: 'Available at 4:00pm',
				presence: randPresense(),
			}
		}, [employee])
		return (
			<Container className="ms-depth-8">
				<Persona
					{...personaData}
					size={PersonaSize.size72}
					onRenderSecondaryText={_onRenderSecondaryText as any}
				/>
				<AttributesPane>
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
				</AttributesPane>
			</Container>
		)
	},
)

const RoleIcon = styled(Icon)`
	margin-right: 5px;
`

const AttributesPane = styled.div`
	padding: 50px;
	margin-left: 50px;
	margin-right: 50px;
`

const Container = styled.div`
	margin: 20px;
	padding: 15px;
	text-align: left;
`
