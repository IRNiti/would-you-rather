import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionResultOption from './QuestionResultOption'

class QuestionResult extends Component {
    render(){
        const {author, question, answer, totalVotes} = this.props
        const options = ['optionOne', 'optionTwo']
        return(
            <div>
                <p>Asked by {author.name}</p>
                <img src={author.avatarURL} alt={`Avatar of ${author.name}`} className='avatar'/>
                <h3>Results:</h3>
                {options.map((option) => (
                    <QuestionResultOption totalVotes={totalVotes} answer={answer} question={question} option={option}/>
                ))}
            </div>
        )
    }
}

function mapStateToProps({questions, authedUser, users}, {id}){
    const answeredQuestion = questions[id]
    const totalVotes = answeredQuestion.optionOne.votes.length + answeredQuestion.optionTwo.votes.length
    return {
        question: answeredQuestion,
        author: users[answeredQuestion.author],
        answer: users[authedUser].answers[id],
        totalVotes
    }
}

export default connect(mapStateToProps)(QuestionResult)