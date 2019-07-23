import React, { memo, useMemo } from 'react'
import styled from 'styled-components'
import { AttributeContainer, AttributeName, AttributeValue } from './common'

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
			<AttributeContainer>
				<AttributeName>{name}</AttributeName>
				<MetricAttribute>
					<MetricText>{value}</MetricText>
					<MetricBack>
						<MetricBar style={barStyle} />
					</MetricBack>
				</MetricAttribute>
			</AttributeContainer>
		)
	},
)

const MetricText = styled.div`
	position: absolute;
	right: 5px;
`
const MetricAttribute = styled(AttributeValue)`
	align-items: center;
	display: flex;
	position: relative;
`

const MetricBack = styled.div`
	width: 100%;
	height: 3px;
`

const MetricBar = styled.div`
	height: 100%;
`
