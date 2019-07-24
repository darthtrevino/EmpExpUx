import api from './api'
import { getCurrentUser } from './ClientStorage'
import store from './state'
import {
	receiveCurrentUser,
	receiveRequestsMadeByMe,
	receiveRequestsMadeToMe,
} from './state/actions'

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
	api.getEmployees().then(employees => {
		const found = employees.find(e => e.email === login)
		if (found) {
			store.dispatch(receiveCurrentUser(found))
		}
	})
}
