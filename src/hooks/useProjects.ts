import { useSelector, useDispatch } from 'react-redux'
import { State } from '../state/reducers'
import { useEffect } from 'react'
import api from '../api'
import { receiveApiProjects } from '../state/actions'

export function useProjects() {
	const projects = useSelector((state: State) => state.apicache.projects)
	const dispatch = useDispatch()
	useEffect(() => {
		if (projects.length === 0) {
			api.getProjects().then(projects => {
				dispatch(receiveApiProjects(projects))
			})
		}
	}, [projects, dispatch])

	return projects
}
