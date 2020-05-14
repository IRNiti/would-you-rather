import { RECEIVE_QUESTIONS, SUBMIT_ANSWER, SUBMIT_QUESTION } from '../actions/questions'

export default function questions (state = {}, action) {
    switch(action.type){
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case SUBMIT_ANSWER:
            return {
                ...state,
                [action.qid]: {
                    ...state[action.qid],
                    [action.answer]:{
                        ...state[action.qid][action.answer],
                        votes: state[action.qid][action.answer].votes.concat([action.authedUser])
                    }
                }
            }
        case SUBMIT_QUESTION:
            return{
                ...state,
                [action.question.id]: action.question
            }
        default:
            return state
    }
}