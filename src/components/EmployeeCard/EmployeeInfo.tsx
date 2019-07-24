import React, { memo, useMemo, useCallback } from 'react'
import {
	Persona,
	PersonaSize,
	Icon,
	IPersonaSharedProps,
	IPersonaProps,
	PersonaPresence,
} from 'office-ui-fabric-react'
import { Employee } from '../../api'
import styles from './EmployeeInfo.module.scss'

const HumanHash = require('humanhash')
const hh = new HumanHash()

interface EmployeeInfoProps {
	employee: Employee
}

const degreeOptions = ['1st', '2nd', '3rd', '4th']

export const EmployeeInfo: React.FC<EmployeeInfoProps> = memo(
	({ employee }) => {
		const personaData: IPersonaSharedProps = useMemo(
			() => ({
				imageUrl: undefined,
				imageInitials: 'AL',
				text: hh.humanize(employee.email),
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
					<Icon className={styles.roleIcon} iconName={'Suitcase'} />
					{props.secondaryText}
				</div>
			),
			[],
		)

		const degree = useMemo(
			() =>
				degreeOptions[Math.floor(Math.random() * 100) % degreeOptions.length],
			[],
		)

		return (
			<div className={styles.container}>
				<Persona
					{...personaData}
					size={PersonaSize.size72}
					onRenderSecondaryText={onRenderSecondaryText as any}
				/>
				<div className={styles.metricsPane}>
					<div className={styles.metric}>97/100 Influencer</div>
					<div className={styles.degreeConnection}>{degree}</div>
				</div>
			</div>
		)
	},
)

// For demo only
const randPresense = () =>
	(1 + Math.floor(Math.random() * 6.5)) as PersonaPresence
