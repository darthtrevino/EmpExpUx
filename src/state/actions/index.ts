import { createAction } from 'redux-actions'

// Action Types
export const RECEIVE_API_PROJECTS = 'RECEIVE_API_PROJECTS'

// Action Creators
export const receiveApiProjects = createAction<string[]>(RECEIVE_API_PROJECTS)
