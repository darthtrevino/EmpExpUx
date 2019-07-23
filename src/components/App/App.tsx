import React, { memo } from 'react'
import { Provider } from 'react-redux'
import styled from 'styled-components'
import { Routes } from './Routes'
import store from '../../state'

export const App: React.FC = memo(() => (
	<Provider store={store}>
		<Container>
			<Routes />
		</Container>
	</Provider>
))

const Container = styled.div`
	text-align: center;
	flex: 1;
	display: flex;
`