import React, { memo } from 'react'
import classnames from 'classnames'
import { ExpertConnection } from '../../../api'
import styles from './OutgoingConnectionRequest.module.scss'
import { PersonaSize, Persona, Text } from 'office-ui-fabric-react'

const HumanHash = require('humanhash')
const hh = new HumanHash()

export interface OutgoingConnectionRequestProps {
	connection: ExpertConnection
}

export const OutgoingConnectionRequest: React.FC<
	OutgoingConnectionRequestProps
> = memo(({ connection }) => {
	console.log('CON', connection)
	const isAccepted = connection.expertResponseStatus === 'Accepted'
	const emailText = isAccepted
		? connection.requestorEmail
		: hh.humanize(connection.requestorEmail)

	return (
		<div
			className={classnames(
				styles.container,
				'ms-depth-8',
				isAccepted ? styles.accepted : styles.nonAccepted,
			)}
		>
			<div className={styles.header}>
				<Persona size={PersonaSize.size32} text={emailText} />
				<div className={styles.status}>{connection.expertResponseStatus}</div>
			</div>
			<Text className={styles.messageContainer} variant="mediumPlus">
				{connection.requestorMessage}
			</Text>
		</div>
	)
})
