import { combineReducers } from 'redux'
import projects, { State as ProjectsState } from './projects'

export interface State {
	projects: ProjectsState
}

export default combineReducers({
	projects,
})
