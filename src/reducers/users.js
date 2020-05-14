import { RECEIVE_USERS } from '../actions/users'
import { SUBMIT_ANSWER, SUBMIT_QUESTION } from '../actions/questions'

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
		case SUBMIT_QUESTION:
			return {
				...state,
				[action.question.author]: {
					...state[action.question.author],
					questions: state[action.question.author].questions.concat([action.question.id])
				}
			}
		default:
			return state
	}
}