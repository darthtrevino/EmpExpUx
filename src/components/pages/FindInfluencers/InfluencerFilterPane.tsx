import React, { useState, useCallback, useEffect, memo } from 'react'
import { Icon } from 'office-ui-fabric-react'
import styled from 'styled-components'
import posed from 'react-pose'
import { useProjects } from '../../../hooks/useProjects'
import { useSkills } from '../../../hooks/useSkills'
import { useTopics } from '../../../hooks/useTopics'
import { CategoryFilter } from '../../Filters/CategoryFilter'
import { RangeFilter } from '../../Filters/RangeFilter'
import { Skill, Project, Topic, FilterExpression } from '../../../api'
import { buildFilter } from '../FindExperts/buildFilter'
import { useTripwire } from '../../../hooks/useTripwire'

export interface InfluencerFilterPaneProps {
	onFilterChange: (expr: FilterExpression) => void
}

export const InfluencerFilterPane: React.FC<InfluencerFilterPaneProps> = memo(
	({ onFilterChange }) => {
		const projects = useProjects()
		const skills = useSkills()
		const topics = useTopics()

		const [interacted, markInteracted] = useTripwire()
		const [expanded, setExpanded] = useState(true)
		const [selectedSkills, setSelectedSkills] = useState<Skill[]>([])
		const [selectedProjects, setSelectedProjects] = useState<Project[]>([])
		const [selectedTopics, setSelectedTopics] = useState<Topic[]>([])
		const [eigenRange, setEigenRange] = useState<[number, number]>([0, 1])
		const [betweennessRange, setBetweennessRange] = useState<[number, number]>([
			0,
			1,
		])
		const [pageRankRange, setPageRankRange] = useState<[number, number]>([0, 1])
		const toggleExpanded = useCallback(() => setExpanded(!expanded), [
			expanded,
			setExpanded,
		])

		useEffect(() => {
			if (interacted) {
				onFilterChange(
					buildFilter(
						undefined,
						undefined,
						undefined,
						selectedSkills,
						selectedProjects,
						selectedTopics,
						eigenRange,
						betweennessRange,
						pageRankRange,
					),
				)
			}
		}, [
			interacted,
			selectedSkills,
			selectedProjects,
			selectedTopics,
			eigenRange,
			betweennessRange,
			pageRankRange,
			onFilterChange,
		])

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

		const handleEigenChanged = useCallback(
			([min, max]) => {
				setEigenRange([min, max])
				markInteracted()
			},
			[setEigenRange, markInteracted],
		)

		const handleBetweennessChanged = useCallback(
			([min, max]) => {
				setBetweennessRange([min, max])
				markInteracted()
			},
			[setBetweennessRange, markInteracted],
		)

		const handlePageRankChanged = useCallback(
			([min, max]) => {
				setPageRankRange([min, max])
				markInteracted()
			},
			[setPageRankRange, markInteracted],
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
								<FilterBy>Eigen Centrality</FilterBy>
								<RangeFilter
									range={eigenRange}
									onSelectionChanged={handleEigenChanged}
								/>
							</FilterSection>
							<FilterSection>
								<FilterBy>Betweenness</FilterBy>
								<RangeFilter
									range={betweennessRange}
									onSelectionChanged={handleBetweennessChanged}
								/>
							</FilterSection>
							<FilterSection>
								<FilterBy>PageRank</FilterBy>
								<RangeFilter
									range={pageRankRange}
									onSelectionChanged={handlePageRankChanged}
								/>
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
