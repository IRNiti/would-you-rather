import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class QuestionList extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.questions.map((q) => (
                        <Question key={q} id={q}/>
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({users, questions, authedUser}, {answered}){
    let filteredQuestions = []

    if(authedUser) {
        const answeredQuestions = Object.keys(users[authedUser].answers)
        if (answered === true) {
            filteredQuestions = answeredQuestions
        } else {
            filteredQuestions = Object.keys(questions).filter((qid) => !answeredQuestions.includes(qid))
        }
    }


    return{
        questions: filteredQuestions
    }
}

export default connect(mapStateToProps)(QuestionList)