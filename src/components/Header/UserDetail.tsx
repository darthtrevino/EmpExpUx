import React, { memo } from 'react'
import styles from './UserDetail.module.scss'
import { Persona, PersonaSize } from 'office-ui-fabric-react'
// @ts-ignore
import { TagItem } from 'office-ui-fabric-react'
import { useCurrentUser } from '../../hooks/useCurrentUser'
import { Medal } from './Medal'

console.log('PILL', TagItem)

export const UserDetail: React.FC = memo(() => {
	const currentUser = useCurrentUser()
	return !!currentUser ? (
		<div className={styles.userDetail}>
			<Persona
				className={styles.userName}
				size={PersonaSize.size32}
				text={currentUser.email}
			/>
			<Medal metric={currentUser.email.length} name="Kudos" />
			<Medal metric={currentUser.rewardPoints} name="Points" />
		</div>
	) : null
})
