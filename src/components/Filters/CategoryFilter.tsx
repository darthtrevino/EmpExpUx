import React, { useState, useMemo, useCallback, useEffect, memo } from 'react'

// @ts-ignore
import ReactTags from 'react-tag-autocomplete'
import { ComboBox, PrimaryButton } from 'office-ui-fabric-react'
import 'react-tag-autocomplete/'
import styled from 'styled-components'
import './react-tags.css'
import { useTripwire } from '../../hooks/useTripwire'

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

export const CategoryFilter: React.FC<CategoryFilterProps> = memo(
	({ categories, onSelectionChanged }) => {
		const [selected, setSelected] = useState<CategorySelection[]>([])
		const [interacted, markInteracted] = useTripwire()
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
				markInteracted()
				if (Array.isArray(items)) {
					setSelected([...selected, ...items])
				} else {
					if (!selected.some(s => s.id === items.id)) {
						setSelected([...selected, items])
					}
				}
			},
			[selected, markInteracted],
		)

		const handleRemove = useCallback(
			(index: number) => {
				markInteracted()
				setSelected([...selected.slice(0, index), ...selected.slice(index + 1)])
			},
			[selected, markInteracted],
		)
		const [selectedOption, setSelectedOption] = useState(categories[0])
		useEffect(() => {
			setSelectedOption(categories[0])
		}, [categories])

		const handleButtonClick = useCallback(
			() => handleAdd(toCategorySelection(selectedOption)),
			[selectedOption, handleAdd],
		)

		const comboBoxOptions = useMemo(
			() => categories.map(c => ({ key: c, text: c })),
			[categories],
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
					<ComboBox
						selectedKey={selectedOption}
						options={comboBoxOptions}
						onChange={(props, item) => {
							if (item && item.key) {
								setSelectedOption(item.key as string)
							}
						}}
					></ComboBox>
					<PrimaryButton onClick={handleButtonClick}>Add</PrimaryButton>
				</RowRight>
			</Container>
		)
	},
)

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
