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

const toCategorySelection = (id: string) =>
	({ id, name: id } as CategorySelection)

export interface CategoryFilterProps {
	categories: string[]
	onSelectionChanged: (selection: string[]) => void
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
	categories,
	onSelectionChanged,
}) => {
	const [selected, setSelected] = useState<CategorySelection[]>([])
	const [interacted, setInteracted] = useState(false)
	const suggestions = useMemo<CategorySelection[]>(
		() => categories.map(toCategorySelection),
		[categories],
	)
	useEffect(() => {
		if (interacted) {
			onSelectionChanged(selected.map(s => s.id))
		}
	}, [selected, interacted, onSelectionChanged])

	const handleAdd = useCallback(
		(items: CategorySelection | CategorySelection[]) => {
			setInteracted(true)
			if (Array.isArray(items)) {
				setSelected([...selected, ...items])
			} else {
				if (!selected.some(s => s.id === items.id)) {
					setSelected([...selected, items])
				}
			}
		},
		[selected],
	)

	const handleRemove = useCallback(
		(index: number) => {
			setInteracted(true)
			setSelected([...selected.slice(0, index), ...selected.slice(index + 1)])
		},
		[selected],
	)
	const [selectedOption, setSelectedOption] = useState(categories[0])
	useEffect(() => {
		setSelectedOption(categories[0])
	}, [categories])

	const handleButtonClick = useCallback(
		() => handleAdd(toCategorySelection(selectedOption)),
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
	height: 25px;
	margin: 5px 5px 5px 0;
`

const CategoryButton = styled.button`
	height: 25px;
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
