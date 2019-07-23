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
import styles from './InfluencerFilterPane.module.scss'
import classnames from 'classnames'

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
			<div className={classnames(styles.container, 'ms-depth-8')}>
				<div className={styles.header}>
					<div className={styles.headerText}>Search Criteria</div>
					<Icon
						iconName={expanded ? 'ChevronDown' : 'ChevronUp'}
						className={styles.headerIcon}
						onClick={toggleExpanded}
					></Icon>
				</div>
				<FilterArea pose={expanded ? 'expanded' : 'collapsed'}>
					{expanded ? (
						<>
							<div className={styles.filterSection}>
								<div className={styles.filterBy}>Eigen Centrality</div>
								<RangeFilter
									range={eigenRange}
									onSelectionChanged={handleEigenChanged}
								/>
							</div>
							<div className={styles.filterSection}>
								<div className={styles.filterBy}>Betweenness</div>
								<RangeFilter
									range={betweennessRange}
									onSelectionChanged={handleBetweennessChanged}
								/>
							</div>
							<div className={styles.filterSection}>
								<div className={styles.filterBy}>PageRank</div>
								<RangeFilter
									range={pageRankRange}
									onSelectionChanged={handlePageRankChanged}
								/>
							</div>
							<div className={styles.filterSection}>
								<div className={styles.filterBy}>Relevant Skills</div>
								<CategoryFilter
									categories={skills}
									onSelectionChanged={handleSkillsChanged}
								/>
							</div>
							<div className={styles.filterSection}>
								<div className={styles.filterBy}>Project Involvement</div>
								<CategoryFilter
									categories={projects}
									onSelectionChanged={handleProjectsChanged}
								/>
							</div>
							<div className={styles.filterSection}>
								<div className={styles.filterBy}>Topics of Expertise</div>
								<CategoryFilter
									categories={topics}
									onSelectionChanged={handleTopicsChanged}
								/>
							</div>
						</>
					) : null}
				</FilterArea>
			</div>
		)
	},
)

const FilterArea = posed.div({
	collapsed: { height: 1, opacity: 0 },
	expanded: { height: 'auto', opacity: 1 },
})
