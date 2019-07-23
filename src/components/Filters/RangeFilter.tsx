import React, { memo, useRef } from 'react'

// @ts-ignore
import styled from 'styled-components'

export interface RangeFilterProps {
	range: [number, number]
	onSelectionChanged: (selection: [number, number]) => void
}

export const RangeFilter: React.FC<RangeFilterProps> = memo(
	({ onSelectionChanged, range: [min, max] }) => {
		const minRef = useRef<HTMLInputElement>(null)
		const maxRef = useRef<HTMLInputElement>(null)
		return (
			<Container>
				<input
					ref={minRef}
					type="number"
					value={min}
					onChange={() => {
						onSelectionChanged([
							minRef.current!.value,
							maxRef.current!.value,
						] as any)
					}}
				></input>
				<input
					ref={maxRef}
					type="number"
					value={max}
					onChange={() =>
						onSelectionChanged([
							minRef.current!.value,
							maxRef.current!.value,
						] as any)
					}
				></input>
			</Container>
		)
	},
)

const Container = styled.div`
	display: flex;
	flex-direction: column;
	margin: 10px;
`
