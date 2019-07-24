import React, { useState, useCallback, useEffect, memo } from 'react'
import { Icon, Label } from 'office-ui-fabric-react'
import posed from 'react-pose'
import { useProjects } from '../../../hooks/useProjects'
import { useSkills } from '../../../hooks/useSkills'
import { CategoryFilter } from '../../Filters/CategoryFilter'
import { TextField } from 'office-ui-fabric-react'
import { Skill, Project, FilterExpression } from '../../../api'
import { useTripwire } from '../../../hooks/useTripwire'
import { buildFilter } from './buildFilter'
import classnames from 'classnames'
import styles from './ExpertFilterPane.module.scss'
import { ExpandCollapsePane } from '../../ExpandCollapsePane'

export interface ExpertFilterPaneProps {
	onFilterChange: (expr: FilterExpression) => void
}

export const ExpertFilterPane: React.FC<ExpertFilterPaneProps> = memo(
	({ onFilterChange }) => {
		const projects = useProjects()
		const skills = useSkills()

		const [interacted, markInteracted] = useTripwire()
		const [organization, setOrganization] = useState<string | undefined>()
		const [selectedSkills, setSelectedSkills] = useState<Skill[]>([])
		const [selectedProjects, setSelectedProjects] = useState<Project[]>([])

		useEffect(() => {
			if (interacted) {
				onFilterChange(
					buildFilter(organization, selectedSkills, selectedProjects),
				)
			}
		}, [
			interacted,
			organization,
			selectedSkills,
			selectedProjects,
			onFilterChange,
		])

		const handleOrganizationChanged = useCallback(
			(e, f) => {
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

		return (
			<div className={classnames(styles.container, 'ms-depth-8')}>
				<ExpandCollapsePane title="SearchCriteria">
					<div className={styles.filterSection}>
						<TextField
							label="Organization"
							value={organization}
							onChange={handleOrganizationChanged}
						/>
					</div>
					<div className={styles.tagsContainer}>
						<div className={styles.filterSection}>
							<Label>Relevant Skills</Label>
							<CategoryFilter
								categories={skills}
								selectedCategories={selectedSkills}
								onSelectionChanged={handleSkillsChanged}
							/>
						</div>
						<div className={styles.filterSection}>
							<Label>Project Involvement</Label>
							<CategoryFilter
								categories={projects}
								selectedCategories={selectedProjects}
								onSelectionChanged={handleProjectsChanged}
							/>
						</div>
					</div>
				</ExpandCollapsePane>
			</div>
		)
	},
)
