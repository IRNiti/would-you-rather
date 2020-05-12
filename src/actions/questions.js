import { _saveQuestionAnswer } from '../utils/_DATA'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SUBMIT_ANSWER = 'SUBMIT_ANSWER'

export function receiveQuestions(questions){
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

function submitAnswer(authedUser, qid, answer){
    return {
        type: SUBMIT_ANSWER,
        authedUser,
        qid,
        answer
    }
}

export function handleSubmitAnswer(answer){
    return (dispatch) => {
        _saveQuestionAnswer(answer).then(() => {
            dispatch(submitAnswer(answer.authedUser, answer.qid, answer.answer))
        }).catch((err) => {
            console.warn('error submitting answer: ', err)
            alert('Error submitting answer. Please try again.')
        })
    }
}