import { _getUsers } from '../utils/_DATA'
import { receiveUsers } from './users'
import { showLoading, hideLoading } from 'react-redux-loading'

export function handleInitialData() {
	return (dispatch) => {
		dispatch(showLoading())
		return _getUsers().then((users) => {
			dispatch(receiveUsers(users))
			dispatch(hideLoading())
		})
	}
}