import React, { memo } from 'react'
import { Page } from '../../Page'
import { useSelector } from 'react-redux'
import { State } from '../../../state/reducers'
import styles from './Profile.module.scss'
import { IncomingConnectionRequest } from './IncomingConnectionRequest'
import { ExpandCollapsePane } from '../../ExpandCollapsePane'

export const Profile: React.FC = memo(() => {
	const requestsMadeByMe = useSelector((s: State) => s.expertConnections.byMe)
	const requestsMadeToMe = useSelector((s: State) => s.expertConnections.byMe)

	return (
		<Page name="My Expertise">
			<div className={styles.page}>
				<div className={styles.gutter} />
				<div className={styles.content}>
					<ExpandCollapsePane title="Incoming Requests">
						{requestsMadeToMe.map(r => (
							<IncomingConnectionRequest key={r.id} connection={r} />
						))}
					</ExpandCollapsePane>
					<ExpandCollapsePane title="Outgoing Requests">
						{requestsMadeByMe.map(r => (
							<div key={r.id}>{r.id}</div>
						))}
					</ExpandCollapsePane>
				</div>
				<div className={styles.gutter} />
			</div>
		</Page>
	)
})
