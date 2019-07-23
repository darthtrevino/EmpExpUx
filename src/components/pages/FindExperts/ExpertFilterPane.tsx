import React, { useState, useCallback, useEffect, memo } from 'react'
import { Icon } from 'office-ui-fabric-react'
import styled from 'styled-components'
import posed from 'react-pose'
import { useProjects } from '../../../hooks/useProjects'
import { useSkills } from '../../../hooks/useSkills'
import { useTopics } from '../../../hooks/useTopics'
import { CategoryFilter } from '../../Filters/CategoryFilter'
import { TextFilter } from '../../Filters/TextFilter'
import { Skill, Project, Topic, FilterExpression } from '../../../api'
import { useTripwire } from '../../../hooks/useTripwire'
import { buildFilter } from './buildFilter'

export interface ExpertFilterPaneProps {
	onFilterChange: (expr: FilterExpression) => void
}

export const ExpertFilterPane: React.FC<ExpertFilterPaneProps> = memo(
	({ onFilterChange }) => {
		const projects = useProjects()
		const skills = useSkills()
		const topics = useTopics()

		const [interacted, markInteracted] = useTripwire()
		const [expanded, setExpanded] = useState(true)
		const [employeeFunction, setFunction] = useState<string | undefined>(
			undefined,
		)
		const [organization, setOrganization] = useState<string | undefined>(
			undefined,
		)
		const [selectedSkills, setSelectedSkills] = useState<Skill[]>([])
		const [selectedProjects, setSelectedProjects] = useState<Project[]>([])
		const [selectedTopics, setSelectedTopics] = useState<Topic[]>([])
		const toggleExpanded = useCallback(() => setExpanded(!expanded), [
			expanded,
			setExpanded,
		])

		useEffect(() => {
			if (interacted) {
				onFilterChange(
					buildFilter(
						employeeFunction,
						organization,
						selectedSkills,
						selectedProjects,
						selectedTopics,
					),
				)
			}
		}, [
			interacted,
			employeeFunction,
			organization,
			selectedSkills,
			selectedProjects,
			selectedTopics,
			onFilterChange,
		])

		const handleFunctionChanged = useCallback(
			f => {
				setFunction(f)
				markInteracted()
			},
			[setFunction, markInteracted],
		)

		const handleOrganizationChanged = useCallback(
			f => {
				setOrganization(f)
				markInteracted()
			},
			[setOrganization, markInteracted],
		)

		const handleSkillsChanged = useCallback(
			v => {
				setSelectedSkills(v)
				markInteracted()
			},
			[setSelectedSkills, markInteracted],
		)

		const handleProjectsChanged = useCallback(
			v => {
				setSelectedProjects(v)
				markInteracted()
			},
			[setSelectedProjects, markInteracted],
		)

		const handleTopicsChanged = useCallback(
			v => {
				setSelectedTopics(v)
				markInteracted()
			},
			[setSelectedTopics, markInteracted],
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
								<FilterBy>Function</FilterBy>
								<TextFilter onSelectionChanged={handleFunctionChanged} />
							</FilterSection>
							<FilterSection>
								<FilterBy>Organization</FilterBy>
								<TextFilter onSelectionChanged={handleOrganizationChanged} />
							</FilterSection>
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
	},
)

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
