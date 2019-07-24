import React, { memo, useState, useCallback } from 'react'
import styles from './ConnectionRequestActions.module.scss'
import { PrimaryButton } from 'office-ui-fabric-react'
import { ConnectionRequestModal } from '../../EmployeeCard/ConnectionReqestModal'
import { useConnectionRequestHandler } from '../../../hooks/useConnectionRequestHandler'
import { Employee } from '../../../api'

export interface ConnectionRequestActionsProps {
	employees: Employee[]
}

export const ConnectionRequestActions: React.FC<
	ConnectionRequestActionsProps
> = memo(({ employees }) => {
	const [modalOpen, setModalOpen] = useState(false)
	const [requestSent, setRequestSent] = useState(false)
	const requestConnection = useConnectionRequestHandler()
	const handleConnectionRequest = useCallback(
		(message: string) => {
			setModalOpen(false)
			Promise.all(employees.map(e => requestConnection(e, message))).then(() =>
				setRequestSent(true),
			)
		},
		[employees, requestConnection],
	)
	const handleClickConnection = useCallback(() => {
		setModalOpen(true)
	}, [])

	return (
		<div className={styles.actionPane}>
			<ConnectionRequestModal
				isOpen={modalOpen}
				onDismiss={() => setModalOpen(false)}
				onSend={handleConnectionRequest}
			/>
			<PrimaryButton disabled={requestSent} onClick={handleClickConnection}>
				{requestSent ? 'Request Sent!' : 'Write Connection Request'}
			</PrimaryButton>
		</div>
	)
})
