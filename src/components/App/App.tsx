import React, { memo } from 'react'
import { Routes } from './Routes'
import { Navigation } from './Navigation'
import styles from './App.module.scss'
import { Header } from './Header'
import { AppProviders } from './AppProviders'

export const App: React.FC = memo(() => {
	return (
		<AppProviders>
			<div className={styles.appContainer}>
				<Header />
				<div className={styles.contentContainer}>
					<div className={styles.sidePanel}>
						<Navigation />
					</div>
					<div className={styles.pageContainer}>
						<Routes />
					</div>
				</div>
			</div>
		</AppProviders>
	)
})
