import React from 'react'
import { useSelector } from 'react-redux'
import { State } from '../../../state/reducers'
import { KudoView } from './KudoView'
import styles from './Kudos.module.scss'

export const Kudos: React.FC = () => {
	const kudos = useSelector((state: State) => state.kudos.toMe)
	return (
		<div className={styles.container}>
			<div className={styles.gutter} />
			<div className={styles.content}>
				{kudos.map(k => (
					<KudoView kudo={k} />
				))}
			</div>
			<div className={styles.gutter} />
		</div>
	)
}
