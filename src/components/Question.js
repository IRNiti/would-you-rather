import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Question extends Component{
    render() {
        const {question, users, id} = this.props
        return(
            <div className='card card-question'>

                    <div className="card-header">
                        <p>{users[question.author].name} asks: </p>
                    </div>
                    <div className='question-detail'>
                        <img src={users[question.author].avatarURL} alt={`Avatar of ${users[question.author].name}`} className='avatar'/>
                        <div className='vl'/>
                        <div className='question center'>
                            <h5>Would you rather: </h5>
                            <p>...{question.optionOne.text}...</p>
                            <Link to={`/question/${id}`} className='link-question'>
                                <button className='btn btn-primary'>View Poll</button>
                            </Link>
                        </div>
                    </div>
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