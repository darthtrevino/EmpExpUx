import React from 'react'
import { useSelector } from 'react-redux'
import { State } from '../../../state/reducers'
import { KudoView } from './KudoView'
import { KudoByMeView } from './KudoByMeView'
import { Pivot, PivotItem } from 'office-ui-fabric-react'
import styles from './Kudos.module.scss'

export const Kudos: React.FC = () => {
	const kudosByMe = useSelector((state: State) => state.kudos.byMe)
	const kudosToMe = useSelector((state: State) => state.kudos.toMe)
	return (
		<div className={styles.container}>
			<div className={styles.gutter} />
			<div className={styles.content}>
				<Pivot>
					<PivotItem headerText="Kudos Suggestions">
						<div className={styles.pivotContent}>
							{kudosByMe.map(k => (
								<KudoByMeView kudo={k} />
							))}
						</div>
					</PivotItem>
					<PivotItem headerText="Kudos Received">
						<div className={styles.pivotContent}>
							{kudosToMe.map(k => (
								<KudoView kudo={k} />
							))}
						</div>
					</PivotItem>
				</Pivot>
			</div>
			<div className={styles.gutter} />
		</div>
	)
}
