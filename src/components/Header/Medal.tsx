import React, { memo } from 'react'
import { Icon } from 'office-ui-fabric-react'
import styles from './Medal.module.scss'

export interface MedalProps {
	name: string
	metric: number
}

const iconNames: Record<string, { front: string; back: string }> = {
	Kudos: {
		back: 'LikeSolid',
		front: 'Like',
	},
	Points: {
		back: 'MedalSolid',
		front: 'Medal',
	},
}

export const Medal: React.FC<MedalProps> = memo(({ metric, name }) => (
	<div className={styles.gameMetricContainer}>
		<div className={styles.gameMetricText}>{metric}</div>
		<div className={styles.gameMetricIconContainer}>
			<Icon
				className={styles.gameMetricIconBack}
				iconName={iconNames[name].back}
				ariaLabel={name}
			/>
			<Icon
				className={styles.gameMetricIconFront}
				iconName={iconNames[name].front}
				ariaLabel={name}
			/>
		</div>
	</div>
))
