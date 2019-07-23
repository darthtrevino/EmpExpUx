import React, { useState, useCallback, useEffect, memo } from 'react'
import { Icon } from 'office-ui-fabric-react'
import posed from 'react-pose'
import { useProjects } from '../../../hooks/useProjects'
import { useSkills } from '../../../hooks/useSkills'
import { useTopics } from '../../../hooks/useTopics'
import { CategoryFilter } from '../../Filters/CategoryFilter'
import { TextFilter } from '../../Filters/TextFilter'
import { Skill, Project, Topic, FilterExpression } from '../../../api'
import { useTripwire } from '../../../hooks/useTripwire'
import { buildFilter } from './buildFilter'
import classnames from 'classnames'
import styles from './ExpertFilterPane.module.scss'

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
		const [organization, setOrganization] = useState<string | undefined>()
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
						organization,
						selectedSkills,
						selectedProjects,
						selectedTopics,
						undefined,
						undefined,
						undefined,
					),
				)
			}
		}, [
			interacted,
			organization,
			selectedSkills,
			selectedProjects,
			selectedTopics,
			onFilterChange,
		])

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
			<div className={classnames(styles.container, 'ms-depth-8')}>
				<div className={styles.header}>
					<div className={styles.headerText}>Search Criteria</div>
					<Icon
						className={styles.headerIcon}
						iconName={expanded ? 'ChevronDown' : 'ChevronUp'}
						onClick={toggleExpanded}
					/>
				</div>
				<FilterArea pose={expanded ? 'expanded' : 'collapsed'}>
					{expanded ? (
						<>
							<div className={styles.filterSection}>
								<div className={styles.filterBy}>Organization</div>
								<TextFilter onSelectionChanged={handleOrganizationChanged} />
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
