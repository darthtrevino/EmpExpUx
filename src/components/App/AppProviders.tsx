import React, { memo } from 'react'
import { Provider } from 'react-redux'
import { Fabric } from 'office-ui-fabric-react'
import store from '../../state'
import { BrowserRouter } from 'react-router-dom'

export const AppProviders: React.FC = memo(({ children }) => (
	<BrowserRouter>
		<Provider store={store}>
			<Fabric>{children}</Fabric>
		</Provider>
	</BrowserRouter>
))
