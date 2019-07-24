import React, { memo } from 'react'
import styles from './Header.module.scss'
import { UserDetail } from './UserDetail'

const brandMark = require('../../images/brandmark_white.png')
const titleText = 'Employee Experience'
const imgAlt = `${titleText} Templates Logo`

export const Header: React.FC = memo(() => (
	<div className={styles.header}>
		<div className={styles.topBar}>
			<div className={styles.brandmark}>
				<img src={brandMark} role="presentation" alt={imgAlt} />
			</div>
			<div className={styles.title}>{titleText}</div>
			<UserDetail />
		</div>
	</div>
))
