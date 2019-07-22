import React from 'react'
import { Provider } from 'react-redux'
import styled from 'styled-components'
import { Navigation } from './Navigation'
import { Routes } from './Routes'
import store from '../../state'

const App: React.FC = () => (
	<Provider store={store}>
		<Container>
			<Navigation />
			<Routes />
		</Container>
	</Provider>
)

export default App

const Container = styled.div`
	text-align: center;
	flex: 1;
	display: flex;
`
