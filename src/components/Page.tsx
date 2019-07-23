import React, { memo } from 'react'
import styled from 'styled-components'

export interface PageProps {
	name: string
}
export const Page: React.FC<PageProps> = memo(({ name, children }) => (
	<PageContainer>{children}</PageContainer>
))

const PageContainer = styled.div`
	flex-direction: column;
	min-height: 100%;
	overflow: scroll;
`
