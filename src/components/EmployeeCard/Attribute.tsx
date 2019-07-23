import React, { memo } from 'react'
import { AttributeContainer, AttributeName, AttributeValue } from './common'

export interface AttributeProps {
	name: string
	value: string
}

export const Attribute: React.FC<AttributeProps> = memo(({ name, value }) => (
	<AttributeContainer>
		<AttributeName>{name}</AttributeName>
		<AttributeValue>{value}</AttributeValue>
	</AttributeContainer>
))
