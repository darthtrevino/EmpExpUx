import React, { memo } from 'react'
import { Provider } from 'react-redux'
import { Fabric } from 'office-ui-fabric-react'
import { Routes } from './Routes'
import { Navigation } from './Navigation'
import store from '../../state'
import styles from './App.module.scss'

const App: React.FC = memo(() => {
	const titleText = 'Employee Experience'
	return (
		<Provider store={store}>
			<Fabric>
				<div className={styles.appContainer}>
					<div className={styles.header}>
						<div className={styles.topBar}>
							<div className={styles.brandmark}>
								<img
									src={require('../../images/brandmark_white.png')}
									role="presentation"
									alt={`${titleText} Templates Logo`}
								/>
							</div>
							<div className={styles.title}>{titleText}</div>
						</div>
					</div>
					<div className={styles.contentContainer}>
						<div className={styles.sidePanel}>
							<Navigation />
						</div>
						<div className={styles.pageContainer}>
							<Routes />
						</div>
					</div>
				</div>
			</Fabric>
		</Provider>
	)
})

export default App
