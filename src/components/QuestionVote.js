import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleSubmitAnswer } from '../actions/questions'

class QuestionVote extends Component {
    state = {
        selection: ''
    }

    handleChange = (event) => {
        const input = event.target.value
        this.setState(() => ({
            selection: input
        }))
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const {authedUser, question} = this.props
        this.props.dispatch(handleSubmitAnswer({
            authedUser,
            qid: question.id,
            answer: this.state.selection
        }))
    }

    render() {
        const {author, question} = this.props

        return(
            <div className='card card-single'>
                <div className="card-header">
                    <p>{author.name} asks: </p>
                </div>
                <div className='question-detail'>
                    <img src={author.avatarURL} alt={`Avatar of ${author.name}`} className='avatar'/>
                    <div className='vl'/>
                    <div className='question'>
                        <h3 className='card-title center'>Would you rather... </h3>
                        <form onSubmit={this.handleSubmit}>
                            <div className='question-vote'>
                            <label>
                                <input
                                    type="radio"
                                    name="question"
                                    value="optionOne"
                                    onChange={this.handleChange}
                                />
                                <div className='question-option'>
                                    {question.optionOne.text}
                                </div>
                            </label>
                            </div>
                            <div className='question-vote'>
                            <label>
                                <input
                                    type="radio"
                                    name="question"
                                    value="optionTwo"
                                    onChange={this.handleChange}
                                />
                                <div className='question-option'>
                                    {question.optionTwo.text}
                                </div>
                            </label>
                            </div>
                            <button type='submit' className='btn btn-primary'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({questions, users, authedUser}, {id}){
    return {
        author: users[questions[id].author],
        question: questions[id],
        authedUser
    }
}

export default connect(mapStateToProps)(QuestionVote)