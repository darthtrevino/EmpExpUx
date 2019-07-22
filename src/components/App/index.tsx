import React from 'react'
import styled from 'styled-components'
import { Navigation } from './Navigation'
import { Routes } from './Routes'

const App: React.FC = () => (
	<Container>
		<Navigation />
		<Routes />
	</Container>
)

export default App

const Container = styled.div`
	text-align: center;
	flex: 1;
	display: flex;
`
