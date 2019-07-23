import React, { memo } from 'react'
import { AttributeContainer, AttributeName, AttributeValue } from './common'

export interface TagAttributeProps {
	name: string
	value: string[]
}

export const TagAttribute: React.FC<TagAttributeProps> = memo(
	({ name, value }) => (
		<AttributeContainer>
			<AttributeName>{name}</AttributeName>
			<AttributeValue>{value.join(', ')}</AttributeValue>
		</AttributeContainer>
	),
)
