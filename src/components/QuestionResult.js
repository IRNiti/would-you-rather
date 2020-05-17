import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionResultOption from './QuestionResultOption'

class QuestionResult extends Component {
    render(){
        const {author, question, answer, totalVotes} = this.props
        const options = ['optionOne', 'optionTwo']
        return(
            <div className='card card-single'>
                <div className="card-header">
                    <p>Asked by {author.name}</p>
                </div>
                <div className='question-detail'>
                    <img src={author.avatarURL} alt={`Avatar of ${author.name}`} className='avatar'/>
                    <div className='vl'/>
                    <div className='question center'>
                        <h3 className='card-title'>Results:</h3>
                        {options.map((option) => (
                            <QuestionResultOption key={option} totalVotes={totalVotes} answer={answer} question={question} option={option}/>
                        ))}
                    </div>
                </div>
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