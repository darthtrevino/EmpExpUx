import React, { useState, useCallback, memo } from 'react'
import { Page } from '../../Page'
import { SectionHeader } from '../../Headers'
import { useSkills } from '../../../hooks/useSkills'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { Label } from 'office-ui-fabric-react'
import { CategoryFilter } from '../../Filters/CategoryFilter'
import styles from './SkillsMarketplace.module.scss'

export const SkillsMarketplace = memo(() => {
	const skills = useSkills()
	const yourSkills = ['Python', 'React', 'Perl', 'C#', 'Leadership']

	const [userSkills, setUserSkills] = useState(yourSkills)

	const handleUserSkillsChanged = useCallback(
		v => {
			setUserSkills(v)
		},
		[setUserSkills],
	)

	const skillsOptions = {
		chart: {
			type: 'bar',
		},
		title: {
			text: 'Your Skills Ranked',
		},
		credits: { enabled: false },
		xAxis: {
			categories: ['Python', 'React', 'Perl', 'C#', 'Leadership'],
			// categories: yourSkills
		},
		yAxis: {
			min: 0,
			title: {
				text: 'People with skill',
			},
		},
		legend: {
			reversed: true,
		},
		plotOptions: {
			series: {
				stacking: 'normal',
			},
		},
		series: [
			{
				name: 'Engineering',
				data: [108, 95, 72, 130, 75],
			},
			{
				name: 'Research',
				data: [50, 23, 34, 78, 45],
			},
			{
				name: 'Sales',
				data: [7, 3, 1, 2, 89],
			},
		],
	}
	return (
		<Page name="Skills Marketplace">
			<div className={styles.skillsMarketplacePage}>
				<SectionHeader title="Your Skills Popularity" />
				<div className={styles.chartCnt}>
					<HighchartsReact highcharts={Highcharts} options={skillsOptions} />
				</div>
				<SectionHeader title="Edit Your Skills" />
				<div className={styles.filterSection}>
					<Label>Relevant Skills</Label>
					<CategoryFilter
						categories={skills}
						selectedCategories={userSkills}
						onSelectionChanged={handleUserSkillsChanged}
						itemLimit={10}
					/>
				</div>
			</div>
		</Page>
	)
})
