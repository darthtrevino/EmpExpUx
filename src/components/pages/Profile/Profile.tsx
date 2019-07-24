import React, { memo } from 'react'
import { Page } from '../../Page'
import { useSelector } from 'react-redux'
import { Pivot, PivotItem } from 'office-ui-fabric-react'
import { State } from '../../../state/reducers'
import { IncomingConnectionRequest } from './IncomingConnectionRequest'
import styles from './Profile.module.scss'
import { OutgoingConnectionRequest } from './OutgoingConnectionRequest'

export const Profile: React.FC = memo(() => {
	const requestsMadeByMe = useSelector((s: State) => s.expertConnections.byMe)
	const requestsMadeToMe = useSelector((s: State) => s.expertConnections.toMe)

	return (
		<Page name="My Expertise">
			<div className={styles.page}>
				<div className={styles.content}>
					<Pivot>
						<PivotItem headerText="Incoming Requests">
							<div className={styles.pivotContent}>
								{requestsMadeToMe.map(r => (
									<IncomingConnectionRequest key={r.id} connection={r} />
								))}
							</div>
						</PivotItem>
						<PivotItem headerText="Outgoing Requests">
							<div className={styles.pivotContent}>
								{requestsMadeByMe.map(r => (
									<OutgoingConnectionRequest key={r.id} connection={r} />
								))}
							</div>
						</PivotItem>
					</Pivot>
				</div>
			</div>
		</Page>
	)
})
