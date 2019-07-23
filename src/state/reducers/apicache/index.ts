import { combineReducers } from 'redux'
import projects, { State as ProjectsState } from './projects'
import skills, { State as SkillsState } from './skills'
import topics, { State as TopicsState } from './topics'
import users, { State as UsersState } from './users'

export interface State {
	projects: ProjectsState
	skills: SkillsState
	topics: TopicsState
	users: UsersState
}

export default combineReducers({
	projects,
	skills,
	topics,
	users,
})
