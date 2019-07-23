import React from 'react'
import {
	AttributeContainer,
	AttributeName,
	AttributeValue,
} from './AttributeName'

export interface AttributeProps {
	name: string
	value: string
}

export const Attribute: React.FC<AttributeProps> = ({ name, value }) => (
	<AttributeContainer>
		<AttributeName>{name}</AttributeName>
		<AttributeValue>{value}</AttributeValue>
	</AttributeContainer>
)
