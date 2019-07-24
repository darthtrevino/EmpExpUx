import React, { useState, useCallback, memo } from 'react'
import {
	TextField,
	Modal,
	DefaultButton,
	PrimaryButton,
} from 'office-ui-fabric-react'
import styles from './RespondToRequestModal.module.scss'

export interface RespondToRequestModalProps {
	action: string
	isOpen: boolean
	onDismiss: () => void
	onSend: (message: string) => void
}

export const RespondToRequestModal: React.FC<RespondToRequestModalProps> = memo(
	({ action, isOpen, onDismiss, onSend }) => {
		const [message, setMessage] = useState('')
		const onHandlePrimary = useCallback(() => {
			onSend(message)
		}, [onSend, message])
		const handleTextChange = useCallback((arg, text) => setMessage(text), [])

		return (
			<Modal
				isOpen={isOpen}
				onDismiss={onDismiss}
				isBlocking={false}
				containerClassName={styles.container}
			>
				<div className={styles.header}>
					<span>{action} Connection Request</span>
				</div>
				<div className={styles.body}>
					<TextField multiline rows={5} onChange={handleTextChange} />
				</div>
				<div className={styles.actionPane}>
					<DefaultButton
						className={styles.actionButton}
						onClick={onDismiss}
						text="Close"
					/>
					<PrimaryButton
						className={styles.actionButton}
						onClick={onHandlePrimary}
						text="Submit Response"
					/>
				</div>
			</Modal>
		)
	},
)
