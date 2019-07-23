import React, { memo, useMemo } from 'react'
import styles from './Attributes.module.scss'

export interface NumericAttributeProps {
	name: string
	value: number
	color: string
}

export const NumericAttribute: React.FC<NumericAttributeProps> = memo(
	({ name, value, color }) => {
		const barStyle = useMemo(
			() => ({
				width: `${value}%`,
				backgroundColor: color,
			}),
			[value, color],
		)
		return (
			<div className={styles.attributeContainer}>
				<div className={styles.attributeName}>{name}</div>
				<div className={styles.metricAttribute}>
					<div className={styles.metricText}>{value}</div>
					<div className={styles.metricBack}>
						<div className={styles.metricBar} style={barStyle} />
					</div>
				</div>
			</div>
		)
	},
)
