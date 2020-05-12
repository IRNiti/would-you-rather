import { RECEIVE_USERS } from '../actions/users'
import { SUBMIT_ANSWER } from '../actions/questions'

export default function users (state = {}, action) {
	switch(action.type){
		case RECEIVE_USERS:
			return {
				...state,
				...action.users
			}
		case SUBMIT_ANSWER:
			return {
				...state,
				[action.authedUser]: {
					...state[action.authedUser],
					answers: {
						...state[action.authedUser].answers,
						[action.qid]: action.answer
					}
				}
			}
		default:
			return state
	}
}