import React, { memo } from 'react'
import styles from './UserDetail.module.scss'
import { Persona, PersonaSize } from 'office-ui-fabric-react'
import { useCurrentUser } from '../../hooks/useCurrentUser'
import { Medal } from './Medal'

export const UserDetail: React.FC = memo(() => {
	const currentUser = useCurrentUser()
	return (
		<div className={styles.userDetail}>
			<Persona
				className={styles.userName}
				size={PersonaSize.size32}
				text={currentUser || ''}
			/>
			<Medal metric={12} name="Kudos" />
			<Medal metric={400} name="Points" />
		</div>
	)
})
