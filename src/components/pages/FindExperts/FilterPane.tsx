import React, { useState, useCallback, useEffect } from 'react'
import { Icon } from 'office-ui-fabric-react'
import styled from 'styled-components'
import posed from 'react-pose'
import { useProjects } from '../../../hooks/useProjects'
import { useSkills } from '../../../hooks/useSkills'
import { useTopics } from '../../../hooks/useTopics'
import { CategoryFilter } from '../../Filters/CategoryFilter'
import { TextFilter } from '../../Filters/TextFilter'
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
	employeeFunction: string | undefined,
	organization: string | undefined,
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

	if (employeeFunction) {
		result.clauses.push({
			op: FilterOperation.Equals,
			field: EmployeeFields.Function,
			value: employeeFunction,
		})
	}
	if (organization) {
		result.clauses.push({
			op: FilterOperation.Equals,
			field: EmployeeFields.Organization,
			value: organization,
		})
	}
	return result
}

export const FilterPane: React.FC<FilterPaneProps> = ({ onFilterChange }) => {
	const projects = useProjects()
	const skills = useSkills()
	const topics = useTopics()

	const [interacted, setInteracted] = useState(false)
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
			setInteracted(true)
		},
		[setFunction],
	)

	const handleOrganizationChanged = useCallback(
		f => {
			setOrganization(f)
			setInteracted(true)
		},
		[setOrganization],
	)

	const handleSkillsChanged = useCallback(
		v => {
			setSelectedSkills(v)
			setInteracted(true)
		},
		[setSelectedSkills],
	)

	const handleProjectsChanged = useCallback(
		v => {
			setSelectedProjects(v)
			setInteracted(true)
		},
		[setSelectedProjects],
	)

	const handleTopicsChanged = useCallback(
		v => {
			setSelectedTopics(v)
			setInteracted(true)
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
