import React, { memo, useMemo, useCallback } from 'react'
import {
	Persona,
	PersonaSize,
	Icon,
	IPersonaSharedProps,
	IPersonaProps,
	PersonaPresence,
} from 'office-ui-fabric-react'
import styled from 'styled-components'
import { Employee } from '../../api'

interface EmployeeInfoProps {
	employee: Employee
	expanded: boolean
	onToggleExpanded: () => void
}

export const EmployeeInfo: React.FC<EmployeeInfoProps> = memo(
	({ employee, expanded, onToggleExpanded }) => {
		const personaData: IPersonaSharedProps = useMemo(
			() => ({
				imageUrl: undefined,
				imageInitials: 'AL',
				text: employee.email,
				secondaryText: `${employee.function} in ${employee.organization}, ${employee.region} region`,
				tertiaryText: 'In a meeting',
				optionalText: 'Available at 4:00pm',
				presence: randPresense(),
			}),
			[employee],
		)

		const onRenderSecondaryText = useCallback(
			(props: IPersonaProps): JSX.Element => (
				<div>
					<RoleIcon iconName={'Suitcase'} />
					{props.secondaryText}
				</div>
			),
			[],
		)

		return (
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-between',
				}}
			>
				<Persona
					{...personaData}
					size={PersonaSize.size72}
					onRenderSecondaryText={onRenderSecondaryText as any}
				/>
				<ExpandIcon
					iconName={expanded ? 'ChevronDown' : 'ChevronUp'}
					onClick={onToggleExpanded}
				/>
			</div>
		)
	},
)

// For demo only
const randPresense = () =>
	(1 + Math.floor(Math.random() * 6.5)) as PersonaPresence

const ExpandIcon = styled(Icon)`
	cursor: default;
`
const RoleIcon = styled(Icon)`
	margin-right: 5px;
`
