import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Question extends Component{
    render() {
        const {question, users, id} = this.props
        return(
            <Link to={`/question/${id}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                <p>{users[question.author].name} asks: </p>
                <img src={users[question.author].avatarURL} alt={`Avatar of ${users[question.author].name}`} className='avatar'/>
                <p>Would you rather: </p>
                <p>...{question.optionOne.text}...</p>
            </Link>
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