import React from 'react'
import styled from 'styled-components'

export interface PageProps {
	name: string
}
export const Page: React.FC<PageProps> = ({ name, children }) => (
	<PageContainer>
		<Title>{name}</Title>
		{children}
	</PageContainer>
)

const PageContainer = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
`

const Title = styled.div`
	font-size: 36px;
	text-align: left;
	margin: 15px;
	font-weight: 300;
`
