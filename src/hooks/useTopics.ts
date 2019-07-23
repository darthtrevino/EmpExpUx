import { useSelector, useDispatch } from 'react-redux'
import { State } from '../state/reducers'
import { useEffect } from 'react'
import api from '../api'
import { receiveApiTopics } from '../state/actions'

export function useTopics() {
	const topics = useSelector((state: State) => state.apicache.topics)
	const dispatch = useDispatch()
	useEffect(() => {
		if (topics.length === 0) {
			api.getTopics().then(topics => dispatch(receiveApiTopics(topics)))
		}
	}, [topics, dispatch])

	return topics
}
