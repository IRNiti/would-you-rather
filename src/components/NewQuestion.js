import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleSubmitNewQuestion } from '../actions/questions'
import serializeForm from 'form-serialize'

class NewQuestion extends Component {
    state = {
        optionOne: '',
        optionTwo: ''
    }

    handleChange = (event) => {
        const input = event.target.value
        const field = event.target.name
        console.log(input)
        console.log(event.target)
        this.setState(() => ({
            [field]: input
        }))
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const formValues = serializeForm(event.target, {hash: true})
        const question = {
            author: this.props.authedUser,
            optionOneText: formValues.optionOne,
            optionTwoText: formValues.optionTwo
        }
        this.props.dispatch(handleSubmitNewQuestion(question))
        this.setState(() => ({
            optionOne: '',
            optionTwo: ''
        }))
    }

    render() {
        return(
            <div>
                <h2>Create New Question</h2>
                <p>Complete the question</p>
                <h3>Would you rather...</h3>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input
                            type='text'
                            name='optionOne'
                            placeholder='Enter Option One Text Here...'
                            value={this.state.optionOne}
                            onChange={this.handleChange}
                        />
                        <p>OR</p>
                        <input
                            type='text'
                            name='optionTwo'
                            placeholder='Enter Option Two Text Here...'
                            value={this.state.optionTwo}
                            onChange={this.handleChange}
                        />
                    </div>
                    <button type='submit'>Submit</button>
                </form>

            </div>
        )
    }
}

function mapStateToProps({authedUser}){
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(NewQuestion)