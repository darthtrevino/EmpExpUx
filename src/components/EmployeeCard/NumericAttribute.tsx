import React, { memo } from 'react'
import { AttributeContainer, AttributeName, AttributeValue } from './common'

export interface NumericAttributeProps {
	name: string
	value: number
}

export const NumericAttribute: React.FC<NumericAttributeProps> = memo(
	({ name, value }) => (
		<AttributeContainer>
			<AttributeName>{name}</AttributeName>
			<AttributeValue>{value}</AttributeValue>
		</AttributeContainer>
	),
)
