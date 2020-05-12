import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FormControl, RadioGroup, FormControlLabel, Radio } from '@material-ui/core'
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
                Question vote:
                <p>{author.name} asks: </p>
                <img src={author.avatarURL} alt={`Avatar of ${author.name}`} className='avatar'/>
                <p>Would you rather: </p>
                <form onSubmit={this.handleSubmit}>
                    <FormControl component="fieldset">
                        <RadioGroup aria-label="question" name="question" value={this.state.selection} onChange={this.handleChange}>
                            <FormControlLabel value="optionOne" control={<Radio />} label={question.optionOne.text} />
                            <FormControlLabel value="optionTwo" control={<Radio />} label={question.optionTwo.text} />
                        </RadioGroup>
                    </FormControl>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

function mapStateToProps({questions, users, authedUser}, {match}){
    const id = match.params.id
    return {
        author: users[questions[id].author],
        question: questions[id],
        authedUser
    }
}

export default connect(mapStateToProps)(QuestionVote)