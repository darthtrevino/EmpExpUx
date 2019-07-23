import React, { useState, useCallback } from 'react'
import { Icon } from 'office-ui-fabric-react'
import styled from 'styled-components'
import posed from 'react-pose'
import { useProjects } from '../../../hooks/useProjects'
import { useSkills } from '../../../hooks/useSkills'
import { useTopics } from '../../../hooks/useTopics'
import { CategoryFilter } from '../../Filters/CategoryFilter'
import {
	Skill,
	Project,
	Topic,
	FilterExpression,
	BooleanOperation,
	FilterOperation,
	EmployeeFields,
} from '../../../api'

export interface FilterPaneProps {
	onFilterChange: (expr: FilterExpression) => void
}

function buildFilter(
	selectedSkills: Skill[],
	selectedProjects: Project[],
	selectedTopics: Topic[],
) {
	const result: FilterExpression = {
		op: BooleanOperation.AND,
		clauses: [
			...selectedSkills.map(s => ({
				op: FilterOperation.Equals,
				field: EmployeeFields.Skills,
				value: s,
			})),
			...selectedProjects.map(p => ({
				op: FilterOperation.Equals,
				field: EmployeeFields.Projects,
				value: p,
			})),
			...selectedTopics.map(t => ({
				op: FilterOperation.Equals,
				field: EmployeeFields.Topics,
				value: t,
			})),
		],
	}
	return result
}

export const FilterPane: React.FC<FilterPaneProps> = ({ onFilterChange }) => {
	const projects = useProjects()
	const skills = useSkills()
	const topics = useTopics()

	const [expanded, setExpanded] = useState(true)
	const [selectedSkills, setSelectedSkills] = useState<Skill[]>([])
	const [selectedProjects, setSelectedProjects] = useState<Project[]>([])
	const [selectedTopics, setSelectedTopics] = useState<Topic[]>([])
	const toggleExpanded = useCallback(() => setExpanded(!expanded), [
		expanded,
		setExpanded,
	])

	const handleSkillsChanged = useCallback(
		v => {
			setSelectedSkills(v)
			onFilterChange(
				buildFilter(selectedSkills, selectedProjects, selectedTopics),
			)
		},
		[setSelectedSkills],
	)

	const handleProjectsChanged = useCallback(
		v => {
			setSelectedProjects(v)
			onFilterChange(
				buildFilter(selectedSkills, selectedProjects, selectedTopics),
			)
		},
		[setSelectedProjects],
	)

	const handleTopicsChanged = useCallback(
		v => {
			setSelectedTopics(v)
			onFilterChange(
				buildFilter(selectedSkills, selectedProjects, selectedTopics),
			)
		},
		[setSelectedTopics],
	)

	return (
		<Container className="ms-depth-8">
			<Header>
				<HeaderText>Search Criteria</HeaderText>
				<HeaderIcon
					iconName={expanded ? 'ChevronDown' : 'ChevronUp'}
					onClick={toggleExpanded}
				></HeaderIcon>
			</Header>
			<FilterArea pose={expanded ? 'expanded' : 'collapsed'}>
				{expanded ? (
					<>
						<FilterSection>
							<FilterBy>Relevant Skills</FilterBy>
							<CategoryFilter
								categories={skills}
								onSelectionChanged={handleSkillsChanged}
							/>
						</FilterSection>
						<FilterSection>
							<FilterBy>Project Involvement</FilterBy>
							<CategoryFilter
								categories={projects}
								onSelectionChanged={handleProjectsChanged}
							/>
						</FilterSection>
						<FilterSection>
							<FilterBy>Topics of Expertise</FilterBy>
							<CategoryFilter
								categories={topics}
								onSelectionChanged={handleTopicsChanged}
							/>
						</FilterSection>
					</>
				) : null}
			</FilterArea>
		</Container>
	)
}

const FilterSection = styled.div`
	padding: 15px;
`

const FilterArea = posed.div({
	collapsed: { height: 1, opacity: 0 },
	expanded: { height: 'auto', opacity: 1 },
})

const Header = styled.div`
	display: flex;
	justify-content: space-between;
`

const HeaderIcon = styled(Icon)`
	margin-right: 10px;
	margin-top: 10px;
	font-size: 30px;
	cursor: default;
`

const HeaderText = styled.div`
	text-align: left;
	font-size: 25px;
	margin: 8px;
	font-weight: 300;
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
