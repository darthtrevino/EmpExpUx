import React, { memo } from 'react'
import { TagItem, ITagItemStyles } from 'office-ui-fabric-react'
import styles from './Attributes.module.scss'

export interface TagAttributeProps {
	name: string
	value: string[]
}
export const TagAttribute: React.FC<TagAttributeProps> = memo(
	({ name, value }) => (
		<div className={styles.attributeContainer}>
			<div className={styles.attributeName}>{name}</div>
			<div className={styles.attributeValue}>
				{value.map((v, index) => (
					<TagItem
						styles={tagStyle}
						key={v}
						index={index}
						item={itemForValue(v)}
					>
						{v}
					</TagItem>
				))}
			</div>
		</div>
	),
)

const tagStyle: ITagItemStyles = {
	close: {
		display: 'none',
	},
	root: {
		display: 'inline',
	},
	text: {},
}

const itemForValue = (input: string) => ({ key: input, name: input })
