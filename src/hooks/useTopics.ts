import { useSelector, useDispatch } from 'react-redux'
import { State } from '../state/reducers'
import { useEffect } from 'react'
import api from '../api'
import { receiveApiTopics } from '../state/actions'

export function useProjects() {
	const topics = useSelector((state: State) => state.apicache.topics)
	const dispatch = useDispatch()
	useEffect(() => {
		if (topics.length === 0) {
			api.getTopics().then(skilss => {
				dispatch(receiveApiTopics(skilss))
			})
		}
	}, [topics, dispatch])

	return topics
}
