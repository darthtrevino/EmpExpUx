import { createAction } from 'redux-actions'
import { Project, Skill, Topic } from '../../api'

// Action Types
export const RECEIVE_API_PROJECTS = 'RECEIVE_API_PROJECTS'
export const RECEIVE_API_SKILLS = 'RECEIVE_API_SKILLS'
export const RECEIVE_API_TOPICS = 'RECEIVE_API_TOPICS'

// Action Creators
export const receiveApiProjects = createAction<Project[]>(RECEIVE_API_PROJECTS)
export const receiveApiSkills = createAction<Skill[]>(RECEIVE_API_SKILLS)
export const receiveApiTopics = createAction<Topic[]>(RECEIVE_API_TOPICS)
