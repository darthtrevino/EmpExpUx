import React, { memo } from 'react'
import { Icon } from 'office-ui-fabric-react'
import styles from './KudoThumb.module.scss'

export const KudoThumb: React.FC = memo(() => {
	return (
		<div className={styles.container}>
			<Icon className={styles.iconBack} iconName={'LikeSolid'} />
			<Icon className={styles.iconFront} iconName={'Like'} />
		</div>
	)
})
