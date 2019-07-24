import React from 'react'
import { ExpertConnection } from '../../../api'
import styles from './IncomingConnectionRequest.module.scss'
import classnames from 'classnames'

export interface IncomingConnectionRequestProps {
	connection: ExpertConnection
}

export const IncomingConnectionRequest: React.FC<
	IncomingConnectionRequestProps
> = ({ connection }) => {
	return (
		<div className={classnames(styles.container, 'ms-depth-8')}>
			<div>{connection.id}</div>
			<div>{connection.requestorEmail}</div>
			<div>{connection.requestorMessage}</div>
		</div>
	)
}
