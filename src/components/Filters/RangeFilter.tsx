import React, { memo, useCallback } from 'react'
import { Slider } from 'office-ui-fabric-react'
import styles from './RangeFilter.module.scss'

export interface RangeFilterProps {
	range: [number, number]
	onSelectionChanged: (selection: [number, number]) => void
}

export const RangeFilter: React.FC<RangeFilterProps> = memo(
	({ range: [min, max], onSelectionChanged }) => {
		const onMinChanged = useCallback(
			(value: number) => {
				const _min = Math.min(value, max)
				const _max = Math.max(value, max)
				onSelectionChanged([_min, _max])
			},
			[max, onSelectionChanged],
		)

		const onMaxChanged = useCallback(
			(value: number) => {
				const _min = Math.min(value, min)
				const _max = Math.max(value, min)
				onSelectionChanged([_min, _max])
			},
			[min, onSelectionChanged],
		)

		return (
			<div className={styles.container}>
				<Slider
					min={0}
					max={1}
					value={min}
					step={0.01}
					onChange={onMinChanged}
				/>
				<Slider
					min={0}
					max={1}
					value={max}
					step={0.01}
					onChange={onMaxChanged}
				/>
			</div>
		)
	},
)
