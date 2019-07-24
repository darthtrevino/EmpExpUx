import React, { memo, useState, useCallback } from 'react'
import styles from './ConnectionRequestActions.module.scss'
import { PrimaryButton } from 'office-ui-fabric-react'
import { ConnectionRequestModal } from './ConnectionReqestModal'
import { useConnectionRequestHandler } from '../../hooks/useConnectionRequestHandler'
import { Employee } from '../../api'

export interface ConnectionRequestActionsProps {
	employee: Employee
}

export const ConnectionRequestActions: React.FC<
	ConnectionRequestActionsProps
> = memo(({ employee }) => {
	const [modalOpen, setModalOpen] = useState(false)
	const [requestSent, setRequestSent] = useState(false)
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
