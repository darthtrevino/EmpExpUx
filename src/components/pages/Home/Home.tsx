import React, { memo } from 'react'
import { Page } from '../../Page'
import { Login } from './Login'
import { useCurrentUser } from '../../../hooks/useCurrentUser'

export const Home: React.FC = memo(() => {
	const currentUser = useCurrentUser()

	return (
		<Page name="Home">
			<div>Current User: {currentUser ? currentUser : 'Not Logged In'}</div>
			<Login />
		</Page>
	)
})
