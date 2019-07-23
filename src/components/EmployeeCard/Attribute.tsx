import React, { memo } from 'react'
import styles from './Attributes.module.scss'

export interface AttributeProps {
	name: string
	value: string
}

export const Attribute: React.FC<AttributeProps> = memo(({ name, value }) => (
	<div className={styles.attributeContainer}>
		<div className={styles.attributeName}>{name}</div>
		<div className={styles.attributeValue}>{value}</div>
	</div>
))
