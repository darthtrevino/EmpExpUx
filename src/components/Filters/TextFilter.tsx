import React from 'react'

// @ts-ignore
import styled from 'styled-components'

export interface TextFilterProps {
	onSelectionChanged: (selection: string) => void
}

export const TextFilter: React.FC<TextFilterProps> = ({
	onSelectionChanged,
}) => {
	return (
		<Container>
			<input
				type="text"
				onChange={evt => onSelectionChanged(evt.target.value)}
			></input>
		</Container>
	)
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	margin: 10px;
`