import React, { useMemo, useCallback, memo } from 'react'
import { TagPicker, ITag } from 'office-ui-fabric-react'
import styles from './CategoryFilter.module.scss'

export interface CategoryFilterProps {
	categories: string[]
	selectedCategories: string[]
	itemLimit?: number
	onSelectionChanged: (selection: string[]) => void
}

export const CategoryFilter: React.FC<CategoryFilterProps> = memo(
	({ categories, selectedCategories, itemLimit = 5, onSelectionChanged }) => {
		const suggestions = useMemo<ITag[]>(() => categories.map(toTag), [
			categories,
		])

		const handleFilterChanged = useCallback(
			(filterText: string, tagList: ITag[]): ITag[] => {
				if (!filterText) {
					return []
				}
				return suggestions
					.filter(s => isTagQueryMatch(filterText, s))
					.filter(tag => !isTagAlreadyPresent(tag, tagList))
			},
			[suggestions],
		)
		const handleTagsChanged = useCallback(
			(items: ITag[] | undefined) => {
				onSelectionChanged((items || []).map(i => i.key))
			},
			[onSelectionChanged],
		)

		const selectedItems = useMemo(() => selectedCategories.map(toTag), [
			selectedCategories,
		])

		return (
			<div className={styles.container}>
				<div className={styles.row}>
					<TagPicker
						onResolveSuggestions={handleFilterChanged as any}
						selectedItems={selectedItems}
						pickerSuggestionsProps={{
							suggestionsHeaderText: 'Suggested Skils',
							noResultsFoundText: 'No Skills Found',
						}}
						itemLimit={itemLimit}
						onChange={handleTagsChanged}
					/>
				</div>
			</div>
		)
	},
)

const isTagQueryMatch = (text: string, tag: ITag) =>
	tag.name.toLowerCase().indexOf(text.toLowerCase()) === 0

const isTagAlreadyPresent = (tag: ITag, tagList?: ITag[]) => {
	if (!tagList || !tagList.length || tagList.length === 0) {
		return false
	}
	return tagList.filter(compareTag => compareTag.key === tag.key).length > 0
}

const toTag = (id: string) => ({ key: id, name: id } as ITag)
