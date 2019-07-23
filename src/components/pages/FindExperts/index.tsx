import React from 'react'
import styled from 'styled-components'
import { Page } from '../../Page'
import { useProjects } from '../../../hooks/useProjects'
import { useSkills } from '../../../hooks/useSkills'
import { useTopics } from '../../../hooks/useTopics'
import { CategoryFilter } from '../../Filters/CategoryFilter'
import { FilterPane } from './FilterPane'

export const FindExperts: React.FC = () => {
	return (
		<Page name="Find Experts">
			<FilterPane />
		</Page>
	)
}
