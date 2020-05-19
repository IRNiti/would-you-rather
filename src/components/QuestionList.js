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
    let sortedQuestions = []

    if(authedUser) {
        filteredQuestions = Object.keys(users[authedUser].answers)
        if (!answered) {
            filteredQuestions = Object.keys(questions).filter((qid) => !filteredQuestions.includes(qid))
        }
        sortedQuestions = filteredQuestions.sort((a,b) => questions[b].timestamp - questions[a].timestamp)
    }


    return{
        questions: sortedQuestions
    }
}

export default connect(mapStateToProps)(QuestionList)