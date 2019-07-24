import React, { memo, useState, useCallback } from 'react'
import posed from 'react-pose'
import { Page } from '../../Page'
import { useSelector } from 'react-redux'
import { State } from '../../../state/reducers'
import styles from './Profile.module.scss'
import { IncomingConnectionRequest } from './IncomingConnectionRequest'
import { Icon } from 'office-ui-fabric-react'

export const Profile: React.FC = memo(() => {
	const [incomingExpanded, setIncomingExpanded] = useState(true)
	const requestsMadeByMe = useSelector((s: State) => s.expertConnections.byMe)
	const requestsMadeToMe = useSelector((s: State) => s.expertConnections.byMe)
	const toggleIncomingExpanded = useCallback(
		() => setIncomingExpanded(!incomingExpanded),
		[incomingExpanded],
	)
	return (
		<Page name="My Expertise">
			<div className={styles.page}>
				<div className={styles.gutter} />
				<div className={styles.content}>
					<div className={styles.requestSection}>
						<div className={styles.requestSectionHeader}>
							<div className={styles.requestSectionTitle}>
								Incoming Requests
							</div>
							<Icon
								className={styles.headerIcon}
								iconName={incomingExpanded ? 'ChevronDown' : 'ChevronUp'}
								onClick={toggleIncomingExpanded}
							/>
						</div>
						<RequestSection pose={incomingExpanded ? 'expanded' : 'collapsed'}>
							{requestsMadeToMe.map(r => (
								<IncomingConnectionRequest key={r.id} connection={r} />
							))}
						</RequestSection>
					</div>
					<div className={styles.requestSection}>
						<div className={styles.requestSectionTitle}>Outgoing Requests</div>
						<div>
							{requestsMadeByMe.map(r => (
								<div key={r.id}>{r.id}</div>
							))}
						</div>
					</div>
				</div>
				<div className={styles.gutter} />
			</div>
		</Page>
	)
})

const RequestSection = posed.div({
	expanded: { height: 'auto', opacity: 1, zIndex: -1 },
	collapsed: { height: '1px', opacity: 0, zIndex: 'auto' },
})
