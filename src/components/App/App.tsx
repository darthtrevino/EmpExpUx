import React, { memo } from 'react'
import { Provider } from 'react-redux'
import { Fabric } from 'office-ui-fabric-react'
import { Routes } from './Routes'
import { Navigation } from './Navigation'
import store from '../../state'
import styles from './App.module.scss'
import { Header } from './Header'
import { BrowserRouter } from 'react-router-dom'

export const App: React.FC = memo(() => {
	return (
		<Provider store={store}>
			<Fabric>
				<div className={styles.appContainer}>
					<Header />
					<BrowserRouter>
						<div className={styles.contentContainer}>
							<div className={styles.sidePanel}>
								<Navigation />
							</div>
							<div className={styles.pageContainer}>
								<Routes />
							</div>
						</div>
					</BrowserRouter>
				</div>
			</Fabric>
		</Provider>
	)
})

export default App
