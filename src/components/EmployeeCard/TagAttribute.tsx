import React, { memo } from 'react'
import styles from './Attributes.module.scss'

export interface TagAttributeProps {
	name: string
	value: string[]
}

export const TagAttribute: React.FC<TagAttributeProps> = memo(
	({ name, value }) => (
		<div className={styles.attributeContainer}>
			<div className={styles.attributeName}>{name}</div>
			<div className={styles.attributeValue}>{value.join(', ')}</div>
		</div>
	),
)
