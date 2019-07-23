import React, { memo } from 'react'
import { Page } from '../../Page'
import { Login } from './Login'

export const Home: React.FC = memo(() => {
	return (
		<Page name="Home">
			<Login />
		</Page>
	)
})
