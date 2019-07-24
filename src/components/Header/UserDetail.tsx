import React from 'react'
import styles from './UserDetail.module.scss'
import { Persona, PersonaSize, Icon } from 'office-ui-fabric-react'
import { useCurrentUser } from '../../hooks/useCurrentUser'

export const UserDetail: React.FC = () => {
	const currentUser = useCurrentUser()
	return (
		<div className={styles.userDetail}>
			<Persona
				className={styles.userName}
				size={PersonaSize.size32}
				text={currentUser || ''}
			/>
			<div className={styles.gameMetricContainer}>
				12
				<Icon
					className={styles.gameMetricIcon}
					iconName="Like"
					ariaLabel="Kudos"
				/>
			</div>
			<div className={styles.gameMetricContainer}>
				400
				<Icon
					className={styles.gameMetricIcon}
					iconName="Medal"
					ariaLabel="Points"
				/>
			</div>
		</div>
	)
}
