import React, { Component } from 'react'
import { connect } from 'react-redux'

class Question extends Component{
    render() {
        const {question, users} = this.props
        return(
            <div>
                <p>{users[question.author].name} asks: </p>
                <img src={users[question.author].avatarURL} alt={`Avatar of ${users[question.author].name}`} className='avatar'/>
                <p>Would you rather: </p>
                <p>{question.optionOne.text}</p>
            </div>
        )
    }
}

function mapStateToProps({questions, users}, {id}){
    return{
        question: questions[id],
        users
    }
}

export default connect(mapStateToProps)(Question)