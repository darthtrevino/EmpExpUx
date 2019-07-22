import React from 'react'
import styled from 'styled-components'

export interface PageProps {
	name: string
}
export const Page: React.FC<PageProps> = ({ name, children }) => (
	<PageContainer>
		<Title text={name} />
		{children}
	</PageContainer>
)

const PageContainer = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
`

export interface TitleProps {
	text: string
}
const Title: React.FC<TitleProps> = ({ text }) => <div>{text}</div>
