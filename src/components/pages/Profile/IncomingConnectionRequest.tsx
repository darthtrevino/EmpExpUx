import React, { memo, useCallback, useState } from 'react'
import {
	Persona,
	PersonaSize,
	Text,
	DefaultButton,
	PrimaryButton,
} from 'office-ui-fabric-react'
import { ExpertConnection } from '../../../api'
import styles from './IncomingConnectionRequest.module.scss'
import classnames from 'classnames'
import { useRespondToConnectionHandlers } from '../../../hooks/useRespondToConnectionHandlers'
import { RespondToRequestModal } from './RespondToRequestModal'

export interface IncomingConnectionRequestProps {
	connection: ExpertConnection
}

export const IncomingConnectionRequest: React.FC<
	IncomingConnectionRequestProps
> = memo(({ connection }) => {
	const [accept, decline] = useRespondToConnectionHandlers()
	const [responded, setResponded] = useState(
		isRespondedStatus(connection.expertResponseStatus),
	)
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [action, setAction] = useState('')
	const handleCloseModal = useCallback(() => setIsModalOpen(false), [
		setIsModalOpen,
	])

	const onDismiss = useCallback(() => {
		setAction('Dismiss')
		setIsModalOpen(true)
	}, [])
	const onAccept = useCallback(() => {
		setAction('Accept')
		setIsModalOpen(true)
	}, [])

	const onRefer = useCallback(() => {
		// TODO
	}, [])

	const handleModalAction = useCallback(
		(message: string) => {
			setIsModalOpen(false)
			// TODO handle refer
			if (connection.id) {
				if (action === 'Dismiss') {
					decline(connection.id, message)
				} else {
					accept(connection.id, message)
				}
				setResponded(true)
			}
		},
		[accept, decline, action, connection],
	)
	return (
		<div className={classnames(styles.container, 'ms-depth-8')}>
			<div className={styles.header}>
				<Persona size={PersonaSize.size32} text={connection.requestorEmail} />
				<div className={styles.status}>{connection.expertResponseStatus}</div>
			</div>
			<div className={styles.messageContainer}>
				<Text className={styles.messageContainer} variant="mediumPlus">
					{connection.requestorMessage}
				</Text>
			</div>
			<RespondToRequestModal
				action={action}
				isOpen={isModalOpen}
				onDismiss={handleCloseModal}
				onSend={handleModalAction}
			/>
			<div className={styles.actionPane}>
				<div className={styles.actionPane}>
					<DefaultButton
						className={styles.actionButton}
						onClick={onDismiss}
						disabled={responded}
						text="Dismiss"
					/>
					<PrimaryButton
						className={styles.actionButton}
						onClick={onAccept}
						disabled={responded}
						text="Accept"
					/>
					<PrimaryButton
						className={styles.actionButton}
						onClick={onRefer}
						disabled={responded}
						text="Refer"
					/>
				</div>
			</div>
		</div>
	)
})

const isRespondedStatus = (status: string) =>
	status === 'Accepted' || status === 'Referred'
