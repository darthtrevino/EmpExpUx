import React, { memo } from 'react'
import { Page } from '../../Page'
import styles from './Home.module.scss'

export const Home: React.FC = memo(() => {
	return (
		<Page name="Home">
			<div className={styles.myDiv}>This should be red</div>
			<div>content</div>
		</Page>
	)
})
