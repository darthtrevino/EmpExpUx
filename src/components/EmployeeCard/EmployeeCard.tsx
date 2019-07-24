import classnames from 'classnames'
import { PrimaryButton } from 'office-ui-fabric-react'
import React, { memo, useCallback, useState } from 'react'
import { Employee } from '../../api'
import styles from './EmployeeCard.module.scss'
import { EmployeeDetails } from './EmployeeDetails'
import { EmployeeInfo } from './EmployeeInfo'
import { useConnectionRequestHandler } from '../../hooks/useConnectionRequestHandler'
import { ConnectionRequestModal } from './ConnectionReqestModal'

export interface EmployeeCardProps {
	employee: Employee
}

export const EmployeeCard: React.FC<EmployeeCardProps> = memo(
	({ employee }) => {
		const [expanded, setExpanded] = useState(false)
		const [modalOpen, setModalOpen] = useState(false)
		const [requestSent, setRequestSent] = useState(false)
		const toggleExpanded = useCallback(() => setExpanded(!expanded), [
			expanded,
			setExpanded,
		])
		const requestConnection = useConnectionRequestHandler()
		const handleConnectionRequest = useCallback(
			(message: string) => {
				setModalOpen(false)
				requestConnection(employee, message)
				setRequestSent(true)
			},
			[employee, requestConnection],
		)
		const handleClickConnection = useCallback(() => {
			setModalOpen(true)
		}, [])

		return (
			<div className={classnames('ms-depth-8', styles.container)}>
				<EmployeeInfo
					employee={employee}
					expanded={expanded}
					onToggleExpanded={toggleExpanded}
				/>
				{expanded ? <EmployeeDetails employee={employee} /> : null}
				<ConnectionRequestModal
					isOpen={modalOpen}
					onDismiss={() => setModalOpen(false)}
					onSend={handleConnectionRequest}
				/>
				<div className={styles.actionPane}>
					<PrimaryButton disabled={requestSent} onClick={handleClickConnection}>
						{requestSent ? 'Request Sent!' : 'Write Connection Request'}
					</PrimaryButton>
				</div>
			</div>
		)
	},
)
