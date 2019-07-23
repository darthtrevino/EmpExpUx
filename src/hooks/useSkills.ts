import { useSelector, useDispatch } from 'react-redux'
import { State } from '../state/reducers'
import { useEffect } from 'react'
import api from '../api'
import { receiveApiSkills } from '../state/actions'

export function useSkills() {
	const skills = useSelector((state: State) => state.apicache.skills)
	const dispatch = useDispatch()
	useEffect(() => {
		if (skills.length === 0) {
			api.getSkills().then(skills => dispatch(receiveApiSkills(skills)))
		}
	}, [skills, dispatch])

	return skills
}
