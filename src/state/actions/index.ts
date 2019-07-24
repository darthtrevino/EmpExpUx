import { createAction } from 'redux-actions'
import {
	ExpertConnection,
	Project,
	Skill,
	Topic,
	Employee,
	Kudo,
} from '../../api'

// Action Types
export const RECEIVE_API_PROJECTS = 'RECEIVE_API_PROJECTS'
export const RECEIVE_API_SKILLS = 'RECEIVE_API_SKILLS'
export const RECEIVE_API_TOPICS = 'RECEIVE_API_TOPICS'
export const RECEIVE_API_USERS = 'RECEIVE_API_USERS'
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const RECEIVE_REQUESTS_MADE_BY_ME = 'RECEIVE_REQUESTS_MADE_BY_ME'
export const RECEIVE_REQUESTS_MADE_TO_ME = 'RECEIVE_REQUESTS_MADE_TO_ME'
export const RECEIVE_KUDOS_TO_ME = 'RECEIVE_KUDOS_TO_ME'
export const RECEIVE_KUDOS_FROM_ME = 'RECEIVE_KUDOS_FROM_ME'

// Action Creators
export const receiveApiProjects = createAction<Project[]>(RECEIVE_API_PROJECTS)
export const receiveApiSkills = createAction<Skill[]>(RECEIVE_API_SKILLS)
export const receiveApiTopics = createAction<Topic[]>(RECEIVE_API_TOPICS)
export const receiveApiUsers = createAction<string[]>(RECEIVE_API_USERS)
export const receiveCurrentUser = createAction<Employee>(RECEIVE_CURRENT_USER)
export const receiveRequestsMadeByMe = createAction<ExpertConnection[]>(
	RECEIVE_REQUESTS_MADE_BY_ME,
)
export const receiveRequestsMadeToMe = createAction<ExpertConnection[]>(
	RECEIVE_REQUESTS_MADE_TO_ME,
)
export const receiveKudosToMe = createAction<Kudo[]>(RECEIVE_KUDOS_TO_ME)
export const receiveKudosFromMe = createAction<Kudo[]>(RECEIVE_KUDOS_FROM_ME)
