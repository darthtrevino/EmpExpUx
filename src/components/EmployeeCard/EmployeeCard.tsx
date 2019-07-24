import classnames from 'classnames'
import { PrimaryButton } from 'office-ui-fabric-react'
import React, { memo, useCallback, useState } from 'react'
import { Employee } from '../../api'
import styles from './EmployeeCard.module.scss'
import { EmployeeDetails } from './EmployeeDetails'
import { EmployeeInfo } from './EmployeeInfo'
import { useConnectionRequestHandler } from '../../hooks/useConnectionRequestHandler'

export interface EmployeeCardProps {
	employee: Employee
}

export const EmployeeCard: React.FC<EmployeeCardProps> = memo(
	({ employee }) => {
		const [expanded, setExpanded] = useState(false)
		const [requestSent, setRequestSent] = useState(false)
		const toggleExpanded = useCallback(() => setExpanded(!expanded), [
			expanded,
			setExpanded,
		])
		const requestConnection = useConnectionRequestHandler()
		const handleConnectionRequest = useCallback(() => {
			requestConnection(
				employee,
				'I need help with React routing and C# API integration',
			)
			setRequestSent(true)
		}, [employee, requestConnection])

		return (
			<div className={classnames('ms-depth-8', styles.container)}>
				<EmployeeInfo
					employee={employee}
					expanded={expanded}
					onToggleExpanded={toggleExpanded}
				/>
				{expanded ? <EmployeeDetails employee={employee} /> : null}
				<div className={styles.actionPane}>
					<PrimaryButton
						disabled={requestSent}
						onClick={handleConnectionRequest}
					>
						{requestSent ? 'Request Sent!' : 'Request Connection'}
					</PrimaryButton>
				</div>
			</div>
		)
	},
)
