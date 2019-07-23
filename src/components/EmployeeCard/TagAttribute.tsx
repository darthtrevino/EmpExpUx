import React from 'react'
import {
	AttributeContainer,
	AttributeName,
	AttributeValue,
} from './AttributeName'

export interface TagAttributeProps {
	name: string
	value: string[]
}

export const TagAttribute: React.FC<TagAttributeProps> = ({ name, value }) => (
	<AttributeContainer>
		<AttributeName>{name}</AttributeName>
		<AttributeValue>{value.join(', ')}</AttributeValue>
	</AttributeContainer>
)
