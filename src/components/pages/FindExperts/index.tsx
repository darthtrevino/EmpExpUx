import React from 'react'
import styled from 'styled-components'
import { Page } from '../../Page'
import { useProjects } from '../../../hooks/useProjects'
import { useSkills } from '../../../hooks/useSkills'
import { useTopics } from '../../../hooks/useTopics'
import { CategoryFilter } from '../../Filters/CategoryFilter'

export const FindExperts: React.FC = () => {
	const projects = useProjects()
	const skills = useSkills()
	const topics = useTopics()

	return (
		<Page name="Find Experts">
			<FilterPane className="ms-depth-4">
				<FilterPaneHeader>Search Criteria</FilterPaneHeader>
				<FilterSection>
					<FilterBy>Relevant Skills</FilterBy>
					<CategoryFilter categories={skills} />
				</FilterSection>
				<FilterSection>
					<FilterBy>Project Involvement</FilterBy>
					<CategoryFilter categories={projects} />
				</FilterSection>
				<FilterSection>
					<FilterBy>Topics of Expertise</FilterBy>
					<CategoryFilter categories={topics} />
				</FilterSection>
			</FilterPane>
		</Page>
	)
}

const FilterSection = styled.div``

const FilterPaneHeader = styled.div`
	text-align: left;
	font-size: 30px;
	margin: 8px;
`

const FilterBy = styled.div`
	text-align: left;
	margin-left: 10px;
	font-weight: 400;
`

const FilterPane = styled.div`
	margin-top: 10px;
	width: 500px;
`
