import api from './api'
import { getCurrentUser } from './ClientStorage'
import store from './state'
import {
	receiveCurrentUser,
	receiveRequestsMadeByMe,
	receiveRequestsMadeToMe,
	receiveKudosToMe,
	receiveKudosFromMe,
} from './state/actions'

// TODO: this is pretty coarse. Don't use this as a normative example for data loading
export function loadCurrentUserData() {
	const login = getCurrentUser()
	if (login) {
		api.getExpertConnections(login).then(requests => {
			const requestsMadeByMe = requests.filter(
				r => r.type === 'requestsOriginatedByMe',
			)
			const requestsMadeToMe = requests.filter(
				r => r.type === 'requestsReceivedByMe',
			)
			store.dispatch(receiveRequestsMadeByMe(requestsMadeByMe))
			store.dispatch(receiveRequestsMadeToMe(requestsMadeToMe))
		})
		api.getKudos(login).then(kudos => {
			const kudosToMe = kudos.filter(k => k.suggestedToEmail === login)
			const kudosFromMe = kudos.filter(k => k.suggestedToEmail !== login)
			store.dispatch(receiveKudosToMe(kudosToMe))
			store.dispatch(receiveKudosFromMe(kudosFromMe))
		})
		api.getEmployees().then(employees => {
			const found = employees.find(e => e.email === login)
			if (found) {
				store.dispatch(receiveCurrentUser(found))
			}
		})
	}
}
