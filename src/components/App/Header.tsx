import React, { memo } from 'react'
import styles from './Header.module.scss'
import { useCurrentUser } from '../../hooks/useCurrentUser'

const brandMark = require('../../images/brandmark_white.png')
const titleText = 'Employee Experience'
const imgAlt = `${titleText} Templates Logo`

export const Header: React.FC = memo(() => {
	const currentUser = useCurrentUser()
	return (
		<div className={styles.header}>
			<div className={styles.topBar}>
				<div className={styles.brandmark}>
					<img src={brandMark} role="presentation" alt={imgAlt} />
				</div>
				<div className={styles.title}>{titleText}</div>
				<div className={styles.username}>
					<span>{currentUser}</span>
				</div>
			</div>
		</div>
	)
})
