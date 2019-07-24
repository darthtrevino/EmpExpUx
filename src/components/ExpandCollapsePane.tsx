import React, { useState, useCallback } from 'react'
import { Icon } from 'office-ui-fabric-react'
import styles from './ExpandCollapsePane.module.scss'

export interface ExpandCollapsePaneProps {
	title: string
	defaultExpanded?: boolean
}

export const ExpandCollapsePane: React.FC<ExpandCollapsePaneProps> = ({
	title,
	defaultExpanded = true,
	children,
}) => {
	const [isExpanded, setExpanded] = useState(defaultExpanded)
	const toggleExpanded = useCallback(() => setExpanded(!isExpanded), [
		isExpanded,
		setExpanded,
	])

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<div className={styles.title}>{title}</div>
				<Icon
					className={styles.icon}
					iconName={isExpanded ? 'ChevronDown' : 'ChevronUp'}
					onClick={toggleExpanded}
				/>
			</div>
			<div style={{ display: isExpanded ? 'block' : 'none' }}>{children}</div>
		</div>
	)
}
