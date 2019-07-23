import React from 'react'
import { Page } from '../../Page'
import { useProjects } from '../../../hooks/useProjects'

export const FindExperts: React.FC = () => {
	const projects = useProjects()
	return (
		<Page name="Find Experts">
			<h1>Projects:</h1>
			<ul>
				{projects.map(p => (
					<li key={p}>{p}</li>
				))}
			</ul>
		</Page>
	)
}
