import React, { memo } from 'react'
import styled from 'styled-components'

export interface PageProps {
	name: string
}
export const Page: React.FC<PageProps> = memo(({ name, children }) => (
	<PageContainer>
		<Title>{name}</Title>
		{children}
	</PageContainer>
))

const PageContainer = styled.div`
	flex-direction: column;
	min-height: 100%;
	overflow: scroll;
`

const Title = styled.div`
	font-size: 36px;
	text-align: left;
	margin: 15px;
	font-weight: 300;
`
