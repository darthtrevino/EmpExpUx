import React, { memo, useCallback } from 'react'
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

export interface IncomingConnectionRequestProps {
	connection: ExpertConnection
}

export const IncomingConnectionRequest: React.FC<
	IncomingConnectionRequestProps
> = memo(({ connection }) => {
	const onDismiss = useCallback(
		() => console.log('Dismss connection request'),
		[],
	)
	const onAccept = useCallback(
		() => console.log('Accept connection request'),
		[],
	)
	return (
		<div className={classnames(styles.container, 'ms-depth-8')}>
			<Persona size={PersonaSize.size32} text={connection.requestorEmail} />
			<div className={styles.messageContainer}>
				<Text className={styles.messageContainer} variant="mediumPlus">
					{connection.requestorMessage}
				</Text>
			</div>
			<div className={styles.actionPane}>
				<div className={styles.actionPane}>
					<DefaultButton
						className={styles.actionButton}
						onClick={onDismiss}
						text="Dismiss"
					/>
					<PrimaryButton
						className={styles.actionButton}
						onClick={onAccept}
						text="Accept"
					/>
				</div>
			</div>
		</div>
	)
})
