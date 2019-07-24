import api from './api'
import { getCurrentUser } from './ClientStorage'
import store from './state'
import { receiveCurrentUser } from './state/actions'

const currentUserEmail = getCurrentUser()
if (currentUserEmail) {
	api.getEmployees().then(employees => {
		const found = employees.find(e => e.email === currentUserEmail)
		if (found) {
			store.dispatch(receiveCurrentUser(found))
		}
	})
}
