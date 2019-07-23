import { combineReducers } from 'redux'
import projects, { State as ProjectsState } from './projects'
import skills, { State as SkillsState } from './skills'
import topics, { State as TopicsState } from './topics'

export interface State {
	projects: ProjectsState
	skills: SkillsState
	topics: TopicsState
}

export default combineReducers({
	projects,
	skills,
	topics,
})
