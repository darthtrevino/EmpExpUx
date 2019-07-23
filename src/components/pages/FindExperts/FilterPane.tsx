import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useProjects } from '../../../hooks/useProjects'
import { useSkills } from '../../../hooks/useSkills'
import { useTopics } from '../../../hooks/useTopics'
import { CategoryFilter } from '../../Filters/CategoryFilter'
import { Skill, Project, Topic } from '../../../api'

export const FilterPane: React.FC = () => {
	const projects = useProjects()
	const skills = useSkills()
	const topics = useTopics()

	const [selectedSkills, setSelectedSkills] = useState<Skill[]>([])
	const [selectedProjects, setSelectedProjects] = useState<Project[]>([])
	const [selectedTopics, setSelectedTopics] = useState<Topic[]>([])

	useEffect(() => {
		if (
			selectedSkills.length + selectedProjects.length + selectedTopics.length >
			0
		) {
			console.log(
				'Create Filter',
				selectedSkills,
				selectedProjects,
				selectedTopics,
			)
		}
	}, [selectedSkills, selectedProjects, selectedTopics])

	return (
		<Container className="ms-depth-8">
			<Header>Search Criteria</Header>
			<FilterSection>
				<FilterBy>Relevant Skills</FilterBy>
				<CategoryFilter
					categories={skills}
					onSelectionChanged={setSelectedSkills}
				/>
			</FilterSection>
			<FilterSection>
				<FilterBy>Project Involvement</FilterBy>
				<CategoryFilter
					categories={projects}
					onSelectionChanged={setSelectedProjects}
				/>
			</FilterSection>
			<FilterSection>
				<FilterBy>Topics of Expertise</FilterBy>
				<CategoryFilter
					categories={topics}
					onSelectionChanged={setSelectedTopics}
				/>
			</FilterSection>
		</Container>
	)
}

const FilterSection = styled.div`
	padding: 15px;
`

const Header = styled.div`
	text-align: left;
	font-size: 30px;
	margin: 8px;
`

const FilterBy = styled.div`
	text-align: left;
	margin-left: 10px;
	font-weight: 400;
`

const Container = styled.div`
	margin-top: 10px;
	width: 500px;
`
