import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleSubmitNewQuestion } from '../actions/questions'
import serializeForm from 'form-serialize'
import { Redirect } from 'react-router-dom'

// Connected component handling functionality to create a new question
class NewQuestion extends Component {
    state = {
        optionOne: '',
        optionTwo: '',
        toHome: false
    }

    handleChange = (event) => {
        const input = event.target.value
        const field = event.target.name
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
            optionTwo: '',
            toHome: true
        }))
    }

    render() {
        
        if(this.state.toHome === true){
            return <Redirect to='/' />
        }

        return(
            <div className='card card-single'>
                <div className="card-header">
                    <h2>Create New Question</h2>
                </div>
                <div className='question'>
                    <p>Complete the question</p>
                    <h4 className='question-new-title'>Would you rather...</h4>
                    <form onSubmit={this.handleSubmit} className='center'>
                        <div>
                            <input
                                type='text'
                                name='optionOne'
                                placeholder='Enter Option One Text Here...'
                                value={this.state.optionOne}
                                onChange={this.handleChange}
                                className='question-input'
                            />
                            <p>OR</p>
                            <input
                                type='text'
                                name='optionTwo'
                                placeholder='Enter Option Two Text Here...'
                                value={this.state.optionTwo}
                                onChange={this.handleChange}
                                className='question-input'
                            />
                        </div>
                        <button type='submit' className='btn btn-primary'>Submit</button>
                    </form>
                </div>
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