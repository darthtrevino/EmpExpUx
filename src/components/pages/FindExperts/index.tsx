import React from 'react'
import { Page } from '../../Page'
import { useProjects } from '../../../hooks/useProjects'

export const FindExperts: React.FC = () => {
	const projects = useProjects()
	console.log('Projects: ', projects)
	return (
		<Page name="Find Experts">
			<div>content</div>
		</Page>
	)
}
