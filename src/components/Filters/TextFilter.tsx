import React, { memo } from 'react'
import styles from './TextFilter.module.scss'

export interface TextFilterProps {
	onSelectionChanged: (selection: string) => void
}

export const TextFilter: React.FC<TextFilterProps> = memo(
	({ onSelectionChanged }) => (
		<div className={styles.container}>
			<input
				type="text"
				onChange={evt => onSelectionChanged(evt.target.value)}
			></input>
		</div>
	),
)
