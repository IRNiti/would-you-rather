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
            <div>
                <p>{author.name} asks: </p>
                <img src={author.avatarURL} alt={`Avatar of ${author.name}`} className='avatar'/>
                <h3>Would you rather... </h3>
                <form onSubmit={this.handleSubmit}>
                    <div>
                    <label>
                        <input
                            type="radio"
                            name="question"
                            value="optionOne"
                            onChange={this.handleChange}
                        />
                        {question.optionOne.text}
                    </label>
                    </div>
                    <div>
                    <label>
                        <input
                            type="radio"
                            name="question"
                            value="optionTwo"
                            onChange={this.handleChange}
                        />
                        {question.optionTwo.text}
                    </label>
                    </div>
                    <button type='submit'>Submit</button>
                </form>
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