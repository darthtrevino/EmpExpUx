import React, { useState, useMemo, useCallback, useEffect } from 'react'
// @ts-ignore
import ReactTags from 'react-tag-autocomplete'
import 'react-tag-autocomplete/'
import styled from 'styled-components'
import './react-tags.css'

interface CategorySelection {
	id: string
	name: string
}

export interface CategoryFilterProps {
	categories: string[]
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
	categories,
}) => {
	const [selected, setSelected] = useState<CategorySelection[]>([])
	const suggestions = useMemo<CategorySelection[]>(
		() => categories.map(p => ({ id: p, name: p })),
		[categories],
	)

	const handleAdd = useCallback(
		(items: CategorySelection | CategorySelection[]) => {
			if (Array.isArray(items)) {
				setSelected([...selected, ...items])
			} else {
				setSelected([...selected, items])
			}
		},
		[selected],
	)

	const handleRemove = useCallback(
		(index: number) => {
			setSelected([...selected.slice(0, index), ...selected.slice(index + 1)])
		},
		[selected],
	)
	const [selectedOption, setSelectedOption] = useState(categories[0])
	useEffect(() => {
		setSelectedOption(categories[0])
	}, [categories])

	const handleButtonClick = useCallback(
		() =>
			handleAdd(({
				id: selectedOption,
				name: selectedOption,
			} as any) as CategorySelection),
		[selectedOption, handleAdd],
	)

	return (
		<Container>
			<Row>
				<ReactTags
					tags={selected}
					suggestions={suggestions}
					onDelete={handleRemove}
					onAddition={handleAdd}
					placeholder="Add category"
				/>
			</Row>
			<RowRight>
				<CategoryOption onChange={evt => setSelectedOption(evt.target.value)}>
					{categories.map(c => (
						<option key={c} value={c}>
							{c}
						</option>
					))}
				</CategoryOption>
				<CategoryButton onClick={handleButtonClick}>Add</CategoryButton>
			</RowRight>
		</Container>
	)
}

const CategoryOption = styled.select`
	width: 200px;
	height: 35px;
	margin: 5px 5px 5px 0;
`

const CategoryButton = styled.button`
	height: 35px;
	margin: 5px 0 5px 0;
	border-radius: 5px;
`

const Row = styled.div`
	display: flex;
	flex-direction: row;
`

const RowRight = styled(Row)`
	justify-content: flex-end;
`

const Container = styled.div`
	display: flex;
	flex-direction: column;
	margin: 10px;
`
