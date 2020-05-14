import { _saveQuestionAnswer, _saveQuestion } from '../utils/_DATA'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SUBMIT_ANSWER = 'SUBMIT_ANSWER'
export const SUBMIT_QUESTION = 'SUBMIT_QUESTION'

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

function submitNewQuestion(question){
    return {
        type: SUBMIT_QUESTION,
        question
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

export function handleSubmitNewQuestion(question){
    return (dispatch) => {
        _saveQuestion(question).then((response) => {
            dispatch(submitNewQuestion(response))
        }).catch((err) => {
            console.warn('error submitting new question: ', err)
            alert('Error submitting new question. Please try again.')
        })
    }
}